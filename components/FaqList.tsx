import { faq } from "@/content";

export default function FaqList() {
  return (
    <div className="border-t border-rei">
      {faq.map((item) => (
        <details key={item.q} className="group border-b border-rei">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl text-inkt [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden className="font-mono text-sm text-voeg group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-inkt">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
