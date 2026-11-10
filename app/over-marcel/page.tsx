import type { Metadata } from "next";
import Link from "next/link";
import { about, company, experience } from "@/content";
import CtaPair from "@/components/CtaPair";
import Photo from "@/components/Photo";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Over Marcel",
  description:
    "Marcel Janssen, stukadoor en schilder in Deventer. Ruim 32 jaar werkzaam in nieuwbouw en renovatie, voor huis en bedrijfspand.",
};

export default function OverMarcelPage() {
  return (
    <SiteFrame>
      <article data-section="over" className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 lg:grid-cols-12">
        <figure className="border border-rei bg-stucvlak lg:col-span-5">
          <Photo {...about.image} priority />
        </figure>
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl">Over Marcel</h1>
          <p className="mt-5">{experience}</p>
          <p className="mt-4">
            Met deze ervaring en passie voor het vak ben ik bereid u van advies te voorzien voor iedere ruimte. Ik ga graag samen met u op zoek naar de mogelijkheden in uw huis of bedrijfspand.
          </p>
          <p className="mt-4">
            Stukadoorsbedrijf M. Janssen is een betaalbaar en betrouwbaar bedrijf en werkt uitsluitend met de beste materialen. U heeft één aanspreekpunt.
          </p>
          <p className="mt-4">
            Ik ben stukadoor én schilder. Sausen doe ik met rol en stok, of ik spuit latex airless. Het werkgebied is {company.regionHome}.
          </p>
          <CtaPair className="mt-8" />
          <p className="mt-6">
            <Link href="/projecten" className="underline underline-offset-4">
              Bekijk de projecten
            </Link>
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
