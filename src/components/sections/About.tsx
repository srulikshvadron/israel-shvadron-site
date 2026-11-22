import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function About({ copy }: { copy: Copy }) {
  return (
    <Section id={copy.about.id} eyebrow={copy.about.eyebrow} title={copy.about.title}>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-fg/90">
        {copy.about.paragraphs.map((paragraph) => (
          <Reveal key={paragraph} variant="rise">
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
