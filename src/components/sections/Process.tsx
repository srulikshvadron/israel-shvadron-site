import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Process({ copy }: { copy: Copy }) {
  const process = copy.process;
  return (
    <Section id={process.id} eyebrow={process.eyebrow} title={process.title}>
      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {process.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <li className="studio-card">
              <p className="font-display text-sm font-semibold text-accent">{index + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.line}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
