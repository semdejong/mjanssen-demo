import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import { company, contact } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy van dit concept voor Stukadoorsbedrijf M. Janssen. Geen cookies. Het offerteformulier opent alleen uw mailprogramma.",
};

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <article data-section="privacy" className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-4xl sm:text-5xl">Privacy</h1>
        <div className="mt-6 space-y-4">
          <p>
            Deze website is een concept van Sleads voor {company.name}, {company.owner}, {contact.address}. Mail:{" "}
            <a href={`mailto:${contact.email}`} data-cta="mail" className="underline underline-offset-4">
              {contact.email}
            </a>
            .
          </p>
          <p>
            Het offerteformulier verstuurt niets naar een server. Na het klikken opent uw eigen mailprogramma een bericht aan {contact.email}. Pas als u dat bericht zelf verzendt, komt het aan bij het bedrijf.
          </p>
          <p>
            De site plaatst geen cookies. Sleads meet paginabezoek cookieloos, alleen om dit concept te kunnen volgen. Er worden geen accountgegevens gevraagd.
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
