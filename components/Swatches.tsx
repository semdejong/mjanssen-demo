/** Twee kleine, niet-herhaalde uitsnedes uit echte spachtelputzfoto’s, op native pixelgrootte. */
export default function Swatches() {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      <figure>
        <div
          role="img"
          aria-label="Korrelstructuur van spachtelputz, detail uit een werkfoto."
          className="h-28 w-40 border border-rei"
          style={{
            backgroundImage: "url(/img/diensten/wat-is-spachtelputz.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        />
        <figcaption className="mt-2 max-w-40 text-base text-voeg">Spachtelputz, korrel</figcaption>
      </figure>
      <figure>
        <div
          role="img"
          aria-label="Detail van spachtelputz op een buitenmuur."
          className="h-28 w-40 border border-rei"
          style={{
            backgroundImage: "url(/img/projecten/spachtelputz-buitenmuur.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "18% 32%",
          }}
        />
        <figcaption className="mt-2 max-w-40 text-base text-voeg">Spachtelputz buiten, detail</figcaption>
      </figure>
    </div>
  );
}
