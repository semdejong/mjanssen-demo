import Link from "next/link";
import { contact } from "@/content";

export default function CtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={contact.phoneTel}
        data-cta="bellen"
        className="inline-flex min-h-11 items-center bg-inkt px-5 text-base text-wit"
      >
        Bel {contact.phone}
      </a>
      <Link
        href="/offerte"
        data-cta="offerte"
        className="inline-flex min-h-11 items-center border border-inkt px-5 text-base text-inkt"
      >
        Vrijblijvende offerte
      </Link>
    </div>
  );
}
