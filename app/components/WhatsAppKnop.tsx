"use client";

import { useEffect, useState } from "react";
import { KANTOOR } from "../lib/data";

/*
 * Vaste WhatsApp-knop. Klanten noemen in hun reviews dat ze via de app
 * contact hebben; daarom altijd binnen handbereik, maar pas zodra de
 * bezoeker voorbij de film is, zodat hij de plattegrond niet afdekt.
 */
export default function WhatsAppKnop() {
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-film");
    if (!hero) return setZichtbaar(true);
    const io = new IntersectionObserver(([e]) => setZichtbaar(!e.isIntersecting), {
      rootMargin: "0px 0px -35% 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const tekst = encodeURIComponent("Goedendag ESTATEC, ik heb een vraag over ");
  return (
    <a
      href={`https://wa.me/${KANTOOR.whatsapp}?text=${tekst}`}
      target="_blank"
      rel="noopener"
      aria-hidden={!zichtbaar}
      tabIndex={zichtbaar ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 flex h-14 items-center gap-3 bg-inkt pl-4 pr-5 text-calque-50 shadow-[0_8px_24px_-8px_rgba(21,24,27,0.45)] transition-[transform,opacity,background-color] duration-300 ease-uit hover:bg-inkt-800 active:scale-[0.97] sm:bottom-6 sm:right-6 ${
        zichtbaar ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#25D366]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35zM12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.12 1.53 5.85L.06 23.97l6.27-1.65A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-1.85 0-3.58-.48-5.08-1.32l-.36-.21-3.73.98 1-3.64-.24-.37A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"
        />
      </svg>
      <span className="text-[15px] font-medium" style={{ fontStretch: "105%" }}>
        App ons
      </span>
    </a>
  );
}
