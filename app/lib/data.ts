/*
 * Alle inhoud komt van estatec.nl (stand november 2026). Aanbod is een
 * momentopname uit hun Realworks-koppeling; vervang door een live feed zodra
 * de nieuwe site de koppeling overneemt.
 */

export const KANTOOR = {
  naam: "ESTATEC Makelaars",
  straat: "De Savornin Lohmanstraat 539",
  postcode: "1067 PV",
  plaats: "Amsterdam",
  telefoon: "020 239 00 52",
  telefoonHref: "tel:+31202390052",
  // Mobiel nummer dat de huidige site achter de bel-link heeft staan. Laat de
  // klant bevestigen dat dit het WhatsApp-nummer is.
  whatsapp: "31616878322",
  email: "info@estatec.nl",
  routeHref:
    "https://www.google.com/maps/search/?api=1&query=De+Savornin+Lohmanstraat+539+1067+PV+Amsterdam",
  regio: ["Noord-Holland", "Flevoland", "Utrecht"],
  socials: {
    instagram: "https://www.instagram.com/estatec.official/",
    facebook: "https://www.facebook.com/estatec.official/",
    linkedin: "https://nl.linkedin.com/company/estatec2020",
  },
  funda: "https://www.funda.nl/makelaars/amsterdam/81461-estatec/",
  pararius: "https://www.pararius.nl/makelaars/amsterdam/estatec",
};

/* Google-reviewscore zoals op Google Maps, november 2026. Bijwerken wanneer nodig. */
export const GOOGLE_REVIEWS: { score: number; aantal: number; href: string } | null = {
  score: 4.8,
  aantal: 125,
  href: "https://www.google.com/maps/search/?api=1&query=ESTATEC+De+Savornin+Lohmanstraat+539+Amsterdam",
};

/* Telling uit het eigen aanbod op estatec.nl/koop en /huur, november 2026. */
export const TELLING = {
  verkocht: 68,
  verkochtOV: 4,
  teKoop: 8,
  verhuurd: 10,
  teHuur: 2,
};

export type Woning = {
  id: string;
  soort: "koop" | "huur";
  straat: string;
  plaats: string;
  type: string;
  m2: number;
  kamers: number;
  prijs: number;
  href: string;
  foto: string;
};

