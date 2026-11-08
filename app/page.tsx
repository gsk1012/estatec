import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Aanbod from "./components/Aanbod";
import Resultaten from "./components/Resultaten";
import Ontwikkeling from "./components/Ontwikkeling";
import Werkwijze from "./components/Werkwijze";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppKnop from "./components/WhatsAppKnop";

export default function Home() {
  return (
    <>
      <a
        href="#aanbod"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-inkt focus:px-4 focus:py-3 focus:text-calque-50"
      >
        Naar het aanbod
      </a>
      <Header />
      <main>
        <Hero />
        <Aanbod />
        <LogoStrip />
        <Resultaten />
        <Ontwikkeling />
        <Werkwijze />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppKnop />
    </>
  );
}
