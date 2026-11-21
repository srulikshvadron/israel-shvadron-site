import { HomePage } from "@/components/pages/HomePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("he");

export default function Page() {
  return <HomePage locale="he" />;
}