export const AANBOD: Woning[] = [
  { id: "hiraistraat", soort: "koop", straat: "Hiraistraat", plaats: "Amsterdam", type: "Appartement", m2: 95, kamers: 3, prijs: 595000, href: "https://estatec.nl/object/hiraistraat/", foto: "/images/aanbod/hiraistraat-amsterdam.jpg" },
  { id: "rapsodie", soort: "koop", straat: "Rapsodie", plaats: "Zaandam", type: "Eengezinswoning", m2: 174, kamers: 8, prijs: 550000, href: "https://estatec.nl/object/rapsodie/", foto: "/images/aanbod/rapsodie-zaandam.jpg" },
  { id: "dr-allard-piersonstraat", soort: "koop", straat: "Dr. Allard Piersonstraat", plaats: "Amstelveen", type: "Eengezinswoning", m2: 165, kamers: 7, prijs: 949000, href: "https://estatec.nl/object/dr-allard-piersonstraat/", foto: "/images/aanbod/dr-allard-piersonstraat-amstelveen.jpg" },
  { id: "stoutenburggracht", soort: "koop", straat: "Stoutenburggracht", plaats: "Amsterdam", type: "Appartement", m2: 74, kamers: 4, prijs: 335000, href: "https://estatec.nl/object/stoutenburggracht/", foto: "/images/aanbod/stoutenburggracht-amsterdam.jpg" },
  { id: "houthalenstraat", soort: "koop", straat: "Houthalenstraat", plaats: "Amsterdam", type: "Eengezinswoning", m2: 132, kamers: 6, prijs: 779000, href: "https://estatec.nl/object/houthalenstraat/", foto: "/images/aanbod/houthalenstraat-amsterdam.jpg" },
  { id: "baden-powellweg-5", soort: "koop", straat: "Baden Powellweg", plaats: "Amsterdam", type: "Appartement", m2: 97, kamers: 4, prijs: 495000, href: "https://estatec.nl/object/baden-powellweg-5/", foto: "/images/aanbod/baden-powellweg-amsterdam.jpg" },
  { id: "johan-hofmanstraat-3", soort: "koop", straat: "Johan Hofmanstraat", plaats: "Amsterdam", type: "Appartement", m2: 95, kamers: 4, prijs: 475000, href: "https://estatec.nl/object/johan-hofmanstraat-3/", foto: "/images/aanbod/johan-hofmanstraat-amsterdam.jpg" },
  { id: "danie-theronstraat", soort: "koop", straat: "Danie Theronstraat", plaats: "Amsterdam", type: "Appartement", m2: 54, kamers: 3, prijs: 475000, href: "https://estatec.nl/object/danie-theronstraat/", foto: "/images/aanbod/danie-theronstraat-amsterdam.jpg" },
  { id: "kopermolenstraat", soort: "huur", straat: "Kopermolenstraat", plaats: "Zaandam", type: "Eengezinswoning", m2: 87, kamers: 4, prijs: 2499, href: "https://estatec.nl/object/kopermolenstraat/", foto: "/images/aanbod/kopermolenstraat-zaandam.jpg" },
  { id: "denemarkenstraat-4", soort: "huur", straat: "Denemarkenstraat", plaats: "Almere", type: "Appartement", m2: 61, kamers: 3, prijs: 2099, href: "https://estatec.nl/object/denemarkenstraat-4/", foto: "/images/aanbod/denemarkenstraat-almere.jpg" },
];

export type Verkocht = { straat: string; plaats: string; type: string; m2: number; status: "Verkocht" | "Verhuurd" };

/* Selectie van recente transacties uit het eigen koop- en huuraanbod. */
export const RECENT: Verkocht[] = [
  { straat: "Turfschip", plaats: "Amstelveen", type: "Eengezinswoning", m2: 141, status: "Verkocht" },
  { straat: "Prinses Margrietlaan", plaats: "Uithoorn", type: "Eengezinswoning", m2: 78, status: "Verkocht" },
  { straat: "Don Boscolaan", plaats: "Amstelveen", type: "Eengezinswoning", m2: 160, status: "Verkocht" },
  { straat: "Kleiburg", plaats: "Amsterdam", type: "Appartement", m2: 98, status: "Verhuurd" },
  { straat: "Kikkenstein", plaats: "Amsterdam", type: "Appartement", m2: 45, status: "Verkocht" },
  { straat: "'s-Gravesandestraat", plaats: "Amsterdam", type: "Appartement", m2: 72, status: "Verkocht" },
  { straat: "Laan van Norfolk", plaats: "Hoofddorp", type: "Villa", m2: 192, status: "Verhuurd" },
  { straat: "Ruys de Beerenbrouckstraat", plaats: "Amsterdam", type: "Appartement", m2: 63, status: "Verkocht" },
  { straat: "Eric de Noormanhof", plaats: "Almere", type: "Eengezinswoning", m2: 148, status: "Verkocht" },
  { straat: "Westzeedijk", plaats: "Rotterdam", type: "Appartement", m2: 216, status: "Verhuurd" },
];

export type Route = {
  id: string;
  naam: string;
  regel: string;
  actie: string;
  href: string;
  onderwerp: string;
};

