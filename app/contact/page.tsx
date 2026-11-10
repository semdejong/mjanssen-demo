import type { Metadata } from "next";
import Link from "next/link";
import { company, contact } from "@/content";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Contact",
  description: "Stukadoorsbedrijf M. Janssen, Welle 44K, 7411 CC Deventer. Bel 06-51859072 of mail info@stukadoorsbedrijfmjanssen.nl.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <article data-section="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-4xl sm:text-5xl">Contact</h1>
          <p className="mt-5">{contact.text}</p>
          <p className="mt-6 flex flex-wrap gap-3">
            <a href={contact.phoneTel} data-cta="bellen" className="inline-flex min-h-11 items-center bg-inkt px-5 text-base text-wit">
              Bel {contact.phone}
            </a>
            <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center border border-inkt px-5 text-base">
              Vrijblijvende offerte
            </Link>
          </p>
        </div>
        <address className="border border-rei bg-stucvlak p-6 not-italic lg:col-span-7">
          <p className="font-display text-2xl">{company.name}</p>
          <p className="mt-1 text-voeg">{company.owner}</p>
          <p className="mt-4">
            {contact.street}
            <br />
            {contact.postal}
          </p>
          <p className="mt-4">
            <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
              {contact.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} data-cta="mail" className="underline underline-offset-4">
              {contact.email}
            </a>
          </p>
          <p className="mt-4">{contact.hours}</p>
          <p className="mt-4">Werkgebied: {company.region}.</p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Welle 44K op de kaart
            </a>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Facebook
            </a>
          </p>
        </address>
      </article>
    </SiteFrame>
  );
}
