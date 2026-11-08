import Image from "next/image";
import { DIENSTEN, KANTOOR } from "../lib/data";

/*
 * Footer: open kolommen zonder kaders; één haarlijn boven de onderste strook.
 */
export default function Footer() {
  const kop = "plan-letter mb-4 block text-[10px] text-calque-50/55";
  return (
    <footer className="op-donker bg-inkt text-calque-50">
      <div className="mx-auto max-w-blad px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-10">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src="/images/brand/estatec-logo-wit.png"
              alt="ESTATEC Makelaars"
              width={500}
              height={431}
              className="h-20 w-auto"
            />
            <p className="mt-6 max-w-[26rem] text-[15px] leading-relaxed text-calque-50/75">
              Full-service makelaarskantoor in Amsterdam, met een eigen tak voor vastgoedontwikkeling. Actief in{" "}
              {KANTOOR.regio.slice(0, -1).join(", ")} en {KANTOOR.regio.at(-1)}.
            </p>
          </div>

          <nav aria-label="Diensten" className="lg:col-span-3">
            <span className={kop}>Diensten</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] lg:grid-cols-1">
              {DIENSTEN.map((d) => (
                <li key={d}>
                  <a href="#werkwijze" className="text-calque-50/85 hover:text-calque-50 hover:underline">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="maat lg:col-span-3">
            <span className={kop}>Kantoor</span>
            <address className="text-[15px] not-italic leading-relaxed text-calque-50/85">
              {KANTOOR.straat}
              <br />
              {KANTOOR.postcode} {KANTOOR.plaats}
              <br />
              <a href={KANTOOR.telefoonHref} className="mt-3 inline-block hover:underline">
                {KANTOOR.telefoon}
              </a>
              <br />
              <a href={`mailto:${KANTOOR.email}`} className="hover:underline">
                {KANTOOR.email}
              </a>
            </address>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <span className={kop}>Volg ons</span>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a href={KANTOOR.socials.instagram} target="_blank" rel="noopener" className="text-calque-50/85 hover:text-calque-50 hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href={KANTOOR.socials.linkedin} target="_blank" rel="noopener" className="text-calque-50/85 hover:text-calque-50 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={KANTOOR.socials.facebook} target="_blank" rel="noopener" className="text-calque-50/85 hover:text-calque-50 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href={KANTOOR.funda} target="_blank" rel="noopener" className="text-calque-50/85 hover:text-calque-50 hover:underline">
                  Funda
                </a>
              </li>
            </ul>
          </div>

          {/* Onderste strook */}
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-calque-50/15 pt-8 sm:col-span-2 lg:col-span-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="plan-letter text-[10px] text-calque-50/55">Aangesloten bij</span>
              <span className="text-[15px] font-medium tracking-wide">VBO Makelaars</span>
              <a href="https://vastgoednederland.nl/" target="_blank" rel="noopener" className="opacity-80 transition-opacity hover:opacity-100">
                <Image src="/images/partners/vastgoed-nederland-wit.png" alt="Vastgoed Nederland" width={1119} height={520} className="h-8 w-auto" />
              </a>
              <a href="https://cepi.eu/nl/mmcepi" target="_blank" rel="noopener" className="opacity-80 transition-opacity hover:opacity-100">
                <Image src="/images/partners/mmcepi-wit.png" alt="MMCEPI" width={793} height={529} className="h-12 w-auto" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-calque-50/60">
              <span>© {new Date().getFullYear()} ESTATEC</span>
              <a href="/privacy" className="hover:text-calque-50 hover:underline">
                Privacyverklaring
              </a>
              <a href="/disclaimer" className="hover:text-calque-50 hover:underline">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
