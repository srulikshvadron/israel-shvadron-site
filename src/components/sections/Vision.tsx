import { vision } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Vision() {
  return (
    <Section
      id={vision.id}
      title={vision.title}
      eyebrow="לאן אני שואף"
      className="border-y border-line bg-bg-elevated/30"
    >
      <Reveal>
        <p className="max-w-3xl font-display text-2xl leading-relaxed text-fg sm:text-3xl">
          {vision.text}
        </p>
      </Reveal>
    </Section>
  );
}
