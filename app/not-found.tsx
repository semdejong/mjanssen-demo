import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl">Pagina niet gevonden</h1>
        <p className="mt-4">Deze pagina bestaat niet. Ga terug naar de homepage of vraag een vrijblijvende offerte.</p>
        <p className="mt-6 flex flex-wrap gap-4">
          <Link href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Homepage
          </Link>
          <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Offerte
          </Link>
        </p>
      </article>
    </SiteFrame>
  );
}
