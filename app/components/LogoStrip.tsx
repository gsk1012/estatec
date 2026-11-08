import Image from "next/image";
import { KANTOOR } from "../lib/data";

/*
 * Vertrouwensstrip tussen aanbod en resultaten: alleen de logo's, in inkt, rustig
 * tot hover. Waar het aanbod staat en waar ESTATEC bij aangesloten is.
 */
type Logo = { naam: string; src: string; w: number; h: number; hoogte: string; href: string };

const LOGOS: Logo[] = [
  { naam: "Funda", src: "/images/partners/funda.svg", w: 425, h: 150, hoogte: "h-6 sm:h-8", href: KANTOOR.funda },
  { naam: "Pararius", src: "/images/partners/pararius-logo.png", w: 810, h: 210, hoogte: "h-5 sm:h-7", href: KANTOOR.pararius },
  { naam: "Huurwoningen.nl", src: "/images/partners/huurwoningen-logo.png", w: 386, h: 82, hoogte: "h-4 sm:h-5", href: "https://www.huurwoningen.nl/" },
  { naam: "Vastgoed Nederland", src: "/images/partners/vastgoed-nederland-logo.png", w: 1128, h: 532, hoogte: "h-8 sm:h-10", href: "https://vastgoednederland.nl/" },
  { naam: "MMCEPI", src: "/images/partners/mmcepi-logo-v2.png", w: 600, h: 300, hoogte: "h-9 sm:h-11", href: "https://cepi.eu/nl/mmcepi" },
];

export default function LogoStrip() {
  return (
    <section aria-label="Aanbod op Funda, Pararius en Huurwoningen.nl; aangesloten bij Vastgoed Nederland en MMCEPI" className="bg-calque pt-20 sm:pt-24">
      <div className="mx-auto max-w-blad px-4 sm:px-6 lg:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-7 sm:justify-between sm:gap-x-10 lg:px-16">
          {LOGOS.map((l) => (
            <li key={l.naam}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener"
                className="block opacity-60 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100"
              >
                <Image src={l.src} alt={l.naam} width={l.w} height={l.h} className={`${l.hoogte} w-auto`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
