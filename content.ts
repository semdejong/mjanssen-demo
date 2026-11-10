/**
 * Stukadoorsbedrijf M. Janssen — alleen geverifieerde feiten
 * (stukadoorsbedrijfmjanssen.nl, 10 nov 2026).
 * Geen oprichtingsjaar, geen KvK/BTW, geen prijzen, geen Vonderstraat,
 * geen 27/30+ jaar, geen 0570-nummer.
 */

export type Img = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Section = {
  id?: string;
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  home?: boolean;
};

export const slug = "mjanssen-demo";

export const company = {
  name: "Stukadoorsbedrijf M. Janssen",
  styledName: "Stukadoorsbedrijf Marcel Janssen",
  shortName: "M. Janssen",
  owner: "Marcel Janssen",
  tagline: "Sausklaar afwerken van wanden en plafonds",
  description:
    "Vakbekwaam stukadoors- en afbouwbedrijf uit Deventer. Marcel Janssen werkt al ruim 32 jaar als stukadoor en schilder, in nieuwbouw en renovatie, aan huis en bedrijfspand.",
  logo: "/img/logo/logo.png",
  logoWidth: 212,
  logoHeight: 86,
  city: "Deventer",
  region: "Deventer, Apeldoorn, Zwolle, Zutphen, Arnhem en Enschede",
  regionHome: "Deventer, Apeldoorn, Zwolle, Zutphen, Arnhem en Enschede, of waar dan ook in Nederland",
};

export const experience =
  "Ik ben ondertussen al ruim 32 jaar werkzaam als stukadoor en schilder in zowel nieuwbouw als renovatie.";

export const colors = {
  primary: "#303030",
  primaryForeground: "#ffffff",
  accent: "#8F4A32",
  background: "#F3F0E8",
  foreground: "#303030",
  muted: "#FAF8F3",
  inkt: "#303030",
  vanblauw: "#1A1E24",
  spekglad: "#F3F0E8",
  stucvlak: "#FAF8F3",
  rei: "#8B9198",
  voeg: "#5C5854",
  wit: "#FFFFFF",
  baksteen: "#8F4A32",
  baksteenText: "#6B3120",
};

export const seo = {
  title: "Stukadoorsbedrijf M. Janssen | Sausklaar stucen in Deventer",
  description:
    "Wanden en plafonds sausklaar stucen in Deventer en omstreken. Marcel Janssen, ruim 32 jaar stukadoor en schilder. Bel 06-51859072.",
  lang: "nl",
};

export const contact = {
  title: "Neem contact op",
  text: "Bel, mail of vraag een vrijblijvende offerte. Wij nemen binnen één werkdag contact met u op.",
  phone: "06-51859072",
  phoneTel: "tel:+31651859072",
  email: "info@stukadoorsbedrijfmjanssen.nl",
  street: "Welle 44K",
  postal: "7411 CC Deventer",
  address: "Welle 44K, 7411 CC Deventer",
  hours: "Maandag t/m vrijdag 08.00–17.00",
  openingHours: ["Maandag t/m vrijdag: 08.00 – 17.00"],
  facebook: "https://www.facebook.com/marcel.janssen.58",
  maps: "https://www.google.com/maps/search/?api=1&query=Welle%2044K%2C%207411%20CC%20Deventer",
  cta: { label: "Bel 06-51859072", href: "tel:+31651859072" },
};

export const dienstNav = [
  { label: "Sausklaar", href: "/sausklaar" },
  { label: "Wanden & plafonds", href: "/wanden" },
  { label: "Buitenmuur", href: "/buitenmuur" },
  { label: "Badkamer & beton ciré", href: "/badkamer" },
  { label: "Airless & sausen", href: "/airless" },
  { label: "Spachtelputz", href: "/spachtelputz" },
  { label: "Lijsten & ornamenten", href: "/lijsten" },
] as const;

export const mainNav = [
  { label: "Projecten", href: "/projecten" },
  { label: "Over Marcel", href: "/over-marcel" },
  { label: "Contact", href: "/contact" },
] as const;

export const nav = [
  { label: "Diensten", href: "/diensten" },
  ...mainNav,
];

export const offerteDiensten = [
  "Sausklaar stucen",
  "Behangklaar",
  "Plafond",
  "Buitenmuur",
  "Badkamer",
  "Beton ciré",
  "Airless latex spuiten",
  "Sausen",
  "Spachtelputz",
  "Lijsten en ornamenten",
  "Anders",
] as const;

export const finish = {
  sausklaar: [
    "Hoogste afwerkingsklasse, veelal Klasse A.",
    "Spiegelglad, onder elke lichtinval perfect glad.",
    "Klaar om te sauzen of te spuiten.",
    "Oneffenheden, gaatjes en structuurverschillen zijn weggewerkt.",
  ],
  behangklaar: [
    "Ondergrond voor behang, ook glasvezelbehang.",
    "Kleine oneffenheden mogen, het behang verbergt ze.",
    "Na droging kunt u de wand behangen.",
    "Behangen hoort bij het werk.",
  ],
};

export const drying = [
  "Reken op 1 dag droogtijd per millimeter laagdikte.",
  "Minimaal 15 °C, en ventileer de ruimte.",
  "Saus niet op een muur die nog vochtig is.",
  "Schuur licht na met korrel 220 of fijner en maak de wand stofvrij.",
  "Breng altijd voorstrijk aan op vers stucwerk. Zonder voorstrijk zuigt de muur de verf ongelijk op.",
];

