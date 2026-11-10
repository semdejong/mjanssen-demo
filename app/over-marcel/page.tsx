import type { Metadata } from "next";
import Link from "next/link";
import ClosingBand from "@/components/ClosingBand";
import CtaPair from "@/components/CtaPair";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";
import { about, company, reviews, waarom } from "@/content";

export const metadata: Metadata = {
  title: "Over Marcel",
  description:
    "Marcel Janssen, stukadoor en schilder in Deventer. Ruim 32 jaar werkzaam in nieuwbouw en renovatie, voor huis en bedrijfspand.",
};

export default function OverMarcelPage() {
  const ferry = reviews.items[1];
  return (
    <SiteFrame>
      <article>
        <header data-section="over" className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12">
          <figure className="border border-rei bg-stucvlak lg:col-span-5">
            <Photo {...about.image} priority />
          </figure>
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl">Over Marcel</h1>
            {about.paragraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph} className="mt-4 first:mt-5">
                {paragraph}
              </p>
            ))}
            <CtaPair className="mt-8" />
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5">
          <Rei left="STUCADOOR" right="SCHILDER" />
          <section data-section="vak" className="grid gap-px bg-rei sm:grid-cols-2">
          <div className="bg-spekglad p-6 sm:p-8">
            <h2 className="text-3xl">Stukadoor</h2>
            <p className="mt-4">
              Sausklaar en behangklaar, wanden en plafonds, buitenmuren, badkamer, beton ciré, spachtelputz, lijsten en ornamenten. Nieuwbouw en renovatie.
            </p>
            <Link href="/diensten" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">
              Alle diensten
            </Link>
          </div>
          <div className="bg-stucvlak p-6 sm:p-8">
            <h2 className="text-3xl">Schilder</h2>
            <p className="mt-4">{about.paragraphs[3]}</p>
            <p className="mt-4 flex flex-wrap gap-4">
              <Link href="/sausen" className="inline-flex min-h-11 items-center underline underline-offset-4">
                Sausen
              </Link>
              <Link href="/airless" className="inline-flex min-h-11 items-center underline underline-offset-4">
                Airless
              </Link>
            </p>
          </div>
          </section>
        </div>

        <section data-section="werkgebied" className="bg-stucvlak">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-4xl">Waar het werk ligt</h2>
            <p className="mt-4 max-w-2xl text-voeg">
              {company.region}, of waar dan ook in Nederland. Huis of bedrijfspand.
            </p>
            <ul className="mt-8 grid grid-cols-2 border-t border-rei sm:grid-cols-3 lg:grid-cols-6">
              {company.cities.map((city) => (
                <li key={city} className="border-b border-rei py-4 font-display text-xl lg:border-b-0 lg:border-r lg:px-4 lg:first:pl-0 lg:last:border-r-0">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-section="onderweg" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl">De stukadoor van Deventer en omstreken</h2>
            <p className="mt-4 text-voeg">
              Door de jarenlange ervaring heb ik veel kennis opgedaan. Die gebruik ik graag om u advies te geven. Kwaliteit, betrouwbaarheid, duidelijkheid, flexibiliteit en een goede service staan hoog in het vaandel.
            </p>
          </div>
          <figure className="border border-rei bg-stucvlak lg:col-span-7">
            <Photo
              src="/img/home/de-stukadoor-van-deventer-en-omstreken.jpg"
              width={1600}
              height={900}
              alt="Werkbus van Stukadoorsbedrijf M. Janssen in het landschap. De stukadoor van Deventer en omstreken."
            />
          </figure>
        </section>

        <section data-section="waarom" className="mx-auto max-w-6xl px-5 pb-14">
          <h2 className="text-4xl">Waar het bedrijf voor staat</h2>
          <ul className="mt-6 border-b border-rei">
            {waarom.map((item) => (
              <li key={item.title} className="grid gap-2 border-t border-rei py-5 md:grid-cols-12">
                <h3 className="text-2xl md:col-span-4">{item.title}</h3>
                <p className="text-voeg md:col-span-8">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section data-section="review" className="mx-auto max-w-6xl px-5 pb-16">
          <blockquote className="border border-rei bg-stucvlak p-6 sm:p-8">
            <p className="max-w-3xl text-xl leading-relaxed">{ferry.text}</p>
            <footer className="mt-6 border-t border-rei pt-4 font-display text-lg">{ferry.name}</footer>
          </blockquote>
          <p className="mt-6">
            <Link href="/projecten" className="underline underline-offset-4">
              Bekijk de projecten
            </Link>
          </p>
        </section>
        <ClosingBand />
      </article>
    </SiteFrame>
  );
}
