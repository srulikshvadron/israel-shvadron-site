import Link from "next/link";
import { phoneHref, publicEmail, publicPhone } from "@/lib/contact";

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong";

type ContactChannelsProps = {
  formHref: string;
  formLabel: string;
  phoneLabel: string;
};

export function ContactChannels({
  formHref,
  formLabel,
  phoneLabel,
}: ContactChannelsProps) {
  const email = publicEmail();
  const phone = publicPhone();

  return (
    <ul className="list-disc space-y-2 ps-5">
      <li>
        <Link href={formHref} className={linkClass}>
          {formLabel}
        </Link>
      </li>
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
