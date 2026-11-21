import { operator, siteConfig } from "@/content/site";
import { phoneTel, publicEmail, publicPhone } from "@/lib/contact";

export function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "he",
    areaServed: "IL",
    address: {
      "@type": "PostalAddress",
      addressLocality: operator.localityHe,
      addressCountry: "IL",
    },
    founder: {
      "@type": "Person",
      name: operator.givenHe,
      alternateName: operator.legalNameHe,
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
