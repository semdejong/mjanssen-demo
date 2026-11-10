import Link from "next/link";
import {
  about,
  company,
  contact,
  experience,
  projects,
  reviews,
  services,
  waarom,
} from "@/content";
import Comparison from "@/components/Comparison";
import CtaPair from "@/components/CtaPair";
import FaqList from "@/components/FaqList";
import Lichtgraas from "@/components/Lichtgraas";
import Photo from "@/components/Photo";
import Rei from "@/components/Rei";
import SiteFrame from "@/components/SiteFrame";

const homeProjects = projects.filter((item) => item.home);

export default function HomePage() {
  return (
    <SiteFrame>
      <section data-section="hero" className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12 lg:py-16">
        <div className="rise lg:col-span-7">
          <p className="text-base text-voeg">Welkom bij {company.styledName}.</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-inkt sm:text-5xl lg:text-6xl">
            Sausklaar stucen in Deventer — wanden en plafonds spiegelglad.
          </h1>
          <p className="mt-6 max-w-xl">{experience}</p>
          <CtaPair className="mt-6" />
          <p className="mt-6 max-w-xl text-voeg">
            Erkend en vakbekwaam stukadoors- en afbouwbedrijf uit Deventer, voor het sausklaar afwerken van wanden en plafonds. Voor huis en bedrijfspand in {company.regionHome}.
          </p>
        </div>
        <figure className="rise-late border border-rei bg-stucvlak lg:col-span-5">
          <Photo
            src="/img/diensten/sausklaar-stukwerk.jpg"
            width={800}
            height={605}
            alt="Sausklaar gestuct interieur met gladde wanden, schouw en plafond."
            priority
          />
        </figure>
      </section>

      <Lichtgraas />

      <section data-section="feiten" className="bg-stucvlak">
        <Rei />
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {[
            ["Deventer", "Vestiging"],
            ["Ruim 32 jaar", "Stukadoor en schilder"],
            ["Sausklaar & behangklaar", "Twee afwerkingen"],
            ["Binnen en buiten", "Wanden, plafonds, gevel"],
          ].map(([title, note]) => (
            <li key={title} className="border-b border-rei px-5 py-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="font-display text-2xl text-inkt">{title}</p>
              <p className="mt-1 text-base text-voeg">{note}</p>
            </li>
          ))}
        </ul>
        <Rei />
      </section>

      <section data-section="diensten" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <h2 className="text-4xl lg:col-span-5 lg:text-5xl">Afwerking langs de rei</h2>
          <p className="text-voeg lg:col-span-6 lg:col-start-7">
            Sausklaar en behangklaar stucen, buitenmuren, beton ciré, airless latex, spachtelputz, lijsten en ornamenten. Behangen en sauzen horen daarbij.
          </p>
        </div>
        <div className="mt-10">
          <Comparison labelled />
        </div>
        <ul className="mt-4 border-b border-rei">
          {services.map((item) => (
            <li key={item.href} className="border-t border-rei">
              <Link href={item.href} className="grid min-h-16 items-center gap-2 py-5 md:grid-cols-12">
                <span className="font-display text-2xl md:col-span-4">{item.title}</span>
                <span className="text-voeg md:col-span-7">{item.text}</span>
                <span className="font-mono text-sm tracking-widest text-inkt md:col-span-1 md:text-right">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="projecten" className="bg-stucvlak py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl">Projecten</h2>
            <Link href="/projecten" className="inline-flex min-h-11 items-center underline underline-offset-4">
              Alle projecten
            </Link>
          </div>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {homeProjects.map((item) => (
              <li key={item.id} className="border border-rei bg-spekglad">
                <Link href={`/projecten#${item.id}`}>
                  <Photo src={item.src} width={item.width} height={item.height} alt={item.alt} />
                  <div className="border-t border-rei px-4 py-4">
                    <p className="font-display text-xl">{item.title}</p>
                    <p className="mt-2 text-base text-voeg">{item.caption}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="waarom" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="max-w-2xl text-4xl">Waarom Stukadoorsbedrijf M. Janssen</h2>
        <p className="mt-5 max-w-3xl">
          Door de jarenlange ervaring heb ik veel kennis opgedaan. Die gebruik ik graag om u advies te geven. Kwaliteit, betrouwbaarheid, duidelijkheid, flexibiliteit en een goede service staan hoog in het vaandel.
        </p>
        <ul className="mt-8 border-b border-rei">
          {waarom.map((item) => (
            <li key={item.title} className="grid gap-2 border-t border-rei py-5 md:grid-cols-12">
              <h3 className="text-2xl md:col-span-4">{item.title}</h3>
              <p className="text-voeg md:col-span-8">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="over" className="bg-stucvlak">
        <Rei />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-12">
          <figure className="border border-rei bg-spekglad lg:col-span-5">
            <Photo {...about.image} />
          </figure>
          <div className="lg:col-span-7">
            <h2 className="text-4xl">{about.title}</h2>
            <div className="mt-5 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href="/over-marcel" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">
              Meer over Marcel
            </Link>
          </div>
        </div>
      </section>

      <section data-section="reviews" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-4xl">{reviews.title}</h2>
        <ul className="mt-8 grid gap-8 lg:grid-cols-2">
          {reviews.items.map((item) => (
            <li key={item.name} className="border border-rei bg-stucvlak p-5">
              <blockquote>
                <p>{item.text}</p>
                <footer className="mt-4 border-t border-rei pt-3 font-display text-lg">{item.name}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="faq" className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-4xl">Vragen</h2>
        <div className="mt-6">
          <FaqList />
        </div>
      </section>

      <section data-section="regio" className="bg-stucvlak">
        <Rei />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl">De stukadoor van Deventer en omstreken</h2>
            <p className="mt-4 text-voeg">{company.regionHome}.</p>
          </div>
          <figure className="border border-rei bg-spekglad lg:col-span-7">
            <Photo
              src="/img/home/de-stukadoor-van-deventer-en-omstreken.jpg"
              width={1600}
              height={900}
              alt="Werkbus van Stukadoorsbedrijf M. Janssen in het landschap. De stukadoor van Deventer en omstreken."
            />
          </figure>
        </div>
      </section>

      <section data-section="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl">{contact.title}</h2>
            <p className="mt-4">{contact.text}</p>
            <CtaPair className="mt-6" />
          </div>
          <address className="border border-rei bg-stucvlak p-6 not-italic lg:col-span-7">
            <p className="font-display text-2xl">{company.name}</p>
            <p className="mt-3">
              {contact.street}
              <br />
              {contact.postal}
            </p>
            <p className="mt-3">
              <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} data-cta="mail" className="underline underline-offset-4">
                {contact.email}
              </a>
            </p>
            <p className="mt-3">{contact.hours}</p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              <a href={contact.maps} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                Welle 44K op de kaart
              </a>
              <a href={contact.facebook} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
          </address>
        </div>
      </section>
    </SiteFrame>
  );
}
