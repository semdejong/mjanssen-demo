import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Rei from "@/components/Rei";
import { company, contact } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy van dit concept voor Stukadoorsbedrijf M. Janssen. Het offerteformulier opent alleen uw mailprogramma.",
};

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <article data-section="privacy" className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-4xl sm:text-5xl">Privacy</h1>
        <p className="mt-5 text-voeg">Kort, en alleen wat hier echt gebeurt.</p>

        <h2 className="mt-10 text-3xl">Wie</h2>
        <p className="mt-4">
          Deze website is een concept van Sleads voor {company.name}, {company.owner}, {contact.address}.
        </p>
        <p className="mt-4">
          Mail:{" "}
          <a href={`mailto:${contact.email}`} data-cta="mail" className="underline underline-offset-4">
            {contact.email}
          </a>
        </p>
        <p className="mt-2">
          Telefoon:{" "}
          <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
            {contact.phone}
          </a>
        </p>

        <Rei className="my-10" />
        <h2 className="text-3xl">Het formulier</h2>
        <p className="mt-4">
          Het offerteformulier verstuurt niets naar een server. Na het klikken opent uw eigen mailprogramma een bericht aan {contact.email}. Pas als u dat bericht zelf verzendt, komt het aan. Tot die klik blijft de tekst op uw apparaat.
        </p>

        <Rei className="my-10" />
        <h2 className="text-3xl">Bezoek</h2>
        <p className="mt-4">
          Sleads meet het paginabezoek van dit concept, zodat het concept gevolgd kan worden. Er wordt geen account gevraagd.
        </p>
        <p className="mt-8">
          <Link href="/contact" className="underline underline-offset-4">
            Naar contact
          </Link>
        </p>
      </article>
    </SiteFrame>
  );
}
