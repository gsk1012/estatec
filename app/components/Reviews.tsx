import { GOOGLE_REVIEWS, REVIEWS, type Review } from "../lib/data";
import Maatlijn from "./Maatlijn";

/*
 * Compacte reviewstrook: kop met Google-score, daaronder één rij van vier
 * dossiers (één per route) met gedeelde wanden. Mobiel: horizontaal scrollen.
 */

/* Vijf sterren, gedeeltelijk gevuld naar de score (4,8 → 96%). */
function Sterren({ score }: { score: number }) {
  const ster = "M8 1.2l1.95 4.2 4.6.5-3.43 3.1.95 4.53L8 11.25 3.93 13.53l.95-4.53L1.45 5.9l4.6-.5z";
  const rij = (cls: string) => (
    <svg viewBox="0 0 80 16" className={`h-4 w-20 ${cls}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={ster} transform={`translate(${i * 16} 0)`} fill="currentColor" />
      ))}
    </svg>
  );
  return (
    <span className="relative block h-4 w-20">
      {rij("text-lijn")}
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(score / 5) * 100}%` }}>
        {rij("text-inkt")}
      </span>
    </span>
  );
}

function Dossier({ r }: { r: Review }) {
  return (
    <figure className="ruimte group relative flex h-full flex-col bg-calque-50 p-5 sm:p-6">
      <span className="ruimte-arcering arcering pointer-events-none absolute inset-0" />
      {r.uitkomst ? (
        <div className="relative">
          <p className="display maat whitespace-nowrap text-[2rem] leading-none">{r.uitkomst.maat}</p>
          <Maatlijn tone="blauw" label={r.uitkomst.wat} className="mt-3" />
        </div>
      ) : null}
      <blockquote className="relative mt-4 text-[15px] leading-relaxed text-inkt-800">
        <p>&ldquo;{r.tekst}&rdquo;</p>
      </blockquote>
      <figcaption className="relative mt-auto flex items-baseline justify-between gap-3 border-t border-lijn pt-3 text-[14px]">
        <span className="font-medium">{r.naam}</span>
        <span className="plan-letter shrink-0 text-[11px] text-inkt-500">{r.dienst}</span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const score = GOOGLE_REVIEWS?.score.toFixed(1).replace(".", ",");
  return (
    <section aria-labelledby="reviews-titel" className="bg-calque py-20 sm:py-24">
      <div className="mx-auto max-w-blad px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="reviews-titel" className="display text-4xl sm:text-5xl">
            Wat klanten zeggen
          </h2>
          {GOOGLE_REVIEWS ? (
            <a
              href={GOOGLE_REVIEWS.href}
              target="_blank"
              rel="noopener"
              aria-label={`${score} uit 5 op Google, ${GOOGLE_REVIEWS.aantal} reviews`}
              className="group flex items-center gap-4 self-start sm:self-auto"
            >
              <span className="display maat text-5xl leading-none">{score}</span>
              <span className="flex flex-col gap-1.5">
                <Sterren score={GOOGLE_REVIEWS.score} />
                <span className="text-[15px] text-inkt-600 underline decoration-inkt/25 underline-offset-[5px] group-hover:decoration-inkt">
                  <span className="maat font-medium text-inkt">{GOOGLE_REVIEWS.aantal} reviews</span> op Google
                </span>
              </span>
            </a>
          ) : null}
        </div>

        <ul
          aria-label="Reviews"
          className="relative -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-[1.5px] sm:overflow-visible sm:border-[3px] sm:border-inkt sm:bg-inkt sm:px-0 lg:grid-cols-4"
        >
          {REVIEWS.map((r) => (
            <li key={r.naam} className="w-[80%] shrink-0 snap-start border border-lijn sm:w-auto sm:border-0">
              <Dossier r={r} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
