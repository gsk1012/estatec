import { ROUTES } from "../lib/data";

/*
 * De vier routes als ruimtes van een plattegrond. Elke ruimte heeft een
 * deuropening in de onderwand; bij hover/focus zwaait de deur open (één
 * betekenisvolle micro-interactie: u loopt een route binnen).
 */
function Deur({ spiegel = false }: { spiegel?: boolean }) {
  // viewBox 60×60, scharnier op de wandlijn (y=56). Het deurblad ligt op een
  // kier; bij hover/focus zwaait het 90° de ruimte in.
  const hx = spiegel ? 58 : 2;
  const eind = spiegel ? 2 : 58;
  return (
    <svg
      viewBox="0 0 60 60"
      className="pointer-events-none absolute -bottom-[4px] z-10 h-[40px] w-[40px] text-inkt sm:-bottom-[5px] sm:h-[60px] sm:w-[60px]"
      style={spiegel ? { right: "var(--deur-x)" } : { left: "var(--deur-x)" }}
      aria-hidden="true"
    >
      {/* Opening in de wand */}
      <rect x="2" y="53" width="56" height="7" className="fill-calque-50" />
      {/* Aanslagen links en rechts van de opening */}
      <rect x="0" y="53" width="2" height="7" fill="currentColor" />
      <rect x="58" y="53" width="2" height="7" fill="currentColor" />
      {/* Draaicirkel */}
      <path
        d={spiegel ? "M 2 56 A 56 56 0 0 1 58 0" : "M 58 56 A 56 56 0 0 0 2 0"}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 3"
        opacity="0.5"
      />
      {/* Deurblad */}
      <line
        x1={hx}
        y1="56"
        x2={eind}
        y2="56"
        stroke="currentColor"
        strokeWidth="2"
        className="deur-blad"
        style={
          {
            "--scharnier-x": `${hx}px`,
            "--scharnier-y": "56px",
            "--kier": spiegel ? "28deg" : "-28deg",
            "--draai": spiegel ? "90deg" : "-90deg",
          } as React.CSSProperties
        }
      />
    </svg>
  );
}

export default function Plattegrond() {
  return (
    <nav aria-label="Kies uw route" className="relative">
      <ul className="grid grid-cols-2 border-[3px] border-inkt bg-calque-50 lg:grid-cols-4">
        {ROUTES.map((r, i) => (
          <li
            key={r.id}
            className={[
              "relative border-inkt",
              // binnenwanden: 2×2 tot lg, daarna één rij van vier
              i % 2 === 1 ? "border-l-[1.5px]" : "",
              i === 2 ? "lg:border-l-[1.5px]" : "",
              i >= 2 ? "border-t-[1.5px] lg:border-t-0" : "",
            ].join(" ")}
          >
            <a
              href={r.href}
              data-onderwerp={r.onderwerp}
              className="ruimte group relative flex h-full min-h-[140px] flex-col px-4 pb-[52px] pt-4 [--deur-x:12px] sm:[--deur-x:24px] outline-offset-[-6px] sm:min-h-[200px] sm:px-6 sm:pt-6 lg:min-h-[208px] lg:px-7"
            >
              <span className="ruimte-arcering arcering pointer-events-none absolute inset-0" />
              <span className="plan-letter relative text-[11px] text-inkt sm:text-[13px]">{r.naam}</span>
              <span className="relative mt-3 hidden max-w-[34ch] text-[15px] leading-relaxed text-inkt-600 sm:block">
                {r.regel}
              </span>
              <span className="relative mt-auto flex items-center gap-2 pt-4 text-[14px] font-medium leading-snug text-blauw sm:pt-5 sm:text-[15px]">
                <span className="underline decoration-blauw/40 underline-offset-[6px] transition-colors group-hover:decoration-blauw">
                  {r.actie}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 transition-transform duration-200 ease-uit group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <Deur spiegel={i % 2 === 1} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
