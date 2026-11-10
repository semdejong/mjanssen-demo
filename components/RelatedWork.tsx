import Link from "next/link";
import { projects, type Project } from "@/content";
import Photo from "@/components/Photo";

export default function RelatedWork({ ids, title = "Op de foto" }: { ids: string[]; title?: string }) {
  const items = ids.map((id) => projects.find((item) => item.id === id)).filter((item): item is Project => Boolean(item));
  if (items.length === 0) return null;
  return (
    <div data-section="werkfoto" className="mt-12">
      <h2 className="text-3xl">{title}</h2>
      <ul className="mt-5 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="min-w-0 max-w-full border border-rei bg-stucvlak">
            <Link href={`/projecten#${item.id}`}>
              <Photo src={item.src} width={item.width} height={item.height} alt={item.alt} frame="4/3" />
              <div className="border-t border-rei px-4 py-3">
                <p className="font-display text-lg">{item.title}</p>
                <p className="mt-1 text-base text-voeg">{item.caption}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
