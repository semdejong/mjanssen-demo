import CtaPair from "@/components/CtaPair";
import Rei from "@/components/Rei";

export default function ClosingBand({
  title = "Vrijblijvend afspreken",
  text = "Bel of vraag een gratis offerte. Wij nemen binnen één werkdag contact met u op.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section data-section="slot" className="band-donker bg-vanblauw text-wit">
      <Rei />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-xl text-3xl text-wit sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-spekglad">{text}</p>
        </div>
        <CtaPair tone="dark" />
      </div>
    </section>
  );
}
