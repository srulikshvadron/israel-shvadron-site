import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Tech({ copy }: { copy: Copy }) {
  const tech = copy.tech;

  return (
    <Section id={tech.id} title={tech.title} subtitle={tech.subtitle} className="border-y border-line bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {tech.items.map((item, index) => (
          <li key={item.term} className={index === tech.items.length - 1 ? "lg:col-span-2" : undefined}>
            <Reveal className="h-full">
              <div className="studio-card">
                <h3 className="font-display text-xl font-semibold leading-snug text-fg">{item.term}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">{item.line}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal variant="rise">
        <p className="mt-8 max-w-3xl font-display text-xl font-semibold leading-snug text-fg sm:text-2xl">
          {tech.closing}
        </p>
      </Reveal>
    </Section>
  );
}