export const brands = [
  { name: "Brander", src: "/img/merken/brander.jpg", width: 130, height: 75 },
  { name: "Hoeka", src: "/img/merken/hoeka.png", width: 200, height: 60 },
  { name: "Knauf", src: "/img/merken/knauf.png", width: 200, height: 60 },
  { name: "Strikolith", src: "/img/merken/strikolith.png", width: 200, height: 52 },
  { name: "Multigips", src: "/img/merken/multigips.png", width: 200, height: 70 },
  { name: "Gyproc", src: "/img/merken/gyproc.png", width: 200, height: 70 },
  { name: "Sikkens", src: "/img/merken/sikkens.png", width: 200, height: 70 },
] as const;

export const services = [
  {
    title: "Sausklaar",
    href: "/sausklaar",
    text: "Spiegelgladde wanden, veelal Klasse A, klaar om te sauzen of te spuiten.",
  },
  {
    title: "Behangklaar",
    href: "/sausklaar#behangklaar",
    text: "Een nette ondergrond voor behang, inclusief glasvezelbehang. Kleine oneffenheden mogen.",
  },
  {
    title: "Buitenmuur",
    href: "/buitenmuur",
    text: "Gevel opknappen, met betere isolatie en vochtbestendigheid. Beste periode: april t/m oktober.",
  },
  {
    title: "Beton ciré / badkamer",
    href: "/badkamer",
    text: "Tadelakt en beton ciré: naadloos, hygiënisch en waterdicht, ook als alternatief voor tegels.",
  },
  {
    title: "Airless latex",
    href: "/airless",
    text: "Egalen finish met de airless pomp op 200 bar. Vooral aantrekkelijk vanaf 100 m².",
  },
  {
    title: "Spachtelputz",
    href: "/spachtelputz",
    text: "Stootvaste korrelpleister voor binnen en buiten, grof of extra fijn, 1 tot 4 mm.",
  },
  {
    title: "Lijsten & ornamenten",
    href: "/lijsten",
    text: "Kooflijsten, perklijsten, sierlijsten, rozetten en restauratie van beschadigde plafonds.",
  },
] as const;

export const about = {
  title: "Over Marcel",
  paragraphs: [
    experience,
    "Met deze ervaring en passie voor het vak ben ik bereid u van advies te voorzien voor iedere ruimte. Ik ga graag samen met u op zoek naar de mogelijkheden in uw huis of bedrijfspand.",
    "Stukadoorsbedrijf M. Janssen is een betaalbaar en betrouwbaar bedrijf en werkt uitsluitend met de beste materialen.",
    "Ik ben stukadoor én schilder. Sausen doe ik traditioneel met rol en stok, of ik spuit de latex met de airless pomp. Zo krijgt u één aanspreekpunt voor stucwerk en afwerking.",
  ],
  image: {
    src: "/img/marcel/stukadoor-marcel.jpg",
    width: 600,
    height: 359,
    alt: "Marcel Janssen aan het werk bij buitengevelstucwerk.",
  } satisfies Img,
};

export const waarom = [
  {
    title: "Eén aanspreekpunt",
    text: "U spreekt met Marcel Janssen, van advies tot oplevering.",
  },
  {
    title: "100% kwaliteit",
    text: "Betaalbaar en betrouwbaar. Dat is de korte lijn waar het bedrijf voor staat.",
  },
  {
    title: "Duidelijkheid, flexibiliteit, service",
    text: "Kwaliteit, betrouwbaarheid, duidelijkheid, flexibiliteit en een goede service staan hoog in het vaandel.",
  },
  {
    title: "Beste materialen",
    text: "Alleen materialen die bij het werk passen worden verwerkt.",
  },
];

export const reviews = {
  title: "Wat klanten zeggen",
  items: [
    {
      name: "Jan S. Deventer",
      text: "Ik heb me hele huis door Stukadoorsbedrijf M. Janssen laten spuiten. Marcel heeft netjes al zijn afspraken nagekomen en heeft alles keurig netjes afgewerkt. Een week voor de klus van start is gegaan heb ik gevraagd of hij ook de keuken voor me kon stuken. Dit was geen probleem en hier ging hij flexibel mee om. Het resultaat was erg netjes. Mochten er in de toekomst reparatiewerkzaamheden nodig zijn, dan komt hij hier gratis voor terug. Goede afterservice.",
    },
    {
      name: "Ferry Z.",
      text: "Marcel heeft bij ons vakwerk afgeleverd. Een fijn persoon om mee te werken. Flexibel, komt zijn afspraken na, denkt mee, vakkundig en een harde werker. Vrienden en familie die bij ons komen kijken zijn louter positief over het stucwerk. We hebben geen seconde spijt gehad dat we Stukadoorsbedrijf M. Janssen hiervoor gevraagd hebben.",
    },
    {
      name: "Willem H.",
      text: "Zeer goede ervaring gehad met Marcel. Hij heeft duidelijk aangegeven wat voor hem het werk makkelijk maakt en wat we konden verwachten. Bij het eerste bezoek gaf hij gelijk al dingen aan die andere mensen niet zagen of benoemden, waaruit direct zijn ervaring bleek. Resultaat ziet er top uit, een wereld van verschil. Marcel, super bedankt.",
    },
    {
      name: "S. van T.",
      text: "Marcel Janssen heeft onze wanden sausklaar gestuct. Fijne gast, hard gewerkt, superblij met het resultaat, hele mooie gladde wanden. Prima klus, netjes afgeleverd. Marcel Janssen is een vakman die ik zeker kan aanraden.",
    },
  ],
};

