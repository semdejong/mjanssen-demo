/**
 * Stukadoorsbedrijf M. Janssen — alleen geverifieerde feiten
 * (stukadoorsbedrijfmjanssen.nl, 10 nov 2026).
 * Geen oprichtingsjaar, geen KvK/BTW, geen prijzen, geen Vonderstraat,
 * geen 27/30+ jaar, geen 0570-nummer van de busfoto.
 */
export const content = {
  slug: "mjanssen-demo",

  company: {
    name: "Stukadoorsbedrijf M. Janssen",
    shortName: "M. Janssen",
    owner: "Marcel Janssen",
    tagline: "Sausklaar stucen van wanden en plafonds in Deventer en omstreken",
    description:
      "Vakbekwaam stukadoors- en afbouwbedrijf uit Deventer. Marcel Janssen werkt al ruim 32 jaar als stukadoor en schilder, in nieuwbouw en renovatie, aan huis en bedrijfspand.",
    logo: "/img/logo/logo.png",
    logoWidth: 212,
    logoHeight: 86,
    city: "Deventer",
    region: "Deventer, Apeldoorn, Zwolle, Zutphen, Arnhem en Enschede",
  },

  colors: {
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
  },

  seo: {
    title: "Stukadoorsbedrijf M. Janssen | Sausklaar stucen in Deventer",
    description:
      "Wanden en plafonds sausklaar stucen in Deventer en omstreken. Marcel Janssen, ruim 32 jaar stukadoor en schilder. Bel 06-51859072.",
    lang: "nl",
  },

  nav: [
    { label: "Diensten", href: "/diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over Marcel", href: "/over-marcel" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Sausklaar stucen in Deventer — wanden en plafonds spiegelglad.",
    subtitle:
      "Marcel Janssen is al ruim 32 jaar werkzaam als stukadoor en schilder, in nieuwbouw en renovatie. Vakbekwaam stukadoors- en afbouwbedrijf uit Deventer, voor huis en bedrijfspand.",
    primaryCta: { label: "Bel 06-51859072", href: "tel:+31651859072" },
    secondaryCta: { label: "Vrijblijvende offerte", href: "/offerte" },
    image: "/img/home/de-stukadoor-van-deventer-en-omstreken.jpg",
    highlights: ["Deventer en omstreken", "Ruim 32 jaar ervaring", "Sausklaar en behangklaar"],
  },

  services: {
    title: "Diensten",
    intro: "Sausklaar en behangklaar stucen, airless latex spuiten, spachtelputz, beton ciré, sierlijsten en ornamenten, behangen en sauzen.",
    items: [
      { icon: "", title: "Sausklaar stucen", text: "Spiegelgladde wanden, de hoogste afwerkingsklasse (veelal Klasse A), direct klaar om te sauzen of te spuiten." },
      { icon: "", title: "Behangklaar stucen", text: "Een nette ondergrond voor behang, inclusief glasvezelbehang. Kleine oneffenheden mogen, het behang verbergt ze." },
      { icon: "", title: "Wanden en plafonds", text: "Glad of met structuur, raapwerk of pleister, en indien gewenst spackspuiten of een schuurplafond." },
      { icon: "", title: "Buitenmuur stuken", text: "Gevels opknappen met een fraaie, vochtbestendige afwerking. Beste periode: april tot en met oktober." },
      { icon: "", title: "Badkamer en beton ciré", text: "Waterdicht stukwerk, Tadelakt en Beton Ciré — naadloos en hygiënisch, ook als alternatief voor tegels." },
      { icon: "", title: "Airless latex en sausen", text: "Egalen afwerking met de airless pomp, of traditioneel sauswerk met rol en stok." },
      { icon: "", title: "Spachtelputz", text: "Stootvaste korrelpleister voor binnen en buiten, in een grove of extra fijne structuur." },
      { icon: "", title: "Lijsten en ornamenten", text: "Kooflijsten, sierlijsten, rozetten en restauratie van klassieke plafonds." },
    ],
  },

  about: {
    title: "Over Marcel",
    text: [
      "Mijn naam is Marcel Janssen en ik ben ondertussen al ruim 32 jaar werkzaam als stukadoor en schilder in zowel nieuwbouw als renovatiewerkzaamheden. Met deze ervaring en passie voor het vak ben ik bereid u van advies te voorzien voor iedere ruimte. Ik ga graag samen met u op zoek naar de mogelijkheden in uw huis of bedrijfspand.",
      "Stukadoorsbedrijf M. Janssen is een betaalbaar en betrouwbaar bedrijf en werkt uitsluitend met de beste materialen. Kwaliteit, betrouwbaarheid, duidelijkheid, flexibiliteit en een goede service staan hoog in het vaandel.",
    ],
    image: "/img/marcel/stukadoor-marcel.jpg",
    stats: [] as { value: string; label: string }[],
  },

  reviews: {
    title: "Wat klanten zeggen",
    items: [
      { name: "Jan S., Deventer", text: "Ik heb mijn hele huis door Stukadoorsbedrijf M. Janssen laten spuiten. Marcel heeft netjes al zijn afspraken nagekomen en heeft alles keurig netjes afgewerkt. Een week voor de klus van start is gegaan heb ik gevraagd of hij ook de keuken voor me kon stuken. Dit was geen probleem en hier ging hij flexibel mee om. Het resultaat was erg netjes." },
      { name: "Ferry Z.", text: "Marcel heeft bij ons vakwerk afgeleverd! Een fijn persoon om mee te werken. Flexibel, komt zijn afspraken na, denkt mee, vakkundig en een harde werker. Vrienden en familie die bij ons komen kijken zijn louter positief over het stucwerk." },
      { name: "Willem H.", text: "Zeer goede ervaring gehad met Marcel. Hij heeft duidelijk aangegeven wat voor hem het werk makkelijk maakt en wat we konden verwachten. Bij het eerste bezoek gaf hij gelijk al dingen aan die andere mensen niet zagen of benoemden, waaruit direct zijn ervaring bleek. Resultaat ziet er top uit, een wereld van verschil." },
      { name: "S. van T.", text: "Marcel Janssen heeft onze wanden sausklaar gestuct. Fijne gast, hard gewerkt, superblij met het resultaat, hele mooie gladde wanden. Prima klus, netjes afgeleverd. Marcel Janssen is een vakman die ik zeker kan aanraden." },
    ] as { name: string; text: string; rating?: number }[],
  },

  contact: {
    title: "Neem contact op",
    text: "Bel, mail of stuur een bericht via de offertepagina. Wij nemen binnen één werkdag contact met u op.",
    phone: "06-51859072",
    email: "info@stukadoorsbedrijfmjanssen.nl",
    address: "Welle 44K, 7411 CC Deventer",
    openingHours: ["Maandag t/m vrijdag: 08.00 – 17.00"],
    whatsapp: "",
    cta: { label: "Bel 06-51859072", href: "tel:+31651859072" },
  },

  footer: {
    kvk: "",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/marcel.janssen.58" }],
  },
};

export type Content = typeof content;
