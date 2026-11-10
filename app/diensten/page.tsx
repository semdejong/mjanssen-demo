import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Rei from "@/components/Rei";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Sausklaar en behangklaar stucen, wanden en plafonds, buitenmuur, badkamer, beton ciré, airless, sausen, spachtelputz, lijsten en ornamenten.",
};

const rows = [
  { href: "/sausklaar", title: "Sausklaar stucen", text: "Spiegelglad, veelal Klasse A, klaar om te sauzen of te spuiten." },
  { href: "/sausklaar#behangklaar", title: "Behangklaar en behangen", text: "Ondergrond voor behang, ook glasvezelbehang. Kleine oneffenheden mogen." },
  { href: "/wanden", title: "Wanden en plafonds", text: "Raapwerk of pleister, glad of met structuur, spackspuiten en schuurplafond." },
  { href: "/buitenmuur", title: "Buitenmuur", text: "Gevel opknappen, april tot en met oktober, spachtelputz, rustiekputz of glad." },
  { href: "/badkamer", title: "Badkamer", text: "Tadelakt en beton ciré, waterdicht en zonder voegen, soms over bestaande tegels." },
  { href: "/beton-cire", title: "Beton ciré", text: "Gewreven beton voor badkamer, keuken, blad, vloer, openhaard en trap." },
  { href: "/airless", title: "Airless latex spuiten", text: "Airless pomp op 200 bar. Vooral aantrekkelijk vanaf 100 m²." },
  { href: "/sausen", title: "Sausen", text: "Traditioneel met rol en stok, of gespoten. Alleen op een droge wand." },
  { href: "/spachtelputz", title: "Spachtelputz", text: "Korrelpleister voor binnen en buiten, grof of extra fijn, 1 tot 4 mm." },
  { href: "/lijsten", title: "Lijsten en ornamenten", text: "Kooflijsten, perklijsten, rozetten en restauratie van beschadigde plafonds." },
];

export default function DienstenPage() {
  return (
    <SiteFrame>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="max-w-3xl text-4xl sm:text-5xl">Diensten</h1>
        <p className="mt-5 max-w-2xl text-voeg">
          Stukadoorsbedrijf M. Janssen werkt aan huis en bedrijfspand: sausklaar en behangklaar stucwerk, afwerken met latex, behangen en sauzen.
        </p>
      </header>
      <Rei />
      <ul className="mx-auto max-w-6xl border-b border-rei px-5">
        {rows.map((row) => (
          <li key={row.href} className="border-t border-rei">
            <Link href={row.href} className="grid min-h-16 gap-2 py-5 md:grid-cols-12">
              <span className="font-display text-2xl md:col-span-4">{row.title}</span>
              <span className="text-voeg md:col-span-8">{row.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SiteFrame>
  );
}