export const faq = [
  {
    q: "Wat is het verschil tussen sausklaar en behangklaar?",
    a: "Sausklaar is de hoogste afwerkingsklasse, veelal Klasse A. De wand is spiegelglad en onder elke lichtinval perfect glad, klaar om te sauzen of te spuiten. Bij behangklaar mogen kleine oneffenheden blijven, omdat behang — ook glasvezelbehang — die verbergt.",
  },
  {
    q: "In welk seizoen laat ik een buitenmuur stuken?",
    a: "De beste periode is april tot en met oktober. Dan zijn de omstandigheden, onder meer de luchtvochtigheid, het meest geschikt. Voor advies op uw woning vraagt u een vrijblijvende offerte.",
  },
  {
    q: "Kan beton ciré in de badkamer?",
    a: "Ja. Beton ciré, gewreven beton, is cementgebonden en waterdicht, zonder voegen, en daardoor hygiënisch. Tadelakt is eveneens een afwerking voor de badkamer. Soms kan er over bestaande tegels of gips gestuct worden; dat bekijkt Marcel ter plaatse.",
  },
  {
    q: "Airless spuiten of rollen?",
    a: "Met de airless pomp wordt latex op 200 bar verneveld. Het resultaat is egaal en het werk gaat snel. Spuiten is vooral aantrekkelijk vanaf 100 m². Daaronder is rollen vaak vergelijkbaar.",
  },
  {
    q: "Heb ik een vergunning nodig voor de buitenmuur?",
    a: "Niet elke woning mag aan de buitenkant gestuct worden. Neem contact op met de gemeente. Verandert het aangezicht, dan vraagt u een omgevingsvergunning aan. Blijft het aangezicht gelijk, dan kan het stucwerk vergunningsvrij zijn.",
  },
];

const schalkhaarCaption =
  "Villa in Schalkhaar, augustus 2012. Buitengevels gestuct met designmortel op cementbasis: waterdicht en vorstbestendig.";

const deventerCaption =
  "Woonkamer in Deventer, mei 2019. De muren hadden scheuren, granol en sierpleister. De familie streek zelf voor met het geleverde groene voorstrijkmiddel; de volgende dag is de woonkamer gestuct, sausklaar.";

const apeldoornCaption =
  "Badkamer in Apeldoorn, februari 2021. Wanden gestuct met beton ciré.";

const olstCaption =
  "Jaren-20-woning in Olst, februari 2021. Beschadigde plafonds met scheuren en ornamenten gerestaureerd. Plafonds en wanden opnieuw gestuct.";

