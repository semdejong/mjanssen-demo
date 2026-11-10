"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { company, contact, dienstNav, mainNav } from "@/content";
import Rei from "@/components/Rei";

export default function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const dienstenId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const [mobile, setMobile] = useState(false);
  const [diensten, setDiensten] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(96);

  useEffect(() => {
    setMobile(false);
    setDiensten(false);
  }, [pathname]);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mobile, diensten]);

  useEffect(() => {
    if (!diensten) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDiensten(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [diensten]);

  useEffect(() => {
    if (!mobile) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobile(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [mobile]);

  return (
    <header ref={headerRef} data-section="header" className="sticky top-0 z-40 bg-stucvlak">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="mr-auto shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={company.logo}
            alt={company.name}
            width={company.logoWidth}
            height={company.logoHeight}
            className="h-12 w-auto max-w-[212px] sm:h-[72px]"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-5 lg:flex">
          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDiensten(false);
            }}
          >
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 text-base text-inkt"
              aria-expanded={diensten}
              aria-controls={dienstenId}
              onClick={() => setDiensten((open) => !open)}
            >
              Diensten
              <span aria-hidden className="text-xs">
                ▾
              </span>
            </button>
            {diensten ? (
              <div id={dienstenId} className="absolute left-0 top-full z-50 min-w-64 border border-rei bg-stucvlak py-2">
                <Link href="/diensten" className="block min-h-11 px-4 py-2 text-base hover:bg-spekglad">
                  Alle diensten
                </Link>
                {dienstNav.map((item) => (
                  <Link key={item.href} href={item.href} className="block min-h-11 px-4 py-2 text-base hover:bg-spekglad">
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-base" aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={contact.phoneTel} data-cta="bellen" className="hidden min-h-11 items-center whitespace-nowrap text-base text-inkt lg:inline-flex">
          {contact.phone}
        </a>
        <Link href="/offerte" data-cta="offerte" className="hidden min-h-11 items-center bg-inkt px-4 text-base text-wit lg:inline-flex">
          Offerte
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-inkt lg:hidden"
          aria-expanded={mobile}
          aria-controls={menuId}
          onClick={() => setMobile((open) => !open)}
        >
          <span className="sr-only">{mobile ? "Menu sluiten" : "Menu openen"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className="block h-px bg-inkt" />
            <span className="block h-px bg-inkt" />
            <span className="block h-px bg-inkt" />
          </span>
        </button>
      </div>
      <Rei draw />

      {mobile
        ? createPortal(
            <nav id={menuId} aria-label="Mobiel menu" className="fixed inset-x-0 bottom-16 z-50 overflow-y-auto bg-spekglad px-5 py-4 lg:hidden" style={{ top: headerHeight }}>
          <p className="font-display text-2xl">Diensten</p>
          <ul className="mt-2 border-t border-rei">
            <li className="border-b border-rei">
              <Link href="/diensten" className="flex min-h-11 items-center">
                Alle diensten
              </Link>
            </li>
            {dienstNav.map((item) => (
              <li key={item.href} className="border-b border-rei">
                <Link href={item.href} className="flex min-h-11 items-center">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 border-t border-rei">
            {mainNav.map((item) => (
              <li key={item.href} className="border-b border-rei">
                <Link href={item.href} className="flex min-h-11 items-center text-xl font-display">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-rei">
              <a href={contact.phoneTel} data-cta="bellen" className="flex min-h-11 items-center">
                Bel {contact.phone}
              </a>
            </li>
          </ul>
            </nav>,
            document.body,
          )
        : null}
    </header>
  );
}
