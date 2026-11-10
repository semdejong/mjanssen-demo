import type { Metadata } from "next";
import Link from "next/link";
import ClosingBand from "@/components/ClosingBand";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";
import { about, company, contact } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Stukadoorsbedrijf M. Janssen, Welle 44K, 7411 CC Deventer. Bel 06-51859072 of mail info@stukadoorsbedrijfmjanssen.nl.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <article>
        <header data-section="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-6xl">Bellen mag meteen.</h1>
            <p className="mt-5 max-w-xl">{contact.text}</p>
            <p className="mt-8">
              <a href={contact.phoneTel} data-cta="bellen" className="font-display text-4xl underline decoration-rei underline-offset-8 sm:text-5xl">
                {contact.phone}
              </a>
            </p>
            <p className="mt-4 text-voeg">{contact.hours}</p>
          </div>
          <address className="border border-rei bg-stucvlak p-6 not-italic lg:col-span-6">
            <p className="font-display text-2xl">{company.name}</p>
            <p className="mt-1 text-voeg">{company.owner}</p>
            <p className="mt-5 text-xl">
              {contact.street}
              <br />
              {contact.postal}
            </p>
            <p className="mt-5">
              <a href={`mailto:${contact.email}`} data-cta="mail" className="underline underline-offset-4">
                {contact.email}
              </a>
            </p>
            <p className="mt-5">Werkgebied: {company.region}. En waar dan ook in Nederland.</p>
            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Welle 44K op de kaart
              </a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Facebook
              </a>
              <Link href="/offerte" data-cta="offerte" className="underline underline-offset-4">
                Vrijblijvende offerte
              </Link>
            </p>
          </address>
        </header>

        <Rei />

        <section data-section="bereik" className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-3">
          {[
            ["Bellen", "Voor een korte vraag of om een afspraak te maken. Maandag tot en met vrijdag, 08.00–17.00.", contact.phoneTel, contact.phone],
            ["Mailen", "Het bericht opent in uw eigen mailprogramma. Er wordt niets automatisch verstuurd.", `mailto:${contact.email}`, contact.email],
            ["Langskomen", "Voor een buitenmuur, of om te zien of stucen over tegels kan, kom ik vrijblijvend langs.", "/offerte", "Vrijblijvende offerte"],
          ].map(([title, text, href, label]) => (
            <div key={title} className="border border-rei bg-stucvlak p-5">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-3 text-voeg">{text}</p>
              <a href={href} data-cta={href.startsWith("tel:") ? "bellen" : href.startsWith("mailto:") ? "mail" : "offerte"} className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">
                {label}
              </a>
            </div>
          ))}
        </section>

        <section data-section="portret" className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 lg:grid-cols-12">
          <figure className="border border-rei bg-stucvlak lg:col-span-5">
            <Photo {...about.image} />
          </figure>
          <div className="lg:col-span-7">
            <h2 className="text-4xl">U spreekt met Marcel</h2>
            <p className="mt-4">
              Eén aanspreekpunt, van het eerste advies tot de oplevering. Stukadoor en schilder, in nieuwbouw en renovatie.
            </p>
            <p className="mt-4 text-voeg">Wij nemen binnen één werkdag contact met u op.</p>
          </div>
        </section>
        <ClosingBand />
      </article>
    </SiteFrame>
  );
}
