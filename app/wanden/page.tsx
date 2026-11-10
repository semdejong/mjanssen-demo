import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { pages } from "@/content";

const page = pages.wanden;
export const metadata: Metadata = { title: page.metaTitle, description: page.metaDescription };

export default function WandenPage() {
  return <ServicePage id="wanden" />;
}
