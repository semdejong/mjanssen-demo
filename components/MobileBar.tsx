import Link from "next/link";
import { contact } from "@/content";
import Rei from "@/components/Rei";

export default function MobileBar() {
  return (
    <div data-section="mobiel-bellen" className="band-donker fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <Rei />
      <div className="grid grid-cols-2 bg-vanblauw text-wit">
        <a href={contact.phoneTel} data-cta="bellen" className="inline-flex min-h-12 items-center justify-center px-3 text-base">
          Bel {contact.phone}
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-12 items-center justify-center border-l border-rei px-3 text-base"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
