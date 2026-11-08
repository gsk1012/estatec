"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { KANTOOR } from "../lib/data";

const NAV = [
  { href: "#aanbod", label: "Aanbod" },
  { href: "#werkwijze", label: "Diensten" },
  { href: "#ontwikkeling", label: "Ontwikkeling" },
  { href: "#team", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

/*
 * Drie toestanden:
 *  - "top":  bovenaan de pagina, transparant over de film;
 *  - "film": gescrold maar nog boven de film, dichte inkt-balk;
 *  - "blad": voorbij de film, dichte calque-balk met haarlijn.
 */
type Stand = "top" | "film" | "blad";

export default function Header() {
  const [stand, setStand] = useState<Stand>("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-film");
    let frame = 0;
    const meet = () => {
      frame = 0;
      const y = window.scrollY;
      const headerH = 76;
      const filmEinde = hero ? hero.getBoundingClientRect().bottom + y - headerH : 0;
      setStand(!hero || y >= filmEinde ? "blad" : y > 24 ? "film" : "top");
    };
    const opScroll = () => {
      if (!frame) frame = requestAnimationFrame(meet);
    };
    meet();
    window.addEventListener("scroll", opScroll, { passive: true });
    window.addEventListener("resize", opScroll);
    return () => {
      window.removeEventListener("scroll", opScroll);
      window.removeEventListener("resize", opScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // "licht" = witte inhoud (logo, links) op de film of de inkt-balk.
  const licht = stand !== "blad" && !open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-300 ease-uit",
        open
          ? "border-lijn bg-calque text-inkt"
          : stand === "top"
            ? "op-donker border-calque-50/15 bg-transparent text-calque-50"
            : stand === "film"
              ? "op-donker border-calque-50/10 bg-inkt text-calque-50"
              : "border-lijn bg-calque text-inkt",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-blad items-center gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#top" className="relative flex shrink-0 items-center gap-3" aria-label="ESTATEC Makelaars, naar boven">
          <Image
            src={licht ? "/images/brand/estatec-logo-wit.png" : "/images/brand/estatec-logo-inkt.png"}
            alt=""
            width={500}
            height={431}
            priority
            className="h-11 w-auto"
          />
        </a>

        <nav aria-label="Hoofdmenu" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px]">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="py-2 decoration-current/40 underline-offset-[10px] hover:underline"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a
            href={KANTOOR.telefoonHref}
            className="maat hidden items-center gap-2 px-2 py-2 text-[15px] md:flex"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path
                d="M6.5 2.5h-3a1 1 0 0 0-1 1C2.5 11.8 8.2 17.5 16.5 17.5a1 1 0 0 0 1-1v-3l-3.5-1.5-2 2c-2-.9-3.6-2.5-4.5-4.5l2-2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            {KANTOOR.telefoon}
          </a>
          <a
            href="#contact"
            data-onderwerp="waardebepaling"
            className={`knop hidden sm:inline-flex ${licht ? "knop-lijn-licht" : "knop-blauw"}`}
          >
            Gratis waardebepaling
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            className="flex h-12 w-12 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobiel-menu"
        hidden={!open}
        className="h-[calc(100svh-var(--header-h))] overflow-y-auto border-t border-lijn bg-calque px-4 pb-10 pt-4 sm:px-6 lg:hidden"
      >
        <ul className="border-t-[3px] border-inkt">
          {NAV.map((n) => (
            <li key={n.href} className="border-b border-lijn">
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="display flex items-center justify-between py-5 text-3xl"
              >
                {n.label}
                <svg viewBox="0 0 16 16" className="h-5 w-5 text-blauw" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-3">
          <a
            href="#contact"
            data-onderwerp="waardebepaling"
            onClick={() => setOpen(false)}
            className="knop knop-blauw w-full"
          >
            Gratis waardebepaling
          </a>
          <a href={KANTOOR.telefoonHref} className="knop knop-lijn maat w-full">
            Bel {KANTOOR.telefoon}
          </a>
        </div>
      </div>
    </header>
  );
}
