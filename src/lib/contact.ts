import { siteConfig } from "@/content/site";

export const WHATSAPP_PREFILL =
  "היי שרוליק, הגעתי מהאתר. יש משהו בעסק שיושב לי על הראש. אפשר לדבר?";

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

/** Display stays local (053-…). The tel link uses +972. */
export function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "tel:";
  if (digits.startsWith("972")) return `tel:+${digits}`;
  if (digits.startsWith("0")) return `tel:+972${digits.slice(1)}`;
  return `tel:+${digits}`;
}

export function phoneTel(phone: string) {
  return phoneHref(phone).slice(4);
}
