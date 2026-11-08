import Image from "next/image";
import HeroFilm from "./HeroFilm";
import Maatlijn from "./Maatlijn";
import Plattegrond from "./Plattegrond";
import { KANTOOR } from "../lib/data";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-titel" className="relative bg-calque">
      <div
        id="hero-film"
        className="op-donker relative isolate flex min-h-[60svh] flex-col overflow-hidden bg-inkt text-calque-50 lg:min-h-[max(100svh,760px)]"
      >
        <Image
          src="/video/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <HeroFilm />
        {/* Leesbaarheid: inkt van boven (menu), links en onder (tekst). */}
        <div
          className="pointer-events-none absolute inset-0 -z-[5]"
          style={{
            background:
              "linear-gradient(180deg, rgba(21,24,27,.62) 0%, rgba(21,24,27,.18) 18%, rgba(21,24,27,0) 30%), linear-gradient(90deg, rgba(21,24,27,.62) 0%, rgba(21,24,27,.32) 42%, rgba(21,24,27,0) 70%), linear-gradient(0deg, rgba(21,24,27,.78) 0%, rgba(21,24,27,.35) 40%, rgba(21,24,27,0) 62%)",
          }}
        />

        <div className="mx-auto mt-auto w-full max-w-blad px-4 pb-12 pt-[calc(var(--header-h)+72px)] sm:px-6 sm:pt-[calc(var(--header-h)+96px)] lg:px-10 lg:pb-[300px]">
          <div className="max-w-[44rem]">
            <h1
              id="hero-titel"
              className="display regel-in text-[2.25rem] sm:text-6xl lg:text-[4.5rem]"
              style={{ animationDelay: "200ms" }}
            >
              Makelaar in Amsterdam die vastgoed van alle kanten kent
            </h1>
            <p
              className="regel-in mt-6 max-w-[35rem] text-[17px] leading-relaxed text-calque-50/90 sm:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              ESTATEC verkoopt, koopt, verhuurt en beheert woningen, en belegt en ontwikkelt zelf.
              <span className="hidden sm:inline">
                {" "}Daardoor weten we wat een woning waard is, wat hij oplevert en wat er nog in zit.
              </span>
            </p>
            <Maatlijn
              tone="licht"
              direct
              className="mt-7 max-w-[35rem] sm:mt-9"
              label={KANTOOR.regio.join(" · ")}
            />
          </div>
        </div>
      </div>

      {/* Desktop: de plattegrond ligt als tekenblad onderaan op de film.
          Mobiel/tablet: direct eronder, half over de film. */}
      <div className="relative z-10 mx-auto -mt-6 max-w-blad px-4 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-10 lg:mt-0 lg:px-10">
        <Plattegrond />
      </div>
    </section>
  );
}
