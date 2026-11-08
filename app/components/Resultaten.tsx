import { RECENT, TELLING } from "../lib/data";
import Maatlijn from "./Maatlijn";

/*
 * Resultaten: vier kerncijfers als ruimtes van een plattegrond, plus één regel
 * recente transacties. Alle cijfers komen uit het eigen aanbod op estatec.nl.
 */
const CIJFERS = [
  { maat: String(TELLING.verkocht), eenheid: "woningen", wat: "Verkocht", toelichting: `uit eigen aanbod, plus ${TELLING.verkochtOV} onder voorbehoud` },
  { maat: String(TELLING.verhuurd), eenheid: "woningen", wat: "Verhuurd", toelichting: "uit eigen aanbod" },
  { maat: String(TELLING.teKoop + TELLING.teHuur), eenheid: "woningen", wat: "Nu beschikbaar", toelichting: `${TELLING.teKoop} te koop, ${TELLING.teHuur} te huur` },
  { maat: "5", eenheid: "werkdagen", wat: "Taxatierapport", toelichting: "meestal klaar na de opname" },
];

export default function Resultaten() {
  const totaal = TELLING.verkocht + TELLING.verkochtOV + TELLING.verhuurd;
  return (
    <section aria-labelledby="resultaten-titel" className="bg-calque pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="mx-auto grid max-w-blad grid-cols-[minmax(0,1fr)] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10">
        <div className="lg:col-span-4">
          <h2 id="resultaten-titel" className="display text-4xl sm:text-5xl">
            Resultaten die u kunt nalopen
          </h2>
          <p className="mt-5 max-w-[30rem] text-[17px] leading-relaxed text-inkt-600">
            Elke verkochte en verhuurde woning blijft zichtbaar in ons aanbod. Lid van VBO Makelaars.
          </p>
          <a
            href="https://estatec.nl/koop/"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-blauw underline decoration-blauw/40 underline-offset-[6px] hover:decoration-blauw"
          >
            Alle {totaal} transacties bekijken
          </a>
        </div>

        <div className="lg:col-span-8">
          <dl className="grid grid-cols-2 gap-[1.5px] border-[3px] border-inkt bg-inkt">
            {CIJFERS.map((c) => (
              <div key={c.wat} className="flex flex-col bg-calque-50 p-5 sm:p-7">
                <dt className="sr-only">{c.wat}</dt>
                <dd className="flex flex-1 flex-col">
                  <Maatlijn label={c.wat} />
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="display maat text-5xl sm:text-6xl">{c.maat}</span>
                    <span className="text-[15px] text-inkt-600">{c.eenheid}</span>
                  </p>
                  <p className="mt-2 text-[14px] leading-snug text-inkt-500 sm:text-[15px]">{c.toelichting}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[15px] leading-relaxed text-inkt-600">
            <span className="font-medium text-inkt">Recent: </span>
            {RECENT.slice(0, 5).map((r, i) => (
              <span key={r.straat}>
                {i > 0 ? <span className="text-inkt-500"> · </span> : null}
                {r.straat}, {r.plaats} <span className="text-inkt-500">({r.status.toLowerCase()})</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
