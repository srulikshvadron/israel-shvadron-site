import type { Copy } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export function Process({ copy }: { copy: Copy }) {
  const process = copy.process;

  return (
    <section id={process.id} aria-labelledby="process-title" className="scroll-mt-24">
      <Container className="py-12 sm:py-16">
        <Reveal variant="group">
          <h2 id="process-title" className="process-strip">
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
          </h2>
        </Reveal>
        <Reveal variant="rise" className="mt-8">
          <WhatsAppCta copy={copy} />
        </Reveal>
      </Container>
    </section>
  );
}
