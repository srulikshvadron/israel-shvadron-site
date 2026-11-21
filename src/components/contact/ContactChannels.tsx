import Link from "next/link";
import { phoneHref, publicEmail, publicPhone, whatsappHref } from "@/lib/contact";

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong";

type ContactChannelsProps = {
  formHref: string;
  formLabel: string;
  whatsappLabel: string;
  phoneLabel: string;
};

export function ContactChannels({
  formHref,
  formLabel,
  whatsappLabel,
  phoneLabel,
}: ContactChannelsProps) {
  const email = publicEmail();
  const phone = publicPhone();
  const whatsapp = whatsappHref();

  return (
    <ul className="list-disc space-y-2 ps-5">
      <li>
        <Link href={formHref} className={linkClass}>
          {formLabel}
        </Link>
      </li>
      {whatsapp ? (
        <li>
          <a
            href={whatsapp}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            {whatsappLabel}
          </a>
        </li>
      ) : null}
      {email ? (
        <li>
          <a href={`mailto:${email}`} className={linkClass}>
            {email}
          </a>
        </li>
      ) : null}
      {phone ? (
        <li>
          <a href={phoneHref(phone)} className={linkClass}>
            {phoneLabel}: {phone}
          </a>
        </li>
      ) : null}
    </ul>
  );
}
