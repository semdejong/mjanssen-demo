import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { pages } from "@/content";

const page = pages.buitenmuur;
export const metadata: Metadata = { title: page.metaTitle, description: page.metaDescription };

export default function BuitenmuurPage() {
  return <ServicePage id="buitenmuur" />;
}