export const ROUTES: Route[] = [
  {
    id: "verkopen",
    naam: "Verkopen",
    regel: "Waardebepaling, verkoopstrategie, fotografie en onderhandeling tot aan de notaris.",
    actie: "Gratis waardebepaling",
    href: "#contact",
    onderwerp: "waardebepaling",
  },
  {
    id: "kopen",
    naam: "Kopen",
    regel: "Wij zoeken, bezichtigen mee, controleren clausules en bieden namens u.",
    actie: "Plan een kennismaking",
    href: "#contact",
    onderwerp: "aankoop",
  },
  {
    id: "huren",
    naam: "Huren & verhuren",
    regel: "Aanhuur op no cure no pay. Verhuur met screening, check-in en nazorg.",
    actie: "Start een zoekopdracht",
    href: "#contact",
    onderwerp: "huren",
  },
  {
    id: "beleggen",
    naam: "Beleggen",
    regel: "Huurwaarde, NAR/BAR-berekening, financiering en beheer onder één dak.",
    actie: "Bespreek uw belegging",
    href: "#contact",
    onderwerp: "beleggen",
  },
];

export type Traject = {
  id: string;
  naam: string;
  intro: string;
  stappen: { titel: string; tekst: string }[];
  noot?: string;
};

export const TRAJECTEN: Traject[] = [
  {
    id: "verkoop",
    naam: "Verkoop",
    intro:
      "Bij de verkoop van een woning komt veel kijken. We begeleiden het hele traject, zodat niets over het hoofd wordt gezien.",
    stappen: [
      { titel: "Kennismaking", tekst: "We brengen uw wensen en verwachtingen in kaart en adviseren over de verkoopmogelijkheden en de waarde van de woning." },
      { titel: "Strategie & marketing", tekst: "Samen leggen we de vraagprijs vast. Onze fotograaf maakt de beelden; we bieden de woning aan in ons netwerk en op social media." },
      { titel: "Bezichtigen & onderhandelen", tekst: "We regelen de bezichtigingen, screenen de kandidaten en voeren namens u de onderhandeling." },
      { titel: "Overdracht", tekst: "U tekent de koopovereenkomst en we gaan samen naar de notaris voor de levering." },
      { titel: "Nazorg", tekst: "U kunt bij ons terecht tijdens het hele proces en na de eigendomsoverdracht." },
    ],
  },
  {
    id: "aankoop",
    naam: "Aankoop",
    intro:
      "Is de vraagprijs niet te hoog? Zijn er gebreken, clausules of kettingbedingen? Als aankoopmakelaar beperken we de risico's voor u.",
    stappen: [
      { titel: "Kennismaking", tekst: "We brengen uw woonwensen in kaart, zodat helder is waar uw woning aan moet voldoen." },
      { titel: "Zoektocht", tekst: "We zetten een zoekopdracht uit in ons netwerk, sturen passende woningen en gaan mee naar bezichtigingen." },
      { titel: "Bod & overeenkomst", tekst: "We bepalen samen de onderhandelingsstrategie, doen het bod en lezen de juridische stukken voor u door." },
      { titel: "Afhandeling", tekst: "We bewaken de ontbindende voorwaarden en de financiering en begeleiden u bij de notaris." },
      { titel: "Nazorg", tekst: "Ook na de overdracht en uw verhuizing kunt u bij ons terecht." },
    ],
  },
  {
    id: "verhuur",
    naam: "Verhuur",
    intro:
      "We beleggen zelf in woningen en herkennen daardoor wat eigenaren nodig hebben: een goede huurder en geen leegstand. Ook buiten kantoortijden en in het weekend.",
    stappen: [
      { titel: "Kennismaking", tekst: "We adviseren over de verhuurmogelijkheden en de huurwaarde van uw woning." },
      { titel: "Adverteren", tekst: "Professionele foto's, aanbieding in ons netwerk van huurders en makelaars, en social media." },
      { titel: "Selecteren", tekst: "We regelen de bezichtigingen en selecteren na meerdere controles de meest geschikte huurders." },
      { titel: "Overdracht", tekst: "U tekent de huurovereenkomst; we doen samen de check-in en de voorinspectie." },
      { titel: "Nazorg", tekst: "Bij de check-out begeleiden we u en helpen we de woning opnieuw te verhuren." },
    ],
  },
  {
    id: "aanhuur",
    naam: "Aanhuur",
    intro:
      "We zoeken een studio, appartement of woning in Amsterdam, Amstelveen, Diemen, Haarlem en Hoofddorp, en begeleiden u tot en met de check-in.",
    stappen: [
      { titel: "Kennismaking", tekst: "We brengen uw woonwensen in kaart." },
      { titel: "Zoektocht", tekst: "We zetten een zoekopdracht uit in ons netwerk en gaan mee naar (online) bezichtigingen." },
      { titel: "Huurvoorstel", tekst: "We nemen de juridische stukken door en onderhandelen namens u." },
      { titel: "Tekenen & check-in", tekst: "U tekent de huurovereenkomst; we doen samen de check-in en voorinspectie." },
      { titel: "Nazorg", tekst: "Tijdens uw hele huurperiode kunt u bij ons terecht met vragen." },
    ],
    noot:
      "No cure no pay: één maand huur excl. btw, pas nadat de contracten zijn getekend en u de sleutels heeft. Komt de woning uit ons eigen aanbod, dan betaalt u alleen de contractkosten.",
  },
  {
    id: "taxatie",
    naam: "Taxatie",
    intro:
      "Voor verkoop, aankoop, hypotheek of herfinanciering, scheiding, nalatenschap of verzekering. Uitgevoerd door gecertificeerde VBO-taxateurs.",
    stappen: [
      { titel: "Kennismaking", tekst: "We bespreken de woning, het doel van de taxatie en uw wensen." },
      { titel: "Woninginspectie", tekst: "De taxateur meet de woning op en beoordeelt onderhoudsstaat, ligging en afwerking." },
      { titel: "Marktanalyse", tekst: "We vergelijken uw woning met recente verkopen en actuele marktontwikkelingen." },
      { titel: "Rapportage", tekst: "U ontvangt een volledig taxatierapport met de onderbouwde marktwaarde." },
      { titel: "Nazorg", tekst: "Vragen over het rapport? We lichten het graag toe." },
    ],
    noot: "Het rapport is bruikbaar voor banken, hypotheekverstrekkers, notarissen en verzekeraars, en ligt meestal binnen 5 werkdagen na de opname klaar.",
  },
  {
    id: "financiering",
    naam: "Financiering",
    intro:
      "Financiering voor commercieel of residentieel vastgoed: een eerste beleggingspand, uitbreiding van uw portefeuille of herfinanciering.",
    stappen: [
      { titel: "Inschrijven", tekst: "Meld u aan; een financieel specialist neemt contact op. Het eerste consult is vrijblijvend." },
      { titel: "Gesprek", tekst: "Binnen 24 uur bespreken we uw wensen en ontvangt u een schriftelijk voorstel." },
      { titel: "Opties verkennen", tekst: "We stellen een kredietvoorstel op voor onze financiers en werken de mogelijkheden uit." },
      { titel: "Aanvraag", tekst: "U kiest samen met uw specialist de financier; de aanvraag wordt ingediend." },
      { titel: "Afsluiting", tekst: "Na akkoord gaan de stukken naar de notaris en wordt de financiering uitgekeerd." },
    ],
    noot: "Bemiddeling op no cure no pay-basis.",
  },
];

