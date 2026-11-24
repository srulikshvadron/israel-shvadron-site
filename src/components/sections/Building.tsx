import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Building({ copy }: { copy: Copy }) {
  const building = copy.building;

  return (
    <Section id={building.id} title={building.title} subtitle={building.subtitle}>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {building.items.map((item) => (
          <li key={item}>
            <Reveal className="h-full">
              <div className="studio-card">
                <p className="text-sm font-semibold tracking-wide text-accent">{building.tag}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-fg">{item}</h3>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-base leading-relaxed text-muted">{building.closing}</p>
    </Section>
  );
}
