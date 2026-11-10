import { faq, pages, type PageCopy } from "@/content";
import Article from "@/components/Article";
import Blocks from "@/components/Blocks";
import Comparison from "@/components/Comparison";
import LayerBars from "@/components/LayerBars";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import RelatedWork from "@/components/RelatedWork";
import Swatches from "@/components/Swatches";

const lijstFotos = ["olst", "olst-rozet", "olst-plafond", "lijst-detail", "plafond-af"];

const notes: Record<string, { left: string; right?: string; title: string; lines: string[] }> = {
  sausklaar: {
    left: "1 DAG / MM",
    title: "Voor u saust",
    lines: [
      "Droogtijd: 1 dag per millimeter, minimaal 15 °C, ventileren.",
      "Licht naschuren, korrel 220 of fijner.",
      "Altijd voorstrijk op vers stucwerk.",
      "Daarna rollen, of airless spuiten.",
    ],
  },
  wanden: {
    left: "GLAD OF STRUCTUUR",
    title: "Plafond",
    lines: [
      "Glad, of met structuur.",
      "Spackspuiten als er weinig oneffenheden zijn.",
      "Schuurplafond: fijne cirkels, alleen bij 1–6 mm.",
      "Ook spachtelputz of betonlook.",
    ],
  },
  buitenmuur: {
    left: "APRIL",
    right: "OKTOBER",
    title: "Buiten",
    lines: [
      "Beste periode: april tot en met oktober.",
      "Spachtelputz, rustiekputz of glad.",
      "Vergunning als het aangezicht verandert.",
      "Designmortel in Schalkhaar: cement, waterdicht, vorstbestendig.",
    ],
  },
  badkamer: {
    left: "ZONDER VOEG",
    title: "In de natte ruimte",
    lines: [
      "Tadelakt en beton ciré.",
      "Waterdicht, hygiënisch, geen naden.",
      "Soms over bestaande tegels of gips.",
      "Dat bekijkt Marcel ter plaatse.",
    ],
  },
  "beton-cire": {
    left: "GEWREVEN BETON",
    title: "Toepassing",
    lines: [
      "Badkamer, keuken, blad, vloer, openhaard, trap.",
      "Cementgebonden en waterdicht.",
      "Coating tegen krassen, ook op een blad genoemd.",
      "Gewerkt wordt met diverse gerenommeerde Italiaanse merken.",
    ],
  },
  airless: {
    left: "200 BAR",
    title: "Hun vergelijking",
    lines: [
      "Airless pomp, 200 bar.",
      "Vooral aantrekkelijk vanaf 100 m².",
      "Daaronder is rollen vaak vergelijkbaar.",
      "Ondergrond: nieuw stuc, gipsplaat, beton, plafond, spachtelputz.",
    ],
  },
  sausen: {
    left: "EERST DROOG",
    title: "Sausen",
    lines: [
      "Alleen op een volledig droge wand.",
      "Rol en stok, of de airless pomp.",
      "De roller laat een lichte structuur.",
      "Spuitwerk is egaal, zonder banen.",
    ],
  },
  spachtelputz: {
    left: "1–4 MM",
    title: "Korrel",
    lines: [
      "Kunststofgebonden, marmerkorrels.",
      "Grof of extra fijn, binnen en buiten.",
      "Ook rustiekputz, barokpleister en granol.",
      "Over glasvezel alleen als de conditie het toelaat.",
    ],
  },
  lijsten: {
    left: "EERST VLAK",
    title: "Lijstwerk",
    lines: [
      "Ondergrond eerst vlak, anders breekt de lijst.",
      "Kooflijst, perklijst, plafondplint, rozet.",
      "Klassiek, modern, ook nieuwbouw.",
      "Restauratie: jaren-20-woning in Olst, februari 2021.",
    ],
  },
};

const pageFaq: Record<string, number[]> = {
  sausklaar: [0],
  wanden: [0],
  buitenmuur: [1, 4],
  badkamer: [2],
  "beton-cire": [2],
  airless: [3],
  sausen: [3],
};

const work: Record<string, string[]> = {
  sausklaar: ["deventer", "uitvoering", "sausklaar"],
  wanden: ["deventer-lijst", "plafond-af", "uitvoering"],
  buitenmuur: ["schalkhaar", "schalkhaar-werk", "spachtelputz"],
  badkamer: ["apeldoorn", "badkamer"],
  "beton-cire": ["beton-cire", "apeldoorn"],
  airless: ["sausklaar", "uitvoering"],
  sausen: ["sausklaar", "deventer"],
  spachtelputz: ["spachtelputz", "gevel-werk"],
  lijsten: lijstFotos,
};

export default function ServicePage({ id }: { id: keyof typeof pages }) {
  const page: PageCopy = pages[id];
  const note = notes[id];
  return (
    <Article title={page.title} lead={page.lead} image={page.image} related={page.related}>
      {note ? <Rei left={note.left} right={note.right} className="mb-8" /> : null}
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Blocks sections={page.sections} />
          {id === "sausklaar" || id === "wanden" ? <LayerBars /> : null}
          {id === "sausklaar" ? (
            <div className="mt-12 border border-rei">
              <Comparison />
            </div>
          ) : null}
          {id === "spachtelputz" ? <Swatches /> : null}
          {id === "airless" ? (
            <figure className="mt-10 inline-block border border-rei bg-wit p-3">
              <Photo src="/img/producten/latex-spuit-pistool.jpg" width={155} height={200} alt="Airless spuitpistool voor latex." />
              <figcaption className="mt-2 max-w-[155px] text-base text-voeg">Spuitpistool, klein afgebeeld.</figcaption>
            </figure>
          ) : null}
        </div>
        {note ? (
          <aside className="border border-rei bg-stucvlak p-5 lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-2xl">{note.title}</h2>
            <ul className="mt-4 border-t border-rei">
              {note.lines.map((line) => (
                <li key={line} className="border-b border-rei py-3">
                  {line}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
      <RelatedWork ids={work[id] ?? []} title={id === "lijsten" ? "Olst en lijstwerk" : "Op de foto"} />
      {(pageFaq[id] ?? []).length > 0 ? (
        <div className="mt-12 max-w-3xl">
          <h2 className="text-3xl">Veelgevraagd</h2>
          <div className="mt-4 border-t border-rei">
            {(pageFaq[id] ?? []).map((index) => {
              const item = faq[index];
              if (!item) return null;
              return (
                <details key={item.q} className="group border-b border-rei">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span aria-hidden className="font-mono text-sm text-voeg group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-5">{item.a}</p>
                </details>
              );
            })}
          </div>
        </div>
      ) : null}
    </Article>
  );
}
