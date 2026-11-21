import { headers } from "next/headers";
import { type Locale } from "@/content/copy";

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  return headerStore.get("x-locale") === "en" ? "en" : "he";
}
