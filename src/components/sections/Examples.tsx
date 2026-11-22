import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Examples({ copy }: { copy: Copy }) {
  const examples = copy.examples;
  return (
    <Section id={examples.id} eyebrow={examples.eyebrow} title={examples.title} className="bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {examples.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <li className="studio-card">
              <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-accent">{examples.labels.problem}</dt>
                  <dd className="mt-1 text-muted">{item.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-accent">{examples.labels.solution}</dt>
                  <dd className="mt-1 text-muted">{item.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-accent">{examples.labels.result}</dt>
                  <dd className="mt-1 text-muted">{item.result}</dd>
                </div>
              </dl>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
