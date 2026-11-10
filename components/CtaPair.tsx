import Link from "next/link";
import { contact } from "@/content";

export default function CtaPair({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const primary = tone === "dark" ? "bg-wit text-inkt" : "bg-inkt text-wit";
  const secondary = tone === "dark" ? "border-wit text-wit" : "border-inkt text-inkt";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={contact.phoneTel} data-cta="bellen" className={`inline-flex min-h-11 items-center px-5 text-base ${primary}`}>
        Bel {contact.phone}
      </a>
      <Link href="/offerte" data-cta="offerte" className={`inline-flex min-h-11 items-center border px-5 text-base ${secondary}`}>
        Vrijblijvende offerte
      </Link>
    </div>
  );
}
