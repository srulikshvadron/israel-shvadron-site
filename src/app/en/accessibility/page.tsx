import { getCopy } from "@/content/copy";
import { TextPage } from "@/components/pages/TextPage";
import { createMetadata } from "@/lib/seo";

const copy = getCopy("en");

export const metadata = createMetadata("en", {
  title: copy.pages.accessibility.title,
  description: copy.pages.accessibility.description,
  path: "/accessibility",
});

export default function EnglishAccessibilityPage() {
  return (
    <TextPage
      locale="en"
      copy={copy}
      title={copy.pages.accessibility.title}
      kicker={copy.pages.accessibility.kicker}
      intro={copy.pages.accessibility.intro}
      updated={copy.pages.accessibility.updated}
      blocks={copy.accessibility}
      showChannels
    />
  );
}