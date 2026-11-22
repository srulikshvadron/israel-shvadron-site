import type { Copy } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export function Process({ copy }: { copy: Copy }) {
  const process = copy.process;

  return (
    <section id={process.id} aria-labelledby="process-title" className="scroll-mt-24">
      <Container className="py-12 sm:py-16">
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
        <div className="mt-8">
          <WhatsAppCta copy={copy} />
        </div>
      </Container>
    </section>
  );
}
