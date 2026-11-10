import type { Metadata } from "next";
import ClosingBand from "@/components/ClosingBand";
import ProjectGallery from "@/components/ProjectGallery";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";
import { projects, type Project } from "@/content";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Buitengevel Schalkhaar (2012), woonkamer Deventer (2019), badkamer Apeldoorn (2021) en ornamenten in een jaren-20-woning in Olst (2021).",
};

const groups: { id: string; title: string; text: string; ids: string[] }[] = [
  {
    id: "schalkhaar",
    title: "Villa, Schalkhaar",
    text: "Augustus 2012. De buitengevels van een villa gestuct met designmortel. Die mortel is waterdicht en vorstbestendig, omdat ze op cement is gemaakt in plaats van op kalk. Op de opdracht staat 35 uur.",
    ids: ["schalkhaar", "schalkhaar-zij", "schalkhaar-werk"],
  },
  {
    id: "deventer",
    title: "Woonkamer, Deventer",
    text: "Mei 2019. Scheuren, granol en sierpleister. De familie wilde de wanden super glad, om ze opnieuw te sauzen. Het groene voorstrijkmiddel is geleverd en door hen zelf aangebracht; de volgende dag is de woonkamer gestuct. Op de opdracht staat 7 uur.",
    ids: ["deventer", "deventer-lijst", "uitvoering"],
  },
  {
    id: "apeldoorn",
    title: "Badkamer, Apeldoorn",
    text: "Februari 2021. Wanden gestuct met beton ciré. Beton ciré kan onder meer op badkamerwand en vloer. Op de opdracht staat 8 uur.",
    ids: ["apeldoorn", "badkamer", "beton-cire"],
  },
  {
    id: "olst",
    title: "Jaren-20-woning, Olst",
    text: "Februari 2021. Klassieke plafonds met scheuren en beschadigde ornamenten. De lijsten en ornamenten zijn gerestaureerd, de plafonds en wanden opnieuw gestuct. Op de opdracht staat 32 uur.",
    ids: ["olst", "olst-rozet", "olst-zaal", "olst-plafond", "lijst-detail", "plafond-af"],
  },
  {
    id: "verder",
    title: "Zonder plaatsnaam",
    text: "Werkfoto’s waarbij geen plaats of maand is genoemd. Het bijschrift blijft bij wat op de foto te zien is.",
    ids: ["sausklaar", "spachtelputz", "gevel-werk"],
  },
];

function pick(ids: string[]): Project[] {
  return ids.map((id) => projects.find((item) => item.id === id)).filter((item): item is Project => Boolean(item));
}

export default function ProjectenPage() {
  return (
    <SiteFrame>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="max-w-3xl text-4xl sm:text-6xl">Vier klussen, en het werk eromheen.</h1>
        <p className="mt-5 max-w-2xl text-voeg">
          Schalkhaar, Deventer, Apeldoorn en Olst staan met plaats en maand op hun eigen pagina’s. De overige foto’s krijgen geen verzonnen adres.
        </p>
      </header>
      <Rei left="SCHALKHAAR" right="OLST" />
      <div className="mx-auto max-w-6xl px-5 pb-8">
        {groups.map((group) => (
          <section key={group.id} id={group.id} data-section={group.id} className="border-b border-rei py-12">
            <div className="grid gap-4 lg:grid-cols-12">
              <h2 className="text-3xl lg:col-span-4">{group.title}</h2>
              <p className="text-voeg lg:col-span-8">{group.text}</p>
            </div>
            <div className="mt-8">
              <ProjectGallery items={pick(group.ids)} />
            </div>
          </section>
        ))}
      </div>
      <ClosingBand title="Ook uw wand of gevel?" text="Een vrijblijvende offerte, of direct bellen. Wij nemen binnen één werkdag contact met u op." />
    </SiteFrame>
  );
}
