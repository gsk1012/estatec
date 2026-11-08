"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { KANTOOR } from "../lib/data";

/*
 * De gevel van het kantoor als geannoteerde tekening: een markering op de
 * voordeur en een aanwijslijn die zich uittekent
 * naar de notitie "Hier vindt u ons". Coördinaten in de pixels van de foto
 * (1600×935); de figuur heeft dezelfde verhouding, dus niets wordt bijgesneden.
 */
const B = 1600;
const H = 935;
const pct = (x: number, y: number) => ({ left: `${(x / B) * 100}%`, top: `${(y / H) * 100}%` });

export default function KantoorFoto() {
  const ref = useRef<HTMLElement>(null);
  const [getekend, setGetekend] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGetekend(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Deur (nr. 539) en de plek van de notitie
  const deur = { x: 760, y: 560 };
  const knik = { x: 1030, y: 240 };
  const eind = { x: 1110, y: 240 };

  return (
    <figure ref={ref} data-getekend={getekend} className="kantoor-foto group">
      <div className="relative aspect-[1600/935] overflow-hidden border-[3px] border-inkt bg-inkt">
        <Image
          src="/images/brand/kantoor.jpg"
          alt="Gevel van het kantoor van ESTATEC Makelaars aan de De Savornin Lohmanstraat 539 in Amsterdam"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-uit group-hover:scale-[1.02]"
        />

        {/* Lijnwerk */}
        <svg
          viewBox={`0 0 ${B} ${H}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* Aanwijslijn van deur naar notitie */}
          <polyline
            className="kf-lijn"
            points={`${deur.x},${deur.y} ${knik.x},${knik.y} ${eind.x},${eind.y}`}
            fill="none"
            stroke="#F7F8F6"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
          />
        </svg>

        {/* Markering op de deur */}
        <span className="absolute -translate-x-1/2 -translate-y-1/2" style={pct(deur.x, deur.y)} aria-hidden="true">
          <span className="kf-puls absolute inset-0 rounded-full border border-calque-50" />
          <span className="relative block h-3 w-3 rounded-full border-2 border-calque-50 bg-blauw" />
        </span>

        {/* Notitie */}
        <span
          className="kf-notitie absolute hidden -translate-y-1/2 whitespace-nowrap border border-calque-50/40 bg-inkt/85 px-3 py-2 text-calque-50 backdrop-blur-[2px] sm:block"
          style={pct(eind.x + 8, eind.y)}
        >
          <span className="plan-letter block text-[10px] text-blauw-300">Hier vindt u ons</span>
          <span className="mt-0.5 block text-[13px] leading-snug">
            Kom gerust langs
          </span>
        </span>
      </div>

      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[15px]">
        <span>
          <span className="font-medium">{KANTOOR.straat}</span>
          <span className="text-inkt-600">
            , {KANTOOR.postcode} {KANTOOR.plaats}
          </span>
        </span>
        <a
          href={KANTOOR.routeHref}
          target="_blank"
          rel="noopener"
          className="text-blauw underline decoration-blauw/40 underline-offset-[5px] hover:decoration-blauw"
        >
          Route plannen
        </a>
      </figcaption>
    </figure>
  );
}