export type Review = {
  naam: string;
  dienst: string;
  tekst: string;
  /* Gemeten resultaat, alleen als de review het letterlijk noemt. */
  uitkomst?: { maat: string; wat: string };
};

/* Fragmenten uit reviews op estatec.nl: ingekort en licht geredigeerd op spelling, betekenis ongewijzigd.
   Eén per route; het resultaat staat letterlijk in de review. */
export const REVIEWS: Review[] = [
  {
    naam: "Ankush",
    dienst: "Aankoop",
    uitkomst: { maat: "Paar weken", wat: "Na 2 jaar zoeken" },
    tekst: "Ik was eerst 2 jaar bij een andere makelaar bezig om een woning te kopen, zonder succes. Binnen een paar weken had ik via ESTATEC al een woning gevonden naar mijn wens.",
  },
  {
    naam: "Mandy, Amber, Yvanka & Georgina",
    dienst: "Aanhuur",
    uitkomst: { maat: "3 dagen", wat: "Woning gevonden" },
    tekst: "Makelaar na makelaar, maar niemand wist ons goed te helpen. Binnen 3 dagen is het ESTATEC gelukt om een woning voor ons te vinden.",
  },
  {
    naam: "Sharmila",
    dienst: "Verhuur",
    uitkomst: { maat: "2 weken", wat: "Huurders gevonden" },
    tekst: "Akash heeft mij binnen twee weken geholpen met het vinden van geschikte huurders.",
  },
  {
    naam: "Pawan",
    dienst: "Beleggen",
    uitkomst: { maat: "Korte tijd", wat: "Beleggingspand" },
    tekst: "Ik heb lang gezocht naar een beleggingspand in Amsterdam. Akash heeft mij kunnen helpen bij het vinden van een mooi beleggingspand in zeer korte tijd.",
  },
];

