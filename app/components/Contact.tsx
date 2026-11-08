"use client";

import { useEffect, useRef, useState } from "react";
import { KANTOOR } from "../lib/data";
import KantoorFoto from "./KantoorFoto";

const ONDERWERPEN = [
  { id: "waardebepaling", label: "Waardebepaling", kop: "Wat is uw woning waard?" },
  { id: "aankoop", label: "Aankoop", kop: "Samen uw woning vinden" },
  { id: "huren", label: "Huren of verhuren", kop: "Huren of verhuren, zonder gedoe" },
  { id: "beleggen", label: "Beleggen", kop: "Uw belegging doorrekenen" },
  { id: "taxatie", label: "Taxatie", kop: "Een taxatie aanvragen" },
  { id: "anders", label: "Iets anders", kop: "Waarmee kunnen we helpen?" },
] as const;

type Status = "rust" | "bezig" | "verzonden" | "fout";

export default function Contact() {
  const [onderwerp, setOnderwerp] = useState<string>("waardebepaling");
  const [status, setStatus] = useState<Status>("rust");
  const [fout, setFout] = useState("");
  const kopRef = useRef<HTMLHeadingElement>(null);

  // Elke link met data-onderwerp (plattegrond, werkwijze, header) zet het
  // juiste onderwerp klaar voordat de pagina naar #contact scrolt.
  useEffect(() => {
    const klik = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-onderwerp]");
      if (el?.dataset.onderwerp) setOnderwerp(el.dataset.onderwerp);
    };
    document.addEventListener("click", klik);
    return () => document.removeEventListener("click", klik);
  }, []);

  const metAdres = onderwerp === "waardebepaling" || onderwerp === "taxatie";
  const kop = ONDERWERPEN.find((o) => o.id === onderwerp)?.kop ?? ONDERWERPEN[0].kop;

  async function verstuur(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("bezig");
    setFout("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, onderwerp }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Verzenden mislukt");
      setStatus("verzonden");
      form.reset();
      requestAnimationFrame(() => kopRef.current?.focus());
    } catch (err) {
      setStatus("fout");
      setFout(err instanceof Error ? err.message : "Verzenden mislukt");
    }
  }

  const label = "plan-letter mb-1.5 block text-[11px] text-inkt-600";
  const veld =
    "h-11 w-full border border-inkt/60 lg:h-12 bg-calque-50 px-3.5 text-[16px] text-inkt placeholder:text-inkt-500 transition-colors hover:border-inkt focus:border-blauw focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blauw";

  return (
    <section id="contact" aria-labelledby="contact-titel" className="border-t border-lijn bg-calque-200/70 text-inkt">
      <div className="mx-auto grid max-w-blad grid-cols-[minmax(0,1fr)] gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <h2
            id="contact-titel"
            ref={kopRef}
            tabIndex={-1}
            className="display text-4xl focus:outline-none sm:text-5xl lg:text-[3.5rem]"
          >
            {status === "verzonden" ? "Dank u, we hebben uw aanvraag" : kop}
          </h2>
          <p className="mt-6 max-w-[32rem] text-[17px] leading-relaxed text-inkt-600">
            {status === "verzonden"
              ? "We nemen zo snel mogelijk contact met u op. Liever direct schakelen? Bel of app ons gerust."
              : "Laat uw gegevens achter voor een vrijblijvend kennismakingsgesprek. Liever direct contact? Dat kan ook buiten kantoortijden."}
          </p>

          <div className="mt-10">
            <KantoorFoto />
          </div>

          <dl className="maat mt-8 grid grid-cols-1 border-t-[3px] border-inkt text-[15px] sm:grid-cols-3">
            <div className="border-b border-lijn py-3 sm:border-b-0 sm:pr-4">
              <dt className="text-inkt-500">Telefoon</dt>
              <dd className="mt-0.5">
                <a href={KANTOOR.telefoonHref} className="font-medium hover:underline">
                  {KANTOOR.telefoon}
                </a>
              </dd>
            </div>
            <div className="border-b border-lijn py-3 sm:border-b-0 sm:border-l sm:px-4">
              <dt className="text-inkt-500">WhatsApp</dt>
              <dd className="mt-0.5">
                <a href={`https://wa.me/${KANTOOR.whatsapp}`} className="font-medium hover:underline" target="_blank" rel="noopener">
                  Stuur een bericht
                </a>
              </dd>
            </div>
            <div className="py-3 sm:border-l sm:pl-4">
              <dt className="text-inkt-500">E-mail</dt>
              <dd className="mt-0.5">
                <a href={`mailto:${KANTOOR.email}`} className="font-medium hover:underline">
                  {KANTOOR.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          noValidate={false}
          onSubmit={verstuur}
          className="border-[3px] border-inkt bg-calque-50 p-5 sm:p-7 lg:col-span-7 lg:col-start-6 lg:flex lg:flex-col lg:p-9"
          aria-describedby="contact-privacy"
        >
          <fieldset>
            <legend className={label}>Waar gaat het over?</legend>
            <div className="grid grid-cols-2 gap-px border border-inkt/50 bg-inkt/50 sm:grid-cols-3">
              {ONDERWERPEN.map((o) => (
                <label
                  key={o.id}
                  className={`relative flex min-h-[42px] cursor-pointer items-center justify-center px-3 text-center text-[14px] lg:min-h-[50px] lg:text-[15px] transition-colors has-[:focus-visible]:z-10 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-blauw ${
                    onderwerp === o.id ? "bg-blauw text-calque-50" : "bg-calque-50 text-inkt hover:bg-calque-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="onderwerp-keuze"
                    value={o.id}
                    checked={onderwerp === o.id}
                    onChange={() => setOnderwerp(o.id)}
                    className="sr-only"
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 grid gap-x-3 gap-y-4 sm:grid-cols-2 lg:mt-7 lg:flex-1 lg:grid-rows-[auto_auto_1fr] lg:gap-x-4 lg:gap-y-5">
            {metAdres ? (
              <div className="grid grid-cols-[minmax(0,1fr)_5.5rem] gap-3">
                <label>
                  <span className={label}>Postcode</span>
                  <input name="postcode" required autoComplete="postal-code" placeholder="1234 AB" className={veld} />
                </label>
                <label>
                  <span className={label}>Huisnr.</span>
                  <input name="huisnummer" required inputMode="text" placeholder="12" className={veld} />
                </label>
              </div>
            ) : null}
            <label className={metAdres ? "" : "sm:col-span-2"}>
              <span className={label}>Naam</span>
              <input name="naam" required autoComplete="name" className={veld} />
            </label>
            <label>
              <span className={label}>E-mail</span>
              <input name="email" type="email" required autoComplete="email" className={veld} />
            </label>
            <label>
              <span className={label}>Telefoon</span>
              <input name="telefoon" type="tel" autoComplete="tel" className={veld} />
            </label>
            <label className="sm:col-span-2 lg:flex lg:flex-col">
              <span className={label}>Toelichting (optioneel)</span>
              <textarea
                name="bericht"
                rows={2}
                className={`${veld} h-auto min-h-[72px] resize-y py-2.5 leading-relaxed lg:h-auto lg:min-h-[120px] lg:flex-1`}
              />
            </label>
            {/* Honeypot */}
            <label className="absolute -left-[9999px]" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-7">
            <button
              type="submit"
              disabled={status === "bezig"}
              className="knop knop-blauw px-7 disabled:cursor-progress disabled:opacity-70"
            >
              {status === "bezig" ? "Bezig met verzenden…" : onderwerp === "waardebepaling" ? "Waardebepaling aanvragen" : "Verstuur aanvraag"}
            </button>
            <p id="contact-privacy" className="max-w-[22rem] text-sm leading-relaxed text-inkt-500">
              We gebruiken uw gegevens alleen om contact met u op te nemen.
            </p>
          </div>
          {status === "fout" ? (
            <p role="alert" className="mt-5 border-t border-lijn pt-4 text-[15px] text-inkt">
              {fout}. Probeer het opnieuw, of bel ons op{" "}
              <a href={KANTOOR.telefoonHref} className="font-medium underline">
                {KANTOOR.telefoon}
              </a>
              .
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
