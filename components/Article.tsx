import Link from "next/link";
import type { ReactNode } from "react";
import type { Img } from "@/content";
import ClosingBand from "@/components/ClosingBand";
import CtaPair from "@/components/CtaPair";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";

type ArticleProps = {
  title: string;
  lead: string;
  image?: Img;
  children: ReactNode;
  related?: { href: string; label: string }[];
};

export default function Article({ title, lead, image, children, related = [] }: ArticleProps) {
  return (
    <SiteFrame>
      <article>
        <header data-section="pagina" className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="max-w-3xl text-4xl text-inkt sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-xl text-voeg">{lead}</p>
            <CtaPair className="mt-8" />
          </div>
          {image ? (
            <figure className="border border-rei bg-stucvlak lg:col-span-5">
              <Photo {...image} />
            </figure>
          ) : null}
        </header>
        <Rei />
        <div className="mx-auto max-w-6xl px-5 py-12">{children}</div>
        {related.length > 0 ? (
          <aside className="mx-auto max-w-6xl px-5 pb-16">
            <h2 className="text-2xl">Verder kijken</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center border border-rei bg-stucvlak px-4 text-base">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        <ClosingBand />
      </article>
    </SiteFrame>
  );
}
