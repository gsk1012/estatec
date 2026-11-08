import { NextResponse } from "next/server";

/*
 * Ontvangt het contactformulier en mailt het via Resend (REST, geen extra
 * dependency). Vereist RESEND_API_KEY; CONTACT_TO en CONTACT_FROM optioneel.
 * Zelfde opzet als bij Telesto Motors.
 */

const MAX = 2000;
const ALLOWED_ORIGIN = /^https?:\/\/((www\.)?estatec\.nl|localhost(:\d+)?|127\.0\.0\.1(:\d+)?|[a-z0-9-]+\.vercel\.app)$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const ONDERWERP: Record<string, string> = {
  waardebepaling: "Waardebepaling",
  aankoop: "Aankoop",
  huren: "Huren of verhuren",
  beleggen: "Beleggen",
  taxatie: "Taxatie",
  anders: "Overig",
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clean = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");

export async function POST(req: Request) {
  if (!ALLOWED_ORIGIN.test(req.headers.get("origin") ?? "")) {
    return NextResponse.json({ error: "Niet toegestaan" }, { status: 403 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "onbekend";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Te veel aanvragen achter elkaar" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const naam = clean(body.naam);
  const email = clean(body.email);
  if (!naam || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Naam en een geldig e-mailadres zijn verplicht" }, { status: 400 });
  }

  const onderwerp = ONDERWERP[clean(body.onderwerp)] ?? "Overig";
  const rijen: [string, string][] = (
    [
      ["Onderwerp", onderwerp],
      ["Naam", naam],
      ["E-mail", email],
      ["Telefoon", clean(body.telefoon)],
      ["Postcode", clean(body.postcode)],
      ["Huisnummer", clean(body.huisnummer)],
      ["Toelichting", clean(body.bericht)],
    ] as [string, string][]
  ).filter(([, v]) => v);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ontbreekt");
    return NextResponse.json({ error: "Verzenden is nog niet ingesteld" }, { status: 500 });
  }

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#EDEFEC;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#15181B">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#F7F8F6;border:3px solid #15181B">
<tr><td style="padding:28px 32px;background:#15181B;color:#F7F8F6"><p style="margin:0;font:600 11px Helvetica,Arial;letter-spacing:.14em;text-transform:uppercase;color:#9DB4CC">ESTATEC · ${esc(onderwerp)}</p><h1 style="margin:10px 0 0;font:500 24px Helvetica,Arial">Nieuwe aanvraag van ${esc(naam)}</h1></td></tr>
<tr><td style="padding:16px 32px 28px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${rijen
  .map(
    ([k, v]) =>
      `<tr><td style="padding:12px 0;border-bottom:1px solid #C3C9C3;width:34%;color:#59616A;font-size:14px;vertical-align:top">${esc(k)}</td><td style="padding:12px 0;border-bottom:1px solid #C3C9C3;font-size:15px">${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
  )
  .join("")}
</table></td></tr></table></td></tr></table></body></html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "ESTATEC website <noreply@estatec.nl>",
      to: [process.env.CONTACT_TO ?? "info@estatec.nl"],
      reply_to: email,
      subject: `${onderwerp}: ${naam.replace(/[\r\n]+/g, " ")}`,
      html,
      text: rijen.map(([k, v]) => `${k}: ${v}`).join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend fout", res.status, await res.text());
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
