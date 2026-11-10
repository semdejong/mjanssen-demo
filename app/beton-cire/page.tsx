import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { pages } from "@/content";

const page = pages["beton-cire"];
export const metadata: Metadata = { title: page.metaTitle, description: page.metaDescription };

export default function BetonCirePage() {
  return <ServicePage id="beton-cire" />;
}
