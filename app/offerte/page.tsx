import type { Metadata } from "next";
import OfferteForm from "@/components/OfferteForm";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/content";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description: "Vraag een vrijblijvende offerte aan bij Stukadoorsbedrijf M. Janssen. Uw mailprogramma opent het bericht; er wordt niets automatisch verzonden.",
};

export default function OffertePage() {
  return (
    <SiteFrame>
      <article data-section="offerte" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h1 className="text-4xl sm:text-5xl">Vrijblijvende offerte</h1>
          <p className="mt-5">
            Dit is een concept; uw mailprogramma opent met het bericht. Er wordt niets vanaf deze pagina verzonden.
          </p>
          <p className="mt-4">
            Liever bellen?{" "}
            <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
              {contact.phone}
            </a>
            , {contact.hours.toLowerCase()}.
          </p>
          <p className="mt-4 text-voeg">{contact.text}</p>
        </div>
        <div className="lg:col-span-8">
          <OfferteForm />
        </div>
      </article>
    </SiteFrame>
  );
}
