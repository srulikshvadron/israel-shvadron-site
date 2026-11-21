import { getCopy, type Locale } from "@/content/copy";
import { operator, siteConfig } from "@/content/site";
import { phoneTel, publicEmail, publicPhone } from "@/lib/contact";

export function JsonLd({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: copy.brand,
    alternateName: locale === "he" ? siteConfig.nameEn : siteConfig.name,
    url: siteConfig.url,
    description: copy.meta.description,
    inLanguage: locale,
    areaServed: "IL",
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "he" ? operator.localityHe : operator.localityEn,
      addressCountry: "IL",
    },
    founder: {
      "@type": "Person",
      name: locale === "he" ? operator.givenHe : operator.givenEn,
      alternateName: locale === "he" ? operator.legalNameHe : operator.legalNameEn,
    },
  };

  const email = publicEmail();
  const phone = publicPhone();
  if (email) data.email = email;
  if (phone) data.telephone = phoneTel(phone);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
