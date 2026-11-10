/** Twee laagdiktes als platte stucdoorsnede, in hun eigen maten. */
export default function LayerBars() {
  return (
    <div data-section="laagdikte" className="mt-12 border border-rei bg-stucvlak p-5 sm:p-6">
      <h2 className="text-3xl">Hoe dik de laag wordt</h2>
      <p className="mt-3 max-w-xl text-voeg">Dat hangt af van de muur. De sausklare eindlaag is in beide gevallen spiegelglad.</p>
      <div className="mt-8 space-y-7">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-inkt">PLEISTER · 1–6 MM</p>
          <p className="mt-1 text-base text-voeg">Kleinere oneffenheden.</p>
          <div className="mt-3 h-2 max-w-md bg-rei" />
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-inkt">RAAPWERK · 7 MM–5 CM</p>
          <p className="mt-1 text-base text-voeg">Meestal bij veel scheuren.</p>
          <div className="mt-3 h-8 max-w-md bg-[#d9d3c7]" />
        </div>
      </div>
    </div>
  );
}
