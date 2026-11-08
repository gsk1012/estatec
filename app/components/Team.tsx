import Image from "next/image";
import { TEAM } from "../lib/data";
import Maatlijn from "./Maatlijn";

export default function Team() {
  const [akash, ...rest] = TEAM;
  return (
    <section id="team" aria-labelledby="team-titel" className="border-t border-lijn bg-calque py-24 sm:py-32">
      <div className="mx-auto max-w-blad px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 id="team-titel" className="display text-4xl sm:text-5xl">
              De mensen achter ESTATEC
            </h2>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-inkt-600">
              ESTATEC is opgericht door Akash Singh. Na jaren als ondernemer kwam in 2016 het beleggen in
              residentieel vastgoed op zijn pad; de veelzijdigheid en het persoonlijke contact trokken hem
              naar de makelaardij. Inmiddels staat er een team van vijf, ieder met een eigen specialisme.
            </p>
            <p className="mt-4 max-w-[34rem] text-[17px] leading-relaxed text-inkt-600">
              Betrokken, integer, onafhankelijk en transparant. Lid van VBO, de vereniging van makelaars en
              taxateurs, met verplichte permanente educatie.
            </p>
          </div>

          {/* Oprichter: groot en hard gecropt */}
          <figure className="grid grid-cols-[minmax(0,1fr)] gap-6 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] sm:items-end lg:col-span-7 lg:pl-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-calque-200 sm:aspect-[5/6]">
              <Image
                src={akash.foto}
                alt={`Portret van ${akash.naam}`}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                className="scale-[1.12] object-cover object-[50%_22%]"
              />
            </div>
            <figcaption className="border-t-[3px] border-inkt pt-4 sm:pb-1">
              <p className="text-2xl font-medium" style={{ fontStretch: "108%" }}>
                {akash.naam}
              </p>
              <p className="plan-letter mt-1 text-[10px] text-inkt-500">{akash.rol}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-inkt-600">{akash.bio}</p>
              <a
                href={`mailto:${akash.email}`}
                className="mt-4 inline-block text-[15px] text-blauw underline decoration-blauw/40 hover:decoration-blauw"
              >
                {akash.email}
              </a>
            </figcaption>
          </figure>
        </div>

        <Maatlijn label={`Team · ${TEAM.length} personen`} className="mb-8 mt-16 sm:mt-20" />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {rest.map((t) => (
            <li key={t.naam}>
              <div className="relative aspect-[4/5] overflow-hidden bg-calque-200">
                <Image
                  src={t.foto}
                  alt={`Portret van ${t.naam}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="mt-4 border-t border-inkt pt-3">
                <p className="text-lg font-medium" style={{ fontStretch: "106%" }}>
                  {t.naam}
                </p>
                <p className="plan-letter mt-1 text-[10px] text-inkt-500">{t.rol}</p>
                <p className="mt-2 hidden text-[15px] leading-relaxed text-inkt-600 sm:block">{t.bio}</p>
                <a
                  href={`mailto:${t.email}`}
                  className="mt-2 inline-block break-all text-[14px] text-blauw underline decoration-blauw/40 hover:decoration-blauw sm:text-[15px]"
                >
                  {t.email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
