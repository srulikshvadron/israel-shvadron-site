import { siteConfig } from "@/content/site";

export const WHATSAPP_PREFILL =
  "שלום, אשמח לשמוע על פתרון דיגיטלי לעסק.";

/** wa.me link, or null until a real number is set in siteConfig.contact. */
export function whatsappHref(text: string = WHATSAPP_PREFILL) {
  const digits = siteConfig.contact.whatsappE164.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function publicEmail() {
  const email = siteConfig.contact.email.trim();
  return email.length > 0 ? email : null;
}

export function publicPhone() {
  const phone = siteConfig.contact.phone.trim();
  return phone.length > 0 ? phone : null;
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
