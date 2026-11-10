import type { Section } from "@/content";

export default function Blocks({ sections }: { sections: Section[] }) {
  return (
    <div className="max-w-3xl space-y-10">
      {sections.map((section) => (
        <section key={section.id ?? section.heading} id={section.id} data-section={section.id}>
          {section.heading ? <h2 className="text-3xl text-inkt sm:text-4xl">{section.heading}</h2> : null}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-inkt">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="mt-4 space-y-3">
              {section.bullets.map((item) => (
                <li key={item} className="border-l border-rei pl-4 text-inkt">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