export type Teamlid = { naam: string; rol: string; email: string; foto: string; bio: string };

export const TEAM: Teamlid[] = [
  {
    naam: "Akash Singh",
    rol: "Directeur & makelaar",
    email: "akash@estatec.nl",
    foto: "/images/team/akash-singh.jpg",
    bio: "Oprichter en eigenaar. Sinds 2016 actief als belegger in residentieel vastgoed; van daaruit trok hij de lijn door naar ESTATEC.",
  },
  {
    naam: "Shaam Koemar",
    rol: "Commercieel medewerker",
    email: "shaam@estatec.nl",
    foto: "/images/team/shaam-koemar.jpg",
    bio: "Accuraat en servicegericht; zorgt dat elk verkoopproces soepel verloopt.",
  },
  {
    naam: "Rimpy Kaur",
    rol: "Financieel adviseur",
    email: "hypotheken@estatec.nl",
    foto: "/images/team/rimpy-kaur.jpg",
    bio: "Ervaren in financiële dienstverlening; verbindt beleggers met financiers.",
  },
  {
    naam: "Palak Kaur",
    rol: "Verhuurmakelaar",
    email: "verhuur@estatec.nl",
    foto: "/images/team/palak-kaur.jpg",
    bio: "Begeleidt huurders en verhuurders, met een juridische achtergrond.",
  },
  {
    naam: "Amar Singh",
    rol: "Makelaar",
    email: "amar@estatec.nl",
    foto: "/images/team/amar-singh.jpg",
    bio: "Loodst kopers door het hele aankoopproces, met oog voor detail.",
  },
];

export const PROJECTEN = [
  { naam: "Prof. Lorentzlaan", plaats: "Amstelveen", foto: "/images/projecten/prof-lorentzlaan-amstelveen.jpg" },
  { naam: "Pa Verkuijllaan", plaats: "Badhoevedorp", foto: "/images/projecten/pa-verkuijllaan-badhoevedorp.jpg" },
  { naam: "Valutaboulevard", plaats: "Amsterdam", foto: "/images/projecten/valutaboulevard-amsterdam.jpg" },
  { naam: "Juf van Kempenstraat", plaats: "Hoofddorp", foto: "/images/projecten/juf-van-kempenstraat-hoofddorp.jpg" },
  { naam: "Veenplaats", plaats: "Amstelveen", foto: "/images/projecten/veenplaats-amstelveen.jpg" },
  { naam: "De Savornin Lohmanstraat", plaats: "Amsterdam", foto: "/images/projecten/de-savornin-lohmanstraat-amsterdam.jpg" },
];

export const DIENSTEN = [
  "Verkoop",
  "Aankoop",
  "Verhuur",
  "Aanhuur",
  "Beheer",
  "Beleggen",
  "Financiering",
  "Taxaties",
  "Vastgoedontwikkeling",
];

export const euro = (n: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
