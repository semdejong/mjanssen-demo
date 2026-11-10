import type { Metadata } from "next";
import Link from "next/link";
import ClosingBand from "@/components/ClosingBand";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";
import { about, company } from "@/content";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Sausklaar en behangklaar stucen, wanden en plafonds, buitenmuur, badkamer, beton ciré, airless, sausen, spachtelputz, lijsten en ornamenten.",
};

const rows = [
  { href: "/sausklaar", title: "Sausklaar stucen", text: "Spiegelglad, veelal Klasse A, klaar om te sauzen of te spuiten. Onder elke lichtinval perfect glad." },
  { href: "/sausklaar#behangklaar", title: "Behangklaar en behangen", text: "Ondergrond voor behang, ook glasvezelbehang. Kleine oneffenheden mogen, het behang verbergt ze." },
  { href: "/wanden", title: "Wanden en plafonds", text: "Raapwerk van 7 mm tot 5 cm, of pleister van 1 tot 6 mm. Glad, spack, schuurplafond of betonlook." },
  { href: "/buitenmuur", title: "Buitenmuur", text: "Gevel opknappen tussen april en oktober. Spachtelputz, rustiekputz of glad. Designmortel waar het buiten moet." },
  { href: "/badkamer", title: "Badkamer", text: "Tadelakt en beton ciré. Waterdicht, zonder voegen, soms over bestaande tegels of gips." },
  { href: "/beton-cire", title: "Beton ciré", text: "Gewreven beton voor badkamer, keuken, blad, vloer, openhaard en trap. Naadloos en hygiënisch." },
  { href: "/airless", title: "Airless latex spuiten", text: "Pomp op 200 bar. Egaal en snel, vooral aantrekkelijk vanaf 100 m². Daaronder is rollen vaak vergelijkbaar." },
  { href: "/sausen", title: "Sausen", text: "Rol en stok, of gespoten. Alleen als de wand geheel droog is." },
  { href: "/spachtelputz", title: "Spachtelputz", text: "Stootvaste korrelpleister, marmerkorrels, binnen en buiten, grof of extra fijn, 1 tot 4 mm." },
  { href: "/lijsten", title: "Lijsten en ornamenten", text: "Kooflijsten, perklijsten, rozetten. Eerst de ondergrond vlak. Ook restauratie van beschadigde plafonds." },
];

export default function DienstenPage() {
  return (
    <SiteFrame>
      <header data-section="pagina" className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="max-w-3xl text-4xl sm:text-6xl">Alles tussen ruwe muur en sausklare wand.</h1>
          <p className="mt-5 max-w-xl text-voeg">
            {company.styledName} werkt aan huis en bedrijfspand: stukadoren, behangen en sauzen, binnen en buiten, in {company.region}.
          </p>
        </div>
        <figure className="border border-rei bg-stucvlak lg:col-span-5">
          <Photo {...about.image} priority />
        </figure>
      </header>
      <Rei left="BINNEN" right="BUITEN" />
      <ul className="mx-auto max-w-6xl px-5">
        {rows.map((row) => (
          <li key={row.href} className="border-b border-rei">
            <Link href={row.href} className="grid min-h-20 items-center gap-2 py-6 md:grid-cols-12">
              <span className="font-display text-2xl md:col-span-4 md:text-3xl">{row.title}</span>
              <span className="text-voeg md:col-span-7">{row.text}</span>
              <span className="hidden font-mono text-sm tracking-widest md:col-span-1 md:block md:text-right">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <section data-section="maten" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-12">
        <h2 className="text-4xl lg:col-span-4">Maten die zij zelf noemen</h2>
        <ul className="border-t border-rei lg:col-span-8">
          {[
            ["Klasse A", "Sausklaar, veelal de hoogste afwerkingsklasse.", "/sausklaar"],
            ["1 dag / mm", "Droogtijd, minimaal 15 °C, daarna voorstrijk.", "/sausklaar"],
            ["April–oktober", "De beste periode voor de buitenmuur.", "/buitenmuur"],
            ["200 bar", "Airless latex, vooral vanaf 100 m².", "/airless"],
            ["1–4 mm", "Spachtelputz, grof of extra fijn.", "/spachtelputz"],
          ].map(([title, text, href]) => (
            <li key={title} className="border-b border-rei">
              <Link href={href} className="grid gap-1 py-4 sm:grid-cols-12 sm:items-baseline">
                <span className="font-mono text-sm tracking-[0.12em] sm:col-span-4">{title}</span>
                <span className="text-voeg sm:col-span-8">{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ClosingBand />
    </SiteFrame>
  );
}
