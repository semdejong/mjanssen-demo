import type { Metadata } from "next";
import OfferteForm from "@/components/OfferteForm";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/content";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description: "Vraag een vrijblijvende offerte aan bij Stukadoorsbedrijf M. Janssen. Uw mailprogramma opent het bericht; er wordt niets automatisch verzonden.",
};

const steps = [
  { title: "U vult het formulier in", text: "Naam, telefoon en e-mail zijn nodig. Adres, diensten en een toelichting helpen om de klus te begrijpen." },
  { title: "Uw mailprogramma opent", text: "Dit is een concept. Er wordt niets vanaf deze pagina verzonden. U ziet het bericht zelf staan." },
  { title: "U drukt zelf op verzenden", text: "Pas dan komt het aan bij info@stukadoorsbedrijfmjanssen.nl. Liever meteen iemand aan de lijn? Bel." },
];

export default function OffertePage() {
  return (
    <SiteFrame>
      <article data-section="offerte" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="text-4xl sm:text-6xl">Gratis en vrijblijvend.</h1>
            <p className="mt-5">
              Dit is een concept; uw mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd.
            </p>
            <p className="mt-4">
              Liever bellen?{" "}
              <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
                {contact.phone}
              </a>
              , {contact.hours.toLowerCase()}.
            </p>
            <ol className="mt-8 border-l border-rei">
              {steps.map((step) => (
                <li key={step.title} className="border-b border-rei py-4 pl-4">
                  <h2 className="text-2xl">{step.title}</h2>
                  <p className="mt-2 text-voeg">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Rei left="TOELICHTING" />
              <p className="mt-4 text-voeg">
                Handig om te noemen: sausklaar of behangklaar, binnen of buiten, en of het om een wand, plafond, badkamer of gevel gaat. Weet u de afwerking nog niet, dan kan Marcel vrijblijvend langs komen.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <OfferteForm />
          </div>
        </div>
      </article>
    </SiteFrame>
  );
}
