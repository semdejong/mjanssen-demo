/** Eén harde band strijklicht over een vlak stucvlak. Geen gloed, geen verloop. */
export default function Lichtgraas() {
  return (
    <figure data-section="lichtgraas" className="border-y border-rei bg-spekglad">
      <svg viewBox="0 0 1200 168" className="block h-36 w-full sm:h-44" role="img" aria-label="Strijklicht over een glad stucvlak">
        <rect width="1200" height="168" fill="#F3F0E8" />
        <polygon points="0,46 1200,78 1200,118 0,86" fill="#FFFFFF" />
      </svg>
      <figcaption className="mx-auto max-w-6xl px-5 pb-6 font-display text-2xl text-inkt sm:text-3xl">
        Onder elke lichtinval perfect glad.
      </figcaption>
    </figure>
  );
}