export const projects: Project[] = [
  {
    id: "schalkhaar",
    src: "/img/projecten/buitengevel-schalkhaar-1.jpg",
    width: 2000,
    height: 1500,
    alt: "Villa in Schalkhaar met glad afgewerkte buitengevel, augustus 2012.",
    title: "Buitengevel Schalkhaar",
    caption: schalkhaarCaption,
    home: true,
  },
  {
    id: "schalkhaar-zij",
    src: "/img/projecten/buitengevel-schalkhaar-2.jpg",
    width: 1098,
    height: 756,
    alt: "Zijgevel van de villa in Schalkhaar na het buitengevelstucwerk.",
    title: "Buitengevel Schalkhaar",
    caption: schalkhaarCaption,
  },
  {
    id: "schalkhaar-werk",
    src: "/img/projecten/buitenmuur-laten-stucen.jpg",
    width: 2000,
    height: 1500,
    alt: "Buitengevel van de villa in Schalkhaar tijdens het stucwerk, met steiger.",
    title: "Buitengevel Schalkhaar, in uitvoering",
    caption: schalkhaarCaption,
  },
  {
    id: "deventer",
    src: "/img/projecten/woonkamer-deventer-0519.jpg",
    width: 2000,
    height: 1125,
    alt: "Groene voorstrijk op een woonkamermuur in Deventer, mei 2019, terwijl het stucwerk wordt opgezet.",
    title: "Woonkamer Deventer",
    caption: deventerCaption,
    home: true,
  },
  {
    id: "deventer-lijst",
    src: "/img/projecten/woonkamer-deventer-0602.jpg",
    width: 2000,
    height: 1125,
    alt: "Stucwerk langs een plafondlijst en deurkozijn in de woonkamer in Deventer.",
    title: "Woonkamer Deventer",
    caption: deventerCaption,
  },
  {
    id: "uitvoering",
    src: "/img/projecten/stucwerk-0514.jpg",
    width: 2000,
    height: 1125,
    alt: "Marcel Janssen zet stucwerk op een binnenwand.",
    title: "Stucwerk in uitvoering",
    caption: "Sausklaar stucwerk wordt met de spaan opgezet.",
    home: true,
  },
  {
    id: "apeldoorn",
    src: "/img/projecten/badkamer-apeldoorn.jpg",
    width: 690,
    height: 350,
    alt: "Badkamer in Apeldoorn met beton ciré rond de wastafel, februari 2021.",
    title: "Badkamer Apeldoorn",
    caption: apeldoornCaption,
    home: true,
  },
  {
    id: "olst",
    src: "/img/projecten/monumentaal-pand-olst.jpg",
    width: 720,
    height: 960,
    alt: "Beschadigd ornamentplafond in een jaren-20-woning in Olst, februari 2021.",
    title: "Ornamenten Olst",
    caption: olstCaption,
    home: true,
  },
  {
    id: "olst-rozet",
    src: "/img/projecten/ornamenten.jpg",
    width: 960,
    height: 720,
    alt: "Beschadigde plafondrozet met scheuren, jaren-20-woning in Olst.",
    title: "Ornamenten Olst",
    caption: olstCaption,
  },
  {
    id: "olst-zaal",
    src: "/img/projecten/plafond-met-lijsten.jpg",
    width: 720,
    height: 960,
    alt: "Zaal met kooflijsten en ornamenten tijdens de restauratie in Olst.",
    title: "Lijsten en ornamenten, Olst",
    caption: olstCaption,
  },
  {
    id: "olst-plafond",
    src: "/img/projecten/plafondlijsten-en-ornamenten.jpg",
    width: 720,
    height: 960,
    alt: "Plafondlijsten en ornament in de jaren-20-woning in Olst.",
    title: "Plafondlijsten Olst",
    caption: olstCaption,
  },
  {
    id: "sausklaar",
    src: "/img/diensten/sausklaar-stukwerk.jpg",
    width: 800,
    height: 605,
    alt: "Sausklaar gestuct interieur met gladde wanden, schouw en plafond.",
    title: "Sausklaar stucwerk",
    caption: "Sausklaar stucwerk: wanden en plafond spiegelglad, klaar om te sauzen of te spuiten.",
    home: true,
  },
  {
    id: "spachtelputz",
    src: "/img/projecten/spachtelputz-buitenmuur.jpg",
    width: 1008,
    height: 756,
    alt: "Buitenmuur met spachtelputz, grove korrel op de penanten en een fijnere vlakafwerking.",
    title: "Spachtelputz",
    caption: "Spachtelputz op een buitenmuur.",
    home: true,
  },
  {
    id: "gevel-werk",
    src: "/img/projecten/buitengevel-image032.jpg",
    width: 2000,
    height: 1500,
    alt: "Klassieke gevel in de steiger, deels voorzien van buitenstucwerk.",
    title: "Buitengevelstucwerk",
    caption: "Buitengevelstucwerk in uitvoering.",
    home: true,
  },
  {
    id: "beton-cire",
    src: "/img/projecten/beton-cire-stukwerk.jpg",
    width: 2000,
    height: 1331,
    alt: "Badkamer met naadloos beton ciré op wanden en vloer.",
    title: "Beton ciré",
    caption: "Beton ciré in een badkamer: naadloos en zonder voegen.",
  },
  {
    id: "badkamer",
    src: "/img/projecten/badkamer-stuken.jpg",
    width: 1098,
    height: 756,
    alt: "Badkamer met glad, mineraal stucwerk op de wanden en de wastafelmeubel.",
    title: "Badkamerstucwerk",
    caption: "Badkamerstucwerk, naadloos afgewerkt.",
  },
  {
    id: "lijst-detail",
    src: "/img/projecten/beschadigde-ornamenten.jpg",
    width: 960,
    height: 720,
    alt: "Beschadigd sierornament op een plafond, voor restauratie.",
    title: "Beschadigd ornament",
    caption: "Beschadigd ornament, uitgangspunt voor restauratie.",
  },
  {
    id: "plafond-af",
    src: "/img/diensten/plafond-stucen.jpg",
    width: 720,
    height: 960,
    alt: "Wit plafond met ornament, perklijst en kooflijst.",
    title: "Plafond met lijsten",
    caption: "Plafond met ornament en lijsten.",
  },
];

export type PageCopy = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  image?: Img;
  sections: Section[];
  related: { href: string; label: string }[];
};

