"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { contact, offerteDiensten } from "@/content";

type Errors = Partial<Record<"naam" | "telefoon" | "email" | "privacy", string>>;

export default function OfferteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const adres = String(data.get("adres") ?? "").trim();
    const toelichting = String(data.get("toelichting") ?? "").trim();
    const privacy = data.get("privacy") === "ja";
    const diensten = offerteDiensten.filter((item) => data.get(item) === "ja");

    const nextErrors: Errors = {};
    if (!naam) nextErrors.naam = "Vul uw naam in.";
    if (!telefoon) nextErrors.telefoon = "Vul uw telefoonnummer in.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Vul een geldig e-mailadres in.";
    if (!privacy) nextErrors.privacy = "Vink aan dat u weet dat uw mailprogramma het bericht opent.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const body = [
      "Offerteaanvraag",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      `E-mail: ${email}`,
      `Adres/plaats: ${adres || "niet ingevuld"}`,
      `Diensten: ${diensten.length ? diensten.join(", ") : "niet ingevuld"}`,
      `Toelichting: ${toelichting || "niet ingevuld"}`,
      "",
      "Dit bericht is pas verstuurd als u in uw mailprogramma op verzenden drukt.",
    ].join("\n");

    const href = `mailto:${contact.email}?subject=${encodeURIComponent("Offerteaanvraag")}&body=${encodeURIComponent(body)}`;
    setStatus("Dit is een concept; uw mailprogramma opent met het bericht. Er is nog niets verzonden.");
    window.location.href = href;
  }

  return (
    <form method="post" action="/offerte" onSubmit={onSubmit} noValidate className="border border-rei bg-stucvlak p-5 sm:p-8" data-section="offerte-formulier">
      <p className="text-inkt">
        Dit is een concept; uw mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd. Liever direct bellen?{" "}
        <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
          {contact.phone}
        </a>
        .
      </p>

      <div className="mt-6 grid gap-5">
        <Field id="naam" label="Naam" required error={errors.naam}>
          <input id="naam" name="naam" autoComplete="name" required aria-invalid={Boolean(errors.naam)} aria-describedby={errors.naam ? "naam-fout" : undefined} className="field" />
        </Field>
        <Field id="telefoon" label="Telefoon" required error={errors.telefoon}>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" required aria-invalid={Boolean(errors.telefoon)} aria-describedby={errors.telefoon ? "telefoon-fout" : undefined} className="field" />
        </Field>
        <Field id="email" label="E-mail" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-fout" : undefined} className="field" />
        </Field>
        <Field id="adres" label="Adres/plaats">
          <input id="adres" name="adres" autoComplete="street-address" className="field" />
        </Field>
      </div>

      <fieldset className="mt-8">
        <legend className="font-display text-2xl">Diensten</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {offerteDiensten.map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-3 border border-rei px-3">
              <input type="checkbox" name={item} value="ja" className="h-4 w-4" />
              <span className="text-base">{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="toelichting" label="Toelichting" className="mt-6">
        <textarea id="toelichting" name="toelichting" rows={5} className="field" />
      </Field>

      <div className="mt-6">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="privacy" value="ja" className="mt-1 h-4 w-4" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-fout" : undefined} />
          <span className="text-base">
            Ik begrijp dat dit een concept is en dat mijn mailprogramma het bericht opent. Er wordt niets automatisch verzonden.{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy
            </Link>
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-fout" className="mt-2 text-base text-baksteen-text">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <button type="submit" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-inkt px-5 text-base text-wit">
        Open het bericht in mijn mailprogramma
      </button>

      {status ? (
        <p role="status" className="mt-4 border border-rei bg-spekglad p-4">
          {status} U kunt ook bellen met{" "}
          <a href={contact.phoneTel} data-cta="bellen" className="underline underline-offset-4">
            {contact.phone}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-base">
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${id}-fout`} className="mt-1 text-base text-baksteen-text">
          {error}
        </p>
      ) : null}
    </div>
  );
}
