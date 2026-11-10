import Link from "next/link";
import { finish } from "@/content";
import Rei from "@/components/Rei";

export default function Comparison({ labelled = false, showLinks = true }: { labelled?: boolean; showLinks?: boolean }) {
  return (
    <div data-section="klassen">
      {labelled ? <Rei left="SAUSKLAAR" right="BEHANGKLAAR" /> : <Rei />}
      <div className="grid md:grid-cols-2">
        <div className="border-b border-rei px-5 py-8 md:border-r md:border-b-0">
          <h2 className="text-3xl">Sausklaar</h2>
          <p className="mt-2 text-base text-baksteen-text">Veelal Klasse A</p>
          <ul className="mt-4 space-y-3">
            {finish.sausklaar.map((item) => (
              <li key={item} className="border-t border-rei pt-3">
                {item}
              </li>
            ))}
          </ul>
          {showLinks ? (
            <Link href="/sausklaar" className="mt-6 inline-flex min-h-11 items-center text-base underline underline-offset-4">
              Sausklaar stucen
            </Link>
          ) : null}
        </div>
        <div className="px-5 py-8">
          <h2 className="text-3xl">Behangklaar</h2>
          <p className="mt-2 text-base text-voeg">Ondergrond voor behang</p>
          <ul className="mt-4 space-y-3">
            {finish.behangklaar.map((item) => (
              <li key={item} className="border-t border-rei pt-3">
                {item}
              </li>
            ))}
          </ul>
          {showLinks ? (
            <Link href="/sausklaar#behangklaar" className="mt-6 inline-flex min-h-11 items-center text-base underline underline-offset-4">
              Verschil met sausklaar
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
