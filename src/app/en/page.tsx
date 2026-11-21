import { HomePage } from "@/components/pages/HomePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("en", { path: "/" });

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
