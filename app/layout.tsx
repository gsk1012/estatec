import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { KANTOOR, TEAM } from "./lib/data";

// Eén familie, meerdere breedtes: verbreed kapitaal voor planletters,
// normaal voor lopende tekst. Variabel, dus één bestand.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const TITEL = "Makelaar Amsterdam | ESTATEC Makelaars: verkoop, aankoop, verhuur en beleggen";
const OMSCHRIJVING =
  "Full-service makelaar in Amsterdam voor verkoop, aankoop, aanhuur, verhuur, beheer, taxaties en vastgoedfinanciering. Ook actief in vastgoedontwikkeling. Noord-Holland, Flevoland en Utrecht.";

export const metadata: Metadata = {
  metadataBase: new URL("https://estatec.nl"),
  title: { default: TITEL, template: "%s | ESTATEC Makelaars Amsterdam" },
  description: OMSCHRIJVING,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://estatec.nl",
    siteName: "ESTATEC Makelaars",
    title: TITEL,
    description: OMSCHRIJVING,
    images: [{ url: "/video/hero-poster.jpg", width: 1920, height: 1080, alt: "Luchtbeeld van Amsterdam langs de Amstel" }],
  },
  twitter: { card: "summary_large_image", title: TITEL, description: OMSCHRIJVING, images: ["/video/hero-poster.jpg"] },
  robots: { index: true, follow: true },
};

// Geen maximum-scale / user-scalable=0: inzoomen moet altijd kunnen.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15181B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://estatec.nl/#kantoor",
  name: "ESTATEC Makelaars",
  url: "https://estatec.nl",
  logo: "https://estatec.nl/images/brand/estatec-logo.png",
  image: "https://estatec.nl/video/hero-poster.jpg",
  telephone: "+31202390052",
  email: KANTOOR.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: KANTOOR.straat,
    postalCode: "1067PV",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  areaServed: KANTOOR.regio.map((name) => ({ "@type": "AdministrativeArea", name })),
  founder: { "@type": "Person", name: "Akash Singh" },
  employee: TEAM.map((t) => ({ "@type": "Person", name: t.naam, jobTitle: t.rol, email: t.email })),
  memberOf: [{ "@type": "Organization", name: "VBO, vereniging van makelaars en taxateurs" }],
  sameAs: Object.values(KANTOOR.socials),
  knowsLanguage: ["nl", "en"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Markeer JS vóór de eerste paint, zodat maatlijnen alleen verborgen
            starten als ze ook echt kunnen uittekenen. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Een makelaar die gebouwen leest als ontwikkelaar. De pagina is een tekenblad, geen makelaarssjabloon met dienstkaartjes en reviewslider.
OWN-WORLD: Inkt (#15181B) op calque (#EDEFEC), haarlijnen, 3px muren, maatlijnen met eindstreepjes, 45°-arcering, blauwdrukblauw (#24476B) alleen voor beschikbaar en actie. Archivo in breedtes 100–125.
STORY: Bezoeker ziet de film, kiest zijn route in een plattegrond (verkopen, kopen, huren, beleggen), ziet echt aanbod en nalopen resultaten, begrijpt het ontwikkelaarsvoordeel, en plant een concrete volgende stap.
FIRST VIEWPORT: Film full-bleed met hoekmerken; links-onder H1 met maatlijn over de regio's; onderaan ligt de plattegrond met vier ruimtes en deuren, elke deur een actie.
FORM: Maatvoering (NEN 2580 / plattegrond), eigen lijst #1, IMPECCABLE'S PICK; seed 84e6e480.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
