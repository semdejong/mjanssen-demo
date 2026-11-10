"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content";

export default function ProjectGallery({ items }: { items: Project[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((current) => (current === null ? current : (current + 1) % items.length));
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length));
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [index, items.length]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item, itemIndex) => (
          <li key={item.id} id={item.id} className="border border-rei bg-stucvlak">
            <button type="button" className="block w-full text-left" onClick={() => setIndex(itemIndex)} aria-label={`Vergroot foto: ${item.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto max-w-full"
                style={{ width: "100%", maxWidth: item.width }}
              />
            </button>
            <div className="border-t border-rei px-4 py-4">
              <p className="font-display text-xl">{item.title}</p>
              <p className="mt-2 text-base text-voeg">{item.caption}</p>
            </div>
          </li>
        ))}
      </ul>

      {active && index !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-vanblauw/95 p-4" role="presentation" onClick={() => setIndex(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="max-h-full w-full max-w-5xl overflow-y-auto bg-stucvlak"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-rei px-4 py-2">
              <p className="font-display text-lg">{active.title}</p>
              <button ref={closeRef} type="button" className="inline-flex min-h-11 items-center px-3" onClick={() => setIndex(null)}>
                Sluiten
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="mx-auto h-auto max-h-[70vh] w-auto max-w-full"
            />
            <p className="px-4 py-4 text-base text-voeg">{active.caption}</p>
            <div className="flex gap-2 border-t border-rei px-4 py-3">
              <button type="button" className="inline-flex min-h-11 items-center border border-inkt px-4" onClick={() => setIndex((index - 1 + items.length) % items.length)}>
                Vorige
              </button>
              <button type="button" className="inline-flex min-h-11 items-center border border-inkt px-4" onClick={() => setIndex((index + 1) % items.length)}>
                Volgende
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
