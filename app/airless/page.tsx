import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { pages } from "@/content";

const page = pages.airless;
export const metadata: Metadata = { title: page.metaTitle, description: page.metaDescription };

export default function AirlessPage() {
  return <ServicePage id="airless" />;
}
