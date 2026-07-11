"use client";

import { FormEvent, useState } from "react";
import { contact, siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`פנייה מאתר התדמית — ${name || "ללא שם"}`);
    const body = encodeURIComponent(
      `שם: ${name}\nאימייל: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id={contact.id}
      title={contact.title}
      subtitle={contact.subtitle}
      eyebrow="בואו נדבר"
      className="border-t border-line"
    >
      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl space-y-5 rounded-xl border border-line bg-bg-elevated/50 p-6 sm:p-8"
          noValidate
        >
          <div className="space-y-2">
            <label htmlFor="contact-name" className="block text-sm font-medium text-fg">
              {contact.form.nameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={contact.form.namePlaceholder}
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-email" className="block text-sm font-medium text-fg">
              {contact.form.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={contact.form.emailPlaceholder}
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="block text-sm font-medium text-fg">
              {contact.form.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={contact.form.messagePlaceholder}
              className="w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#042f2e] transition-colors hover:bg-accent-strong sm:w-auto"
          >
            {contact.form.submitLabel}
          </button>

          <p className="text-sm text-muted">{contact.note}</p>
        </form>
      </Reveal>
    </Section>
  );
}
