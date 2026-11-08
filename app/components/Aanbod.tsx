"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AANBOD, KANTOOR, TELLING, euro, type Woning } from "../lib/data";
import Maatlijn from "./Maatlijn";

type Soort = "koop" | "huur";

function WoningKaart({ w, eerste }: { w: Woning; eerste: boolean }) {
  return (
    <li className="w-[84%] shrink-0 snap-start border border-lijn bg-calque-50 sm:w-auto sm:border-0">
      <a
        href={w.href}
        className="group flex h-full flex-col outline-offset-[-3px]"
        aria-label={`${w.straat}, ${w.plaats}: ${w.type}, ${w.m2} m², ${w.kamers} kamers, ${
          w.soort === "koop" ? `${euro(w.prijs)} kosten koper` : `${euro(w.prijs)} per maand`
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-calque-200">
          <Image
            src={w.foto}
            alt={`${w.type} aan de ${w.straat} in ${w.plaats}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            priority={eerste}
            className="object-cover transition-transform duration-500 ease-uit group-hover:scale-[1.025]"
          />
          <span className="plan-letter absolute left-0 top-0 bg-blauw px-2.5 py-1.5 text-[10px] text-calque-50">
            {w.soort === "koop" ? "Te koop" : "Te huur"}
          </span>
        </div>
        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <Maatlijn tone="blauw" label={`${w.m2} m²`} className="mb-4" />
          <h3 className="text-lg font-medium leading-snug" style={{ fontStretch: "105%" }}>
            {w.straat}
          </h3>
          <p className="plan-letter mt-1 text-[11px] text-inkt-500">{w.plaats}</p>
          <dl className="maat mt-4 grid grid-cols-2 border-t border-lijn pt-3 text-sm">
            <div>
              <dt className="sr-only">Type</dt>
              <dd className="text-inkt-600">{w.type}</dd>
            </div>
            <div className="text-right">
              <dt className="sr-only">Kamers</dt>
              <dd className="text-inkt-600">{w.kamers} kamers</dd>
            </div>
          </dl>
          <p className="maat mt-auto pt-4 text-xl font-medium" style={{ fontStretch: "108%" }}>
            {euro(w.prijs)}
            <span className="ml-1.5 text-sm font-normal text-inkt-500">
              {w.soort === "koop" ? "k.k." : "p/m"}
            </span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default function Aanbod() {
  const [soort, setSoort] = useState<Soort>("koop");
  const [plaats, setPlaats] = useState("alle");
  const [kamers, setKamers] = useState(0);

  const plaatsen = useMemo(
    () => Array.from(new Set(AANBOD.filter((w) => w.soort === soort).map((w) => w.plaats))).sort(),
    [soort],
  );

  const lijst = AANBOD.filter(
    (w) => w.soort === soort && (plaats === "alle" || w.plaats === plaats) && w.kamers >= kamers,
  );

  const veld =
    "h-12 w-full appearance-none border border-inkt/80 bg-calque-50 px-3 pr-9 text-[15px] text-inkt transition-colors hover:border-inkt";

  return (
    <section id="aanbod" aria-labelledby="aanbod-titel" className="bg-calque pt-24 sm:pt-32">
      <div className="mx-auto max-w-blad px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="aanbod-titel" className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
              Nu in ons aanbod
            </h2>
            <p className="mt-5 max-w-[38rem] text-[17px] leading-relaxed text-inkt-600">
              {TELLING.teKoop} koopwoningen en {TELLING.teHuur} huurwoningen, van Amstelveen tot Zaandam.
              Ook te vinden op{" "}
              <a href={KANTOOR.funda} className="underline" rel="noopener" target="_blank">
                Funda
              </a>{" "}
              en{" "}
              <a href={KANTOOR.pararius} className="underline" rel="noopener" target="_blank">
                Pararius
              </a>
              .
            </p>
          </div>

          {/* Zoeken: werkt direct op het aanbod hieronder */}
          <form
            role="search"
            aria-label="Aanbod filteren"
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2 gap-3 sm:grid-cols-[auto_1fr_1fr] lg:col-span-5"
          >
            <fieldset className="col-span-2 flex border border-inkt sm:col-span-1">
              <legend className="sr-only">Koop of huur</legend>
              {(["koop", "huur"] as Soort[]).map((s) => (
                <label
                  key={s}
                  className={`plan-letter flex h-[46px] flex-1 cursor-pointer items-center justify-center px-5 text-[12px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blauw ${
                    soort === s ? "bg-inkt text-calque-50" : "text-inkt hover:bg-calque-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="soort"
                    value={s}
                    checked={soort === s}
                    onChange={() => {
                      setSoort(s);
                      setPlaats("alle");
                      setKamers(0);
                    }}
                    className="sr-only"
                  />
                  {s === "koop" ? "Koop" : "Huur"}
                </label>
              ))}
            </fieldset>
            <label className="relative block">
              <span className="sr-only">Plaats</span>
              <select value={plaats} onChange={(e) => setPlaats(e.target.value)} className={veld}>
                <option value="alle">Alle plaatsen</option>
                {plaatsen.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <Pijl />
            </label>
            <label className="relative block">
              <span className="sr-only">Minimaal aantal kamers</span>
              <select value={kamers} onChange={(e) => setKamers(Number(e.target.value))} className={veld}>
                <option value={0}>Alle kamers</option>
                {[2, 3, 4, 5, 6].map((k) => (
                  <option key={k} value={k}>
                    {k}+ kamers
                  </option>
                ))}
              </select>
              <Pijl />
            </label>
          </form>
        </div>

        <Maatlijn
          className="mt-12"
          label={`${lijst.length} ${lijst.length === 1 ? "woning" : "woningen"}`}
        />
        <p className="sr-only" aria-live="polite">
          {lijst.length} {lijst.length === 1 ? "woning gevonden" : "woningen gevonden"}
        </p>

        {lijst.length ? (
          <ul className="relative -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 sm:gap-px sm:border-y sm:bg-lijn [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:border-x sm:px-0 xl:grid-cols-4" aria-label="Woningen">
            {lijst.map((w, i) => (
              <WoningKaart key={w.id} w={w} eerste={i === 0} />
            ))}
          </ul>
        ) : (
          <div className="arcering mt-6 border border-dashed border-inkt/50 px-6 py-14 text-center">
            <p className="display text-2xl">Geen woning die precies past.</p>
            <p className="mx-auto mt-3 max-w-[34rem] text-inkt-600">
              Veel woningen gaan via ons netwerk weg voordat ze online staan. Laat uw wensen achter, dan
              zoeken wij actief mee.
            </p>
            <a href="#contact" data-onderwerp={soort === "koop" ? "aankoop" : "huren"} className="knop knop-inkt mt-6">
              Zoekopdracht achterlaten
            </a>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-inkt-500">Prijzen kosten koper, huurprijzen per maand.</p>
          <a href="https://estatec.nl/koop/" className="knop knop-lijn">
            Volledig aanbod bekijken
          </a>
        </div>
      </div>
    </section>
  );
}

function Pijl() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-inkt"
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
