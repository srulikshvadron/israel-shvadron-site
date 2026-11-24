import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export function Process({ copy }: { copy: Copy }) {
  const process = copy.process;

  return (
    <Section id={process.id} title={process.title} subtitle={process.subtitle}>
      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {process.steps.map((step, index) => (
          <li key={step}>
            <Reveal className="h-full">
              <div className="studio-card">
                <p className="font-display text-sm font-semibold text-accent" aria-hidden="true">
                  {index + 1}
                </p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg">{step}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal variant="group" className="mt-12 sm:mt-16">
        <p className="process-strip">
          {process.beats.map((beat, index) => (
            <span key={beat} className={index === process.beats.length - 1 ? "is-punch" : undefined}>
              {beat}
              {index < process.beats.length - 1 ? (
                <span className="process-sep" aria-hidden="true">
                  {" "}
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </p>
      </Reveal>
      <Reveal variant="rise" className="mt-8">
        <WhatsAppCta copy={copy} />
      </Reveal>
    </Section>
  );
}
