import { getCopy } from "@/content/copy";
import { TextPage } from "@/components/pages/TextPage";
import { createMetadata } from "@/lib/seo";

const copy = getCopy("he");

export const metadata = createMetadata("he", {
  title: copy.pages.privacy.title,
  description: copy.pages.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TextPage
      locale="he"
      copy={copy}
      title={copy.pages.privacy.title}
      kicker={copy.pages.privacy.kicker}
      intro={copy.pages.privacy.intro}
      updated={copy.pages.privacy.updated}
      blocks={copy.privacy}
      showChannels
    />
  );
}
