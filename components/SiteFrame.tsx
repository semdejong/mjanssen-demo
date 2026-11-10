import type { ReactNode } from "react";
import MobileBar from "@/components/MobileBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#inhoud" className="skip">
        Naar de inhoud
      </a>
      <SiteHeader />
      <main id="inhoud" className="min-w-0 w-full flex-1">
        {children}
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  );
}
