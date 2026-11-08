"use client";

import { useEffect, useRef, useState } from "react";

/*
 * De bestaande ESTATEC-film (Videobrouwerij, 2025), opnieuw gecodeerd:
 * 149 MB → 7 MB (720p, mobiel) / 15 MB (1080p, desktop). De poster is het LCP-
 * beeld; de video laadt pas na de eerste paint en speelt niet bij
 * prefers-reduced-motion of Databesparing. Pauzeknop voor WCAG 2.2.2.
 */
export default function HeroFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  const [speelt, setSpeelt] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [beschikbaar, setBeschikbaar] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const rustig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    const groot = window.matchMedia("(min-width: 900px)").matches;
    v.src = groot ? "/video/hero-1080.mp4" : "/video/hero-720.mp4";
    setBeschikbaar(true);
    if (rustig) return;
    v.play().then(
      () => setSpeelt(true),
      () => setSpeelt(false),
    );
  }, []);

  const wissel = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setSpeelt(true), () => {});
    else {
      v.pause();
      setSpeelt(false);
    }
  };

  return (
    <>
      {/* Video in de achterste laag; de knop hieronder ligt bóven de tekstlaag. */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => {
            setKlaar(true);
            setSpeelt(true);
          }}
          onPause={() => setSpeelt(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            klaar ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {beschikbaar ? (
        <button
          type="button"
          onClick={wissel}
          aria-label={speelt ? "Film pauzeren" : "Film afspelen"}
          title={speelt ? "Film pauzeren" : "Film afspelen"}
          // Verplicht voor WCAG 2.2.2 (bewegend beeld > 5 s), maar bewust stil:
          // alleen een icoon rechtsboven in de film.
          className="absolute right-4 top-[calc(var(--header-h)+40px)] z-20 flex h-9 w-9 items-center justify-center border border-calque-50/25 bg-inkt/40 text-calque-50/80 backdrop-blur-[2px] transition-colors duration-200 hover:bg-inkt/70 hover:text-calque-50 sm:right-6 lg:right-10"
        >
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
            {speelt ? (
              <path d="M3.5 2v8M8.5 2v8" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 1.5l7 4.5-7 4.5z" fill="currentColor" />
            )}
          </svg>
        </button>
      ) : null}
    </>
  );
}
