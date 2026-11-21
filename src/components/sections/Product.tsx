import {
  googlePolicyLinks,
  operator,
  product,
  productName,
  youtubeScope,
} from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Product() {
  return (
    <Section
      id={product.id}
      title={product.title}
      subtitle={product.subtitle}
      eyebrow={product.eyebrow}
    >
      <ol className="grid gap-6 lg:grid-cols-3">
        {product.steps.map((step, index) => (
          <Reveal key={step.title}>
            <li className="h-full rounded-xl border border-line bg-bg-elevated/40 p-6">
              <p className="text-sm font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-8 max-w-3xl space-y-4 rounded-xl border border-line bg-bg/40 p-6">
          <p className="leading-relaxed text-muted">{product.oauthNote}</p>
          <p className="leading-relaxed text-muted">היקף ההרשאה:</p>
          <p className="break-all font-mono text-sm leading-relaxed text-fg">
            {youtubeScope}
          </p>
          <p className="leading-relaxed text-muted">{product.approvalNote}</p>
          <p className="leading-relaxed text-fg">
            המערכת מופעלת על ידי {operator.businessHe}. מאחורי העסק:{" "}
            {operator.givenHe} ({operator.legalNameHe}), {operator.localityHe}.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <aside
          lang="en"
          dir="ltr"
          className="mt-6 max-w-3xl rounded-xl border border-line bg-bg-elevated/40 p-6 text-start [overflow-wrap:anywhere]"
        >
          <p className="text-sm font-medium text-accent">English summary</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-fg">
            {productName.en}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            {productName.en} finds news and source material, produces short
            Hebrew media, and distributes it to Telegram, WhatsApp, and
            YouTube. YouTube access is requested only to upload videos to a
            channel the account owner authorized with Google OAuth. Scope:{" "}
            <span className="break-all font-mono text-sm text-fg">
              {youtubeScope}
            </span>
            {`. The service is operated by ${operator.businessEn} (${operator.legalNameEn}), ${operator.localityEn}, ${operator.countryEn}. Use of the YouTube connection is also subject to the `}
            <a
              href={googlePolicyLinks.youtubeTerms}
              className="text-accent underline decoration-accent/40 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Terms of Service
            </a>
            .
          </p>
        </aside>
      </Reveal>
    </Section>
  );
}
