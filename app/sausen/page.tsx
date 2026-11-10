import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { pages } from "@/content";

const page = pages.sausen;
export const metadata: Metadata = { title: page.metaTitle, description: page.metaDescription };

export default function SausenPage() {
  return <ServicePage id="sausen" />;
}