export const pages: Record<string, PageCopy> = {
  sausklaar: {
    title: "Sausklaar stucen",
    metaTitle: "Sausklaar stucen",
    metaDescription:
      "Sausklare wanden, veelal Klasse A: spiegelglad en onder elke lichtinval perfect glad. Droogtijd, voorstrijk en het verschil met behangklaar. Deventer en omstreken.",
    lead: "Een sausklare wand is zo spiegelglad en egaal afgewerkt dat u die direct kunt sauzen of spuiten. Dat is de hoogste afwerkingsklasse in stucwerk, veelal Klasse A.",
    image: {
      src: "/img/projecten/stucwerk-0514.jpg",
      width: 2000,
      height: 1125,
      alt: "Marcel Janssen werkt een wand sausklaar af met de spaan.",
    },
    sections: [
      {
        id: "behangklaar",
        heading: "Sausklaar tegenover behangklaar",
        paragraphs: [
          "Het verschil zit in de verfijning. Bij behangklaar stucwerk mogen kleine imperfecties blijven, omdat het behang die verbergt. Een sausklare muur is onder elke lichtinval perfect glad.",
          "Behangen hoort bij het werk, onder meer met glasvezelbehang. Daar is geen aparte pagina voor: de wand wordt behangklaar gemaakt, en na droging kunt u behangen.",
        ],
      },
      {
        heading: "Waarom sausklaar",
        bullets: [
          "Gladde wanden kaatsen het licht gelijkmatig terug. De ruimte oogt ruimer.",
          "Na volledige droging kunt u sauzen of spuiten in de kleur die u wilt.",
          "Een gladde muur is eenvoudiger schoon te houden, en een beschadiging is later bij te werken.",
        ],
      },
      {
        heading: "Drogen, schuren, voorstrijk",
        paragraphs: [
          "Stucwerk houdt veel vocht vast. De droogregel is 1 dag per millimeter dikte, bij minimaal 15 °C en goede ventilatie. Saus nooit op een muur die nog vochtig is.",
          "Na het drogen kunnen er kalkprikjes of stof op het oppervlak liggen. Loop de wand licht na met schuurgaas korrel 220 of fijner en maak hem stofvrij.",
          "Vers stucwerk zuigt sterk. Slaat u de voorstrijk over, dan trekt de muur de verf direct op, met kleurverschil en banen tot gevolg. Breng daarom altijd voorstrijk voor zuigende ondergronden aan en laat die drogen.",
          "Daarna sauzen met rol en stok, of de latex airless laten spuiten voor een egale dekking zonder rolstructuur.",
        ],
      },
      {
        heading: "Dikte van de laag",
        paragraphs: [
          "Hoeveel pleister nodig is, hangt af van de muur. Bij veel scheuren is meestal raapwerk nodig: een laag van 7 mm tot 5 cm. Bij kleinere oneffenheden volstaat pleister van 1 tot 6 mm. Het sausklare resultaat is in beide gevallen de gladde eindlaag.",
        ],
      },
    ],
    related: [
      { href: "/wanden", label: "Wanden en plafonds" },
      { href: "/sausen", label: "Sausen" },
      { href: "/airless", label: "Airless latex" },
    ],
  },
  wanden: {
    title: "Wanden en plafonds stuken",
    metaTitle: "Wanden en plafonds stuken",
    metaDescription:
      "Wanden en plafonds glad of met structuur. Raapwerk 7 mm tot 5 cm, pleister 1 tot 6 mm, spackspuiten, schuurplafond, spachtelputz en betonlook.",
    lead: "Wanden stuken wordt ook pleisteren genoemd. Glad, of met een korrel. Scheuren en onzuiverheden werken we weg, in nieuwbouw en in oudere huizen.",
    image: {
      src: "/img/diensten/plafond-stucen.jpg",
      width: 720,
      height: 960,
      alt: "Plafond met ornament, perklijst en kooflijst.",
    },
    sections: [
      {
        heading: "Raapwerk en pleister",
        paragraphs: [
          "Sausklare muren zijn de keuze als u wilt schilderen: glad, zonder oneffenheden. Welke laag nodig is, hangt af van de staat van de muur.",
          "Bij veel scheuren is meestal raapwerk nodig. Dan komt er een laag van 7 mm tot 5 cm op. Bij kleinere oneffenheden kiezen we vaak voor pleister van 1 tot 6 mm.",
          "Twijfelt u of de muur nog goed is, dan kom ik vrijblijvend kijken en zeg ik wat er nodig is.",
        ],
      },
      {
        heading: "Plafond: glad of met structuur",
        paragraphs: [
          "Een plafond kan weer helemaal glad, of juist met structuur. Glad geeft een strakke woonkamer of badkamer. Er zijn meer variaties.",
          "Zitten er weinig oneffenheden en scheurtjes in, dan is spackspuiten een optie. Met de spuitmachine wordt het plafond glad gezet. Dat is een andere weg dan alles met de hand afreien.",
        ],
        bullets: [
          "Schuurplafond: fijne cirkelvormige patronen. Alleen mogelijk bij een pleisterdikte van 1 tot 6 mm.",
          "Spachtelputz: een korrelige structuur die zich laat witten en schilderen.",
          "Betonlook: een van de afwerkingen die op een plafond kan.",
        ],
      },
      {
        heading: "Behangklaar",
        paragraphs: [
          "Gaat u behangen, met gewoon behang of glasvezelbehang, dan wordt de wand behangklaar gestuct. Na droging kunt u behangen. Het verschil met sausklaar staat op de sausklaarpagina: sausklaar is onder elke lichtinval perfect glad, behangklaar laat kleine oneffenheden toe.",
        ],
      },
    ],
    related: [
      { href: "/sausklaar", label: "Sausklaar en Klasse A" },
      { href: "/spachtelputz", label: "Spachtelputz" },
      { href: "/lijsten", label: "Lijsten en ornamenten" },
    ],
  },
  buitenmuur: {
    title: "Buitenmuur stuken",
    metaTitle: "Buitenmuur stuken",
    metaDescription:
      "Buitengevel stuken in Deventer en omstreken. April tot en met oktober, omgevingsvergunning als het aangezicht verandert, designmortel en spachtelputz.",
    lead: "Een buitengevel kan in veel gevallen gestuct en opgeknapt worden. Naast de afwerking levert dat betere isolatie en een goede vochtbestendigheid op.",
    image: {
      src: "/img/projecten/buitenmuur-laten-stucen.jpg",
      width: 2000,
      height: 1500,
      alt: "Buitengevel van een villa in Schalkhaar tijdens het stucwerk, augustus 2012.",
    },
    sections: [
      {
        heading: "April tot en met oktober",
        paragraphs: [
          "De beste periode om buitenmuren te stuken is april tot en met oktober. De omstandigheden zijn dan het meest geschikt, onder meer door de luchtvochtigheid. Voor advies op uw woning vraagt u een vrijblijvende offerte.",
        ],
      },
      {
        heading: "Gemeente en omgevingsvergunning",
        paragraphs: [
          "Niet bij elke woning mag de buitenkant gestuct worden. Neem contact op met de gemeente om te zien wat mag. U kunt een omgevingsvergunning aanvragen voor het stucwerk. Als het aangezicht van de woning niet verandert, kan het stukwerk vergunningsvrij zijn.",
        ],
      },
      {
        heading: "Afwerking buiten",
        paragraphs: [
          "Voor buitenmuren is spachtelputz of rustiekputz mogelijk: een korrelige structuur. Een gladde afwerking kan ook, voor een strak resultaat. Geef in de offerteaanvraag zo specifiek mogelijk aan welke afwerking u wilt. Weet u het nog niet, dan kom ik vrijblijvend langs om de opties te bespreken.",
          "In Schalkhaar (augustus 2012) zijn de buitengevels van een villa gestuct met designmortel. Designmortel is waterdicht en vorstbestendig, omdat die op cement is gemaakt in plaats van op kalk.",
        ],
      },
    ],
    related: [
      { href: "/spachtelputz", label: "Spachtelputz" },
      { href: "/projecten#schalkhaar", label: "Project Schalkhaar" },
    ],
  },
  badkamer: {
    title: "Badkamer stuken",
    metaTitle: "Badkamer stuken",
    metaDescription:
      "Badkamer stuken met Tadelakt of beton ciré. Naadloos, hygiënisch en waterdicht, soms over bestaande tegels of gips. Deventer en omstreken.",
    lead: "Een gestucte badkamer krijgt een eigen uitstraling, in een nieuwbouwwoning of in een bestaande ruimte. Tadelakt en beton ciré zijn de soorten die hierbij horen.",
    image: {
      src: "/img/projecten/badkamer-apeldoorn.jpg",
      width: 690,
      height: 350,
      alt: "Badkamer in Apeldoorn met beton ciré rond de wastafel, februari 2021.",
    },
    sections: [
      {
        heading: "Alternatief voor tegels",
        paragraphs: [
          "Stucwerk wordt steeds vaker gekozen in plaats van tegels. Er zitten geen voegen in waar vuil of schimmel blijft hangen. Het stukwerk wordt waterdicht gemaakt en is daarom geschikt voor deze ruimte. Het resultaat is hygiënischer dan een tegelwand met naden.",
        ],
      },
      {
        heading: "Over bestaande tegels of gips",
        paragraphs: [
          "Heeft de badkamer nu tegels, dan is het in sommige gevallen mogelijk om eroverheen te stuken. Dat geldt ook voor gips en gipsplaten. Of dat kan, hangt af van de ondergrond. Ik kom vrijblijvend kijken.",
        ],
      },
      {
        heading: "Beton ciré en Tadelakt",
        paragraphs: [
          "Beton ciré (gewreven beton) is cementgebonden, waterdicht en naadloos. In Apeldoorn zijn in februari 2021 badkamerwanden met beton ciré gestuct. De eigenschappen en de looks staan op de beton-cirépagina.",
          "Tadelakt is de andere afwerking die voor de badkamer genoemd wordt: een minerale, waterdichte stuclaag zonder voegen.",
        ],
      },
    ],
    related: [
      { href: "/beton-cire", label: "Beton ciré" },
      { href: "/projecten#apeldoorn", label: "Project Apeldoorn" },
    ],
  },
  "beton-cire": {
    title: "Beton ciré",
    metaTitle: "Beton ciré",
    metaDescription:
      "Beton ciré, gewreven beton: cementgebonden, waterdicht en naadloos. Badkamer, keuken, werkblad, vloer, openhaard en trap. Looks van metalliek tot marmer.",
    lead: "Beton ciré is de Franse naam voor gewreven beton. Cementgebonden stukwerk, geschikt voor de badkamer en ook voor andere ruimtes.",
    image: {
      src: "/img/projecten/beton-cire-stukwerk.jpg",
      width: 2000,
      height: 1331,
      alt: "Badkamer met naadloos beton ciré op wanden en vloer.",
    },
    sections: [
      {
        heading: "Wat het is",
        paragraphs: [
          "Het mengsel hecht op vrijwel iedere ondergrond en is toe te passen in vochtige ruimtes, omdat beton ciré waterdicht is. Er wordt gewerkt met diverse gerenommeerde Italiaanse merken.",
        ],
      },
      {
        heading: "Eigenschappen",
        bullets: [
          "Waterdicht: te gebruiken in vochtige ruimtes zoals de badkamer.",
          "Duurzaam. Een coating beperkt krassen; met die coating noemen zij zelfs een aanrechtblad als toepassing.",
          "Naadloos: geen voegen, dus geen vocht in de naden en minder gevoelig voor schimmel.",
          "Hygiënisch: door de dichte samenstelling hechten bacteriën en schimmels zich niet aan het oppervlak.",
        ],
      },
      {
        heading: "Waar het kan",
        paragraphs: [
          "Badkamers, keukens, keukenbladen, vloeren, openhaarden en trappen. In de badkamer is het een alternatief voor tegels.",
        ],
      },
      {
        heading: "Looks",
        bullets: [
          "Metallic",
          "Gebroken steen",
          "Oxidatie (ijzer en koper)",
          "Industrieel",
          "Marmerlook",
          "Betonlook",
        ],
      },
    ],
    related: [
      { href: "/badkamer", label: "Badkamer" },
      { href: "/projecten#apeldoorn", label: "Badkamer Apeldoorn" },
    ],
  },
  airless: {
    title: "Airless latex spuiten",
    metaTitle: "Airless latex spuiten",
    metaDescription:
      "Latex spuiten met een airless pomp op 200 bar. Egale finish op nieuw stucwerk, gipsplaat, beton, plafonds en spachtelputz. Vooral aantrekkelijk vanaf 100 m².",
    lead: "Bang voor strepen van de vachtroller? Latex laat zich spuiten. Een airless pomp vernevelt de verspuitbare latex met een druk van 200 bar op glad afgewerkte muren of plafonds.",
    image: {
      src: "/img/diensten/airless-latex-spuiten.jpg",
      width: 400,
      height: 300,
      alt: "Airless latex spuiten op een binnenwand.",
    },
    sections: [
      {
        heading: "Egaal en snel",
        paragraphs: [
          "Latex spuiten geeft een egaal en gelijkmatig eindresultaat en is snel aan te brengen. Het is vooral aantrekkelijk bij grotere oppervlakken, vanaf 100 m². Onder de 100 m² is rollen ook een goede optie en vaak vergelijkbaar.",
          "Zijn de ondergronden strak en egaal, zoals pleisterwerk in een nieuwbouwwoning, dan blijft na het spuiten geen rolstructuur zichtbaar.",
        ],
      },
      {
        heading: "Ondergronden",
        bullets: ["Nieuw stucwerk", "Gipsplaten", "Muren van beton", "Plafonds", "Spachtelputz"],
      },
      {
        heading: "Nieuwbouw en kleur",
        paragraphs: [
          "Spuitwerk kan in een nieuwbouwwoning en in een bestaande woning. Is de nieuwbouw behangklaar opgeleverd, dan kan die niet direct gesaust worden: eerst dun en glad stuken.",
          "Net als rollen kan latex spuiten in elke gewenste kleur. Wit wordt het meest gebruikt op plafonds; in sommige appartementen worden de wanden ook wit gespoten.",
          "De wand moet geheel droog zijn voordat er latex op komt.",
        ],
      },
    ],
    related: [
      { href: "/sausen", label: "Sausen met rol en stok" },
      { href: "/sausklaar", label: "Eerst sausklaar stucen" },
    ],
  },
  sausen: {
    title: "Sausen",
    metaTitle: "Sausen",
    metaDescription:
      "Muren en plafonds sausen in Deventer en omstreken. Traditioneel met rol en stok, of met de airless pomp. Alleen op een volledig droge wand.",
    lead: "Wilt u sauzen, dan worden de muren sausklaar opgeleverd: extra glad, zodat de verf strak ligt. De kleur kunt u later weer veranderen.",
    sections: [
      {
        heading: "Rol en stok, of spuiten",
        paragraphs: [
          "Traditioneel sauswerk gaat met rol en stok. Die manier is arbeidsintensiever dan latex spuiten. De roller laat een lichte structuur achter, waardoor kleine oneffenheden minder opvallen dan bij spuitwerk.",
          "Ik beschik over apparatuur om de verf te spuiten. Zo wordt de wand egaal, zonder banen. Meer daarover staat bij airless latex spuiten.",
          "De wand of het plafond moet geheel droog zijn. Anders kan het stucwerk scheuren of loslaten.",
        ],
      },
      {
        heading: "Voor u zelf saust",
        bullets: [
          "Dek vloer en meubels af.",
          "Plak kozijnen, plinten, wandcontactdozen en schakelaars strak af.",
          "Maak de ondergrond vlak, schoon en vetvrij.",
          "Gebruik een goede kwaliteit latex.",
          "Op grote vlakken rolt u eerst horizontaal en verdeelt u daarna verticaal.",
          "Gemorste latex neemt u op met warm water en een doek.",
        ],
      },
      {
        heading: "Keuken en structuur",
        paragraphs: [
          "Voor een keukenachterwand is afneembare of schrobvaste verf een logische keuze. Er is ook structuurverf als u bewust structuur op de wand wilt.",
        ],
      },
    ],
    related: [
      { href: "/airless", label: "Airless latex spuiten" },
      { href: "/sausklaar", label: "Sausklaar stucen" },
    ],
  },
  spachtelputz: {
    title: "Spachtelputz",
    metaTitle: "Spachtelputz",
    metaDescription:
      "Spachtelputz: kunststofgebonden korrelpleister met marmerkorrels, stootvast, binnen en buiten. Grof of extra fijn, laag van 1 tot 4 mm.",
    lead: "Spachtel betekent spatel of plamuurmes, putz betekent pleister. De korrelpleister is kunststofgebonden en bestaat uit marmerkorrels en bindmiddel.",
    image: {
      src: "/img/projecten/spachtelputz-buitenmuur.jpg",
      width: 1008,
      height: 756,
      alt: "Buitenmuur afgewerkt met spachtelputz.",
    },
    sections: [
      {
        heading: "Grof of extra fijn",
        paragraphs: [
          "U bepaalt de korreldikte, op wand of plafond. Grof of extra fijn, allebei mogelijk. De laag is 1 tot 4 mm. Andere korrelpleisters die genoemd worden zijn rustiekputz, barokpleister en granol.",
          "Spachtelputz is stootvast en geschikt voor binnen en buiten. Beschadigingen vallen minder op dan op een gladde muur. Na droging is de korrel te sausen; een structuur vraagt meer verf dan een egale wand.",
        ],
        bullets: [
          "Stoot- en boenvast",
          "Kleur vooraf te bepalen",
          "Binnen en buiten",
          "Lange levensduur",
          "Stoot stof af en is eenvoudig in onderhoud",
        ],
      },
      {
        heading: "Herstel en glasvezel",
        paragraphs: [
          "Zitten er veel beschadigingen en scheuren in de muur, dan kan spachtelputz die repareren en een stevige wand geven waarin minder snel scheuren komen.",
          "Over glasvezelbehang kan het in sommige gevallen. Of dat kan, hangt af van de conditie van het glasvezel. Dat beoordeel ik ter plaatse.",
          "Buiten en binnen breng ik spachtelputz aan, ook met een spuitmachine.",
        ],
      },
    ],
    related: [
      { href: "/buitenmuur", label: "Buitenmuur" },
      { href: "/sausen", label: "Sausen na droging" },
    ],
  },
  lijsten: {
    title: "Plafondlijsten en ornamenten",
    metaTitle: "Plafondlijsten en ornamenten",
    metaDescription:
      "Kooflijsten, perklijsten, sierlijsten en rozetten. Klassiek of modern, ook in nieuwbouw. Restauratie van beschadigde plafonds, zoals de jaren-20-woning in Olst.",
    lead: "Lijsten en ornamenten horen niet alleen in een oud grachtenpand. Ze kunnen ook bij u geplaatst worden, klassiek of strak, in een bestaande woning of in nieuwbouw.",
    image: {
      src: "/img/projecten/plafond-met-lijsten.jpg",
      width: 720,
      height: 960,
      alt: "Plafond met kooflijsten en ornamenten tijdens restauratie in een jaren-20-woning in Olst.",
    },
    sections: [
      {
        heading: "Eerst de ondergrond vlak",
        paragraphs: [
          "Plafondlijsten, ook kooflijsten genoemd, overbruggen de overgang tussen wand en plafond. Ik maak de ondergrond eerst vlak en glad, zodat lijsten en perklijsten gesteld en geplakt kunnen worden en niet breken. Is de ondergrond niet vlak genoeg, dan breken de lijsten bij het aandrukken.",
        ],
      },
      {
        heading: "Klassiek, modern, nieuwbouw",
        paragraphs: [
          "Sierlijsten en ornamenten horen niet alleen in een monument. In een strak interieur past een strakke plint, perklijst of kooflijst, of een ring van lijstwerk. In een klassiek interieur past een bewerkte perk- of kooflijst met rozetten.",
          "Ook in nieuwbouw, waar het plafond meestal glad gestuct is, kunnen een platte plafondplint of een rozet bij de hanglamp. Glad stucwerk is goed te repareren, en daarop kunnen kooflijsten of plafondplinten.",
        ],
      },
      {
        heading: "Kooflijst, perklijst, plafondplint",
        bullets: [
          "Kooflijst: in de hoek tussen plafond en wand. Zwaar gedecoreerd voor hoge klassieke plafonds, of een rustiger motief. Met ledverlichting kan een klassiek profiel moderner ogen.",
          "Perklijst: recht op plafond of wand, als kader op een leeg vlak, vaak met een rozet erin. Ook als afscheiding van een lambrisering.",
          "Plafondplint: aan de rand van het plafond, een strakke overgang tussen wand en plafond. Veel gebruikt in nieuwbouw.",
        ],
      },
      {
        id: "olst",
        heading: "Restauratie",
        paragraphs: [
          "In februari 2021 is een jaren-20-woning in Olst onder handen genomen. De klassieke plafonds waren beschadigd en vertoonden scheuren. De ornamenten en lijsten zijn gerestaureerd en de plafonds en wanden zijn opnieuw gestuct.",
        ],
      },
    ],
    related: [
      { href: "/wanden", label: "Wanden en plafonds" },
      { href: "/projecten#olst", label: "Project Olst" },
    ],
  },
};

