import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import SiteFrame from "@/components/SiteFrame";
import { projects } from "@/content";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Buitengevel Schalkhaar (2012), woonkamer Deventer (2019), badkamer Apeldoorn (2021) en ornamenten in een jaren-20-woning in Olst (2021).",
};

export default function ProjectenPage() {
  return (
    <SiteFrame>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-4xl sm:text-5xl">Projecten</h1>
        <p className="mt-5 max-w-2xl text-voeg">
          Vier benoemde klussen, plus werkfoto’s zonder plaatsnaam. Bij de foto staat alleen wat erover bekend is.
        </p>
      </header>
      <div className="mx-auto max-w-6xl px-5 pb-16" data-section="projecten">
        <ProjectGallery items={projects} />
      </div>
    </SiteFrame>
  );
}
