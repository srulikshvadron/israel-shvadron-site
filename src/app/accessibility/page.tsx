import { getCopy } from "@/content/copy";
import { TextPage } from "@/components/pages/TextPage";
import { createMetadata } from "@/lib/seo";

const copy = getCopy("he");

export const metadata = createMetadata("he", {
  title: copy.pages.accessibility.title,
  description: copy.pages.accessibility.description,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <TextPage
      locale="he"
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
