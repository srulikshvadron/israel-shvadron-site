import { interests } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export function Interests() {
  return (
    <Section
      id={interests.id}
      title={interests.title}
      subtitle={interests.subtitle}
      eyebrow="מומחיות ותחומי עניין"
    >
      <Reveal>
        <ul className="flex flex-wrap gap-3" aria-label="רשימת תחומי עניין">
          {interests.items.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
