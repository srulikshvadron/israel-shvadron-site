import { about } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <Section id={about.id} title={about.title} eyebrow="מי אני">
      <Reveal>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
