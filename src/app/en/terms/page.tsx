import { getCopy } from "@/content/copy";
import { TextPage } from "@/components/pages/TextPage";
import { createMetadata } from "@/lib/seo";

const copy = getCopy("en");

export const metadata = createMetadata("en", {
  title: copy.pages.terms.title,
  description: copy.pages.terms.description,
  path: "/terms",
});

export default function EnglishTermsPage() {
  return (
    <TextPage
      locale="en"
      copy={copy}
      title={copy.pages.terms.title}
      kicker={copy.pages.terms.kicker}
      intro={copy.pages.terms.intro}
      updated={copy.pages.terms.updated}
      blocks={copy.terms}
      showChannels
    />
  );
}