export const content = {
  slug,
  company,
  colors,
  seo,
  nav,
  hero: {
    title: "Sausklaar stucen in Deventer — wanden en plafonds spiegelglad.",
    subtitle: `${experience} Vakbekwaam stukadoors- en afbouwbedrijf uit Deventer, voor huis en bedrijfspand.`,
    primaryCta: { label: "Bel 06-51859072", href: contact.phoneTel },
    secondaryCta: { label: "Vrijblijvende offerte", href: "/offerte" },
    image: "/img/diensten/sausklaar-stukwerk.jpg",
    highlights: ["Deventer en omstreken", "Ruim 32 jaar", "Sausklaar en behangklaar"],
  },
  services: {
    title: "Diensten",
    intro:
      "Sausklaar en behangklaar stucen, airless latex spuiten, spachtelputz, beton ciré, sierlijsten en ornamenten, behangen en sauzen.",
    items: services.map((item) => ({ icon: "", title: item.title, text: item.text })),
  },
  about: {
    title: about.title,
    text: about.paragraphs,
    image: about.image.src,
    stats: [] as { value: string; label: string }[],
  },
  reviews,
  contact: {
    title: contact.title,
    text: contact.text,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
    openingHours: contact.openingHours,
    whatsapp: "",
    cta: contact.cta,
  },
  footer: {
    kvk: "",
    socials: [{ label: "Facebook", href: contact.facebook }],
  },
};

export type Content = typeof content;
