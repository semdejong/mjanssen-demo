import { pages, projects, type PageCopy } from "@/content";
import Article from "@/components/Article";
import Blocks from "@/components/Blocks";
import Photo from "@/components/Photo";
import Swatches from "@/components/Swatches";

const lijstFotos = projects.filter((item) =>
  ["olst", "olst-rozet", "olst-plafond", "lijst-detail", "plafond-af"].includes(item.id),
);

export default function ServicePage({ id }: { id: keyof typeof pages }) {
  const page: PageCopy = pages[id];
  return (
    <Article title={page.title} lead={page.lead} image={page.image} related={page.related}>
      <Blocks sections={page.sections} />
      {id === "spachtelputz" ? <Swatches /> : null}
      {id === "airless" ? (
        <figure className="mt-10 inline-block border border-rei bg-wit p-3">
          <Photo
            src="/img/producten/latex-spuit-pistool.jpg"
            width={155}
            height={200}
            alt="Airless spuitpistool voor latex."
          />
          <figcaption className="mt-2 max-w-[155px] text-base text-voeg">Spuitpistool</figcaption>
        </figure>
      ) : null}
      {id === "lijsten" ? (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {lijstFotos.map((item) => (
            <li key={item.id} className="border border-rei bg-stucvlak">
              <Photo src={item.src} width={item.width} height={item.height} alt={item.alt} />
              <p className="border-t border-rei px-4 py-3 text-base text-voeg">{item.caption}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </Article>
  );
}
