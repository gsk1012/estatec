"use client";

import { useRef, useState } from "react";
import { TRAJECTEN } from "../lib/data";

/*
 * Elk traject als één doorlopende maatlijn met vijf maatstreepjes.
 * Tabs volgens het WAI-ARIA-patroon (pijltjestoetsen, Home/End).
 */
export default function Werkwijze() {
  const [actief, setActief] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = TRAJECTEN[actief];

  const kies = (i: number) => {
    const n = (i + TRAJECTEN.length) % TRAJECTEN.length;
    setActief(n);
    tabs.current[n]?.focus();
  };

  return (
    <section id="werkwijze" aria-labelledby="werkwijze-titel" className="bg-calque-200/70 py-24 sm:py-32">
      <div className="mx-auto max-w-blad px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="werkwijze-titel" className="display text-4xl sm:text-5xl lg:col-span-6">
            Zo werken we, per dienst, in vijf stappen
          </h2>
          <p className="max-w-[36rem] text-[17px] leading-relaxed text-inkt-600 lg:col-span-5 lg:col-start-8 lg:pt-2">
            Of u nu verkoopt, koopt, huurt of financiert: u weet vooraf wat er gebeurt en wie het doet. Ook na
            de overdracht kunt u bij ons terecht.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Diensten"
          className="mt-12 grid grid-cols-3 border-b-[3px] border-inkt sm:flex"
        >
          {TRAJECTEN.map((tr, i) => (
            <button
              key={tr.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${tr.id}`}
              aria-selected={actief === i}
              aria-controls={`paneel-${tr.id}`}
              tabIndex={actief === i ? 0 : -1}
              onClick={() => setActief(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") kies(i + 1);
                else if (e.key === "ArrowLeft") kies(i - 1);
                else if (e.key === "Home") kies(0);
                else if (e.key === "End") kies(TRAJECTEN.length - 1);
                else return;
                e.preventDefault();
              }}
              className={`plan-letter relative min-h-[48px] shrink-0 px-2 text-[11px] sm:min-h-[52px] sm:px-6 sm:text-[12px] outline-offset-[-3px] transition-colors sm:px-6 ${
                actief === i ? "bg-inkt text-calque-50" : "text-inkt-600 hover:text-inkt"
              }`}
            >
              {tr.naam}
            </button>
          ))}
        </div>

        <div
          key={t.id}
          role="tabpanel"
          id={`paneel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          className="regel-in pt-10"
          style={{ animationDuration: "420ms" }}
        >
          <p className="max-w-[46rem] text-lg leading-relaxed">{t.intro}</p>

          <ol className="relative mt-12 grid gap-0 lg:grid-cols-5">
            {/* Doorlopende maatlijn (desktop horizontaal, mobiel verticaal) */}
            <span aria-hidden="true" className="absolute left-0 right-0 top-[9px] hidden h-px bg-blauw lg:block" />
            <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-blauw lg:hidden" />
            {t.stappen.map((s, i) => (
              <li key={s.titel} className="relative pb-9 pl-10 lg:pb-0 lg:pl-0 lg:pr-8">
                {/* Maatstreepje met het stapnummer erop, zoals een maatvoeringspunt */}
                <span
                  aria-hidden="true"
                  className="maat absolute left-[-1px] top-[-2px] flex h-[19px] min-w-[17px] items-center justify-center bg-blauw px-1 text-[11px] font-semibold text-calque-50 lg:static lg:flex lg:w-fit"
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-medium lg:mt-5" style={{ fontStretch: "106%" }}>
                  <span className="sr-only">Stap {i + 1}: </span>
                  {s.titel}
                </h3>
                <p className="mt-2 max-w-[30ch] text-[15px] leading-relaxed text-inkt-600 lg:max-w-none">
                  {s.tekst}
                </p>
              </li>
            ))}
          </ol>

          {t.noot ? (
            <p className="mt-10 max-w-[52rem] border-t border-lijn pt-5 text-[15px] leading-relaxed text-inkt-600">
              <span className="font-medium text-inkt">Goed om te weten: </span>
              {t.noot}
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" data-onderwerp={onderwerpVoor(t.id)} className="knop knop-inkt">
              {actieVoor(t.id)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function onderwerpVoor(id: string) {
  return (
    { verkoop: "waardebepaling", aankoop: "aankoop", verhuur: "huren", aanhuur: "huren", taxatie: "taxatie", financiering: "beleggen" } as Record<string, string>
  )[id];
}

function actieVoor(id: string) {
  return (
    {
      verkoop: "Gratis waardebepaling aanvragen",
      aankoop: "Plan een kennismaking",
      verhuur: "Woning laten verhuren",
      aanhuur: "Zoekopdracht starten",
      taxatie: "Taxatie aanvragen",
      financiering: "Financiering bespreken",
    } as Record<string, string>
  )[id];
}
