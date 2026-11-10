import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import { contact, dienstNav } from "@/content";

export default function NotFound() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl sm:text-5xl">Deze pagina is er niet.</h1>
        <p className="mt-4">De pagina bestaat niet. Hieronder de pagina’s die er wel zijn, of bel direct.</p>
        <p className="mt-6">
          <a href={contact.phoneTel} data-cta="bellen" className="font-display text-3xl underline decoration-rei underline-offset-8">
            {contact.phone}
          </a>
        </p>
        <ul className="mt-8 border-t border-rei">
          <li className="border-b border-rei">
            <Link href="/" className="flex min-h-11 items-center">
              Homepage
            </Link>
          </li>
          <li className="border-b border-rei">
            <Link href="/diensten" className="flex min-h-11 items-center">
              Diensten
            </Link>
          </li>
          {dienstNav.map((item) => (
            <li key={item.href} className="border-b border-rei">
              <Link href={item.href} className="flex min-h-11 items-center">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="border-b border-rei">
            <Link href="/projecten" className="flex min-h-11 items-center">
              Projecten
            </Link>
          </li>
          <li className="border-b border-rei">
            <Link href="/offerte" data-cta="offerte" className="flex min-h-11 items-center">
              Offerte
            </Link>
          </li>
        </ul>
      </article>
    </SiteFrame>
  );
}
