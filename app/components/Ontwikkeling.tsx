import Image from "next/image";
import { PROJECTEN } from "../lib/data";
import Maatlijn from "./Maatlijn";

// Zes onderdelen van het ontwikkeltraject (estatec.nl/vastgoedontwikkeling),
// als 3×2-raster zodat er geen losse cel overblijft.
const ACTIVITEITEN = [
  "Haalbaarheidsanalyse",
  "Renovatie",
  "Transformatie",
  "Woningsplitsing",
  "Herontwikkeling",
  "Kleinschalige nieuwbouw",
];

export default function Ontwikkeling() {
  return (
    <section
      id="ontwikkeling"
      aria-labelledby="ontwikkeling-titel"
      className="op-donker bg-inkt py-24 text-calque-50 sm:py-32"
    >
      <div className="mx-auto grid max-w-blad grid-cols-[minmax(0,1fr)] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:col-span-5 lg:self-start">
          <h2 id="ontwikkeling-titel" className="display text-4xl sm:text-5xl">
            We kijken verder dan de huidige plattegrond
          </h2>
          <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-calque-50/80">
            Naast makelaardij ontwikkelt ESTATEC zelf vastgoed. Van de eerste haalbaarheidsanalyse tot de
            realisatie. Die praktijk nemen we mee in elk advies: over waarde, huurpotentie en wat een pand
            nog kan worden.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-px border border-calque-50/30 bg-calque-50/30 sm:grid-cols-3">
            {ACTIVITEITEN.map((a) => (
              <li key={a} className="flex min-h-[56px] items-center bg-inkt px-4 py-3 text-[15px] text-calque-50/90">
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-calque-50/20 pt-8">
            <h3 className="text-xl font-medium" style={{ fontStretch: "108%" }}>
              Samen investeren
            </h3>
            <p className="mt-3 max-w-[34rem] leading-relaxed text-calque-50/75">
              Voor geselecteerde projecten kunnen particuliere en professionele investeerders participeren.
              Heeft u een object met ontwikkelpotentie, of zoekt u een betrouwbare ontwikkelpartner?
            </p>
            <a href="#contact" data-onderwerp="beleggen" className="knop knop-lijn-licht mt-6">
              Bespreek een samenwerking
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Maatlijn tone="licht" label={
              <>
                {PROJECTEN.length} projecten
                <span className="hidden sm:inline"> · gerealiseerd en lopend</span>
              </>
            } className="mb-8" />
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 pb-12 sm:gap-x-6 sm:gap-y-10">
            {PROJECTEN.map((p, i) => (
              <li key={p.naam} className={i % 2 === 1 ? "sm:translate-y-12" : ""}>
                <figure>
                  <div className={`relative overflow-hidden bg-inkt-800 aspect-[4/3]`}>
                    <Image
                      src={p.foto}
                      alt={`Vastgoedproject ${p.naam} in ${p.plaats}`}
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-[15px] font-medium">{p.naam}</span>
                    <span className="plan-letter text-[10px] text-calque-50/60">{p.plaats}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
