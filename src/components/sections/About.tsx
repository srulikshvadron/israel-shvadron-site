import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function About({ copy }: { copy: Copy }) {
  return (
    <Section id={copy.about.id} title={copy.about.title}>
      <Reveal>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-fg/90">
          {copy.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
