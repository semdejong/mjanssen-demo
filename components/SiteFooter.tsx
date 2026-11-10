import Link from "next/link";
import { brands, company, contact, dienstNav, mainNav } from "@/content";

export default function SiteFooter() {
  return (
    <footer data-section="footer" className="mt-auto">
      <div className="border-t border-rei bg-stucvlak">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <p className="font-display text-lg text-inkt">Wij werken met</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
            {brands.map((brand) => (
              <li key={brand.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="h-8 w-auto max-w-[8.5rem]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="band-donker bg-vanblauw text-wit">
        <ReiRule />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl">{company.name}</p>
            <p className="mt-3 text-base text-spekglad">{company.tagline}</p>
          </div>
          <div>
            <p className="font-display text-lg">Pagina’s</p>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link href="/diensten" className="underline-offset-2 hover:underline">
                  Diensten
                </Link>
              </li>
              {dienstNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline-offset-2 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sausen" className="underline-offset-2 hover:underline">
                  Sausen
                </Link>
              </li>
              <li>
                <Link href="/beton-cire" className="underline-offset-2 hover:underline">
                  Beton ciré
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-lg">Bezoek</p>
            <ul className="mt-3 space-y-2 text-base">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline-offset-2 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/offerte" data-cta="offerte" className="underline-offset-2 hover:underline">
                  Offerte
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="underline-offset-2 hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-lg">Contact</p>
            <address className="mt-3 space-y-2 text-base not-italic">
              <p>
                {contact.street}
                <br />
                {contact.postal}
              </p>
              <p>
                <a href={contact.phoneTel} data-cta="bellen" className="underline-offset-2 hover:underline">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} data-cta="mail" className="underline-offset-2 hover:underline">
                  {contact.email}
                </a>
              </p>
              <p>{contact.hours}</p>
              <p>
                <a href={contact.facebook} className="underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/15 px-5 py-6 text-base sm:flex-row sm:justify-between">
          <p>
            {company.name} · {contact.address}
          </p>
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}

function ReiRule() {
  return (
    <span className="relative block h-2.5" aria-hidden="true">
      <span className="absolute top-0 left-0 h-2.5 w-2 bg-[#6e747a]" />
      <span className="absolute top-[2px] right-2 left-2 h-1.5 bg-rei" />
      <span className="absolute top-0 right-0 h-2.5 w-2 bg-[#6e747a]" />
    </span>
  );
}
