"use client";

import { FormEvent, useState } from "react";
import type { Copy, Locale } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PulseDot } from "@/components/brand/PulseDot";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClass = "field";

export function Contact({ locale, copy }: { locale: Locale; copy: Copy }) {
  const contact = copy.contact;
  const whatsapp = whatsappHref(copy.whatsappPrefill);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message, company, locale }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        confirmationSent?: boolean;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? contact.fallbackError);
        return;
      }

      setConfirmationSent(Boolean(data?.confirmationSent));
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setStatus("error");
      setErrorMessage(contact.fallbackError);
    }
  }

  const hasError = status === "error";
  const isLoading = status === "loading";

  return (
    <Section
      id={contact.id}
      eyebrow={contact.eyebrow}
      title={contact.title}
      subtitle={contact.subtitle}
      className="border-t border-line"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <div className="space-y-5">
            <div className="studio-card">
              <h3 className="font-display text-xl font-semibold text-fg">{contact.whatsappTitle}</h3>
              <p className="mt-3 leading-relaxed text-muted">{contact.whatsappBody}</p>
              <Button
                href={whatsapp ?? "#contact"}
                className="mt-6 w-full sm:w-auto"
                {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {contact.whatsappCta}
              </Button>
            </div>
            <div className="studio-card studio-card-quiet">
              <h3 className="font-display text-xl font-semibold text-fg">{contact.briefTitle}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {contact.briefItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-semibold text-fg">{contact.afterTitle}</h3>
              <p className="mt-3 leading-relaxed text-muted">{contact.after}</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="studio-card studio-card-quiet space-y-5"
            noValidate
            aria-busy={isLoading}
          >
          {status === "success" ? (
            <div className="success-panel" role="status">
              <p className="font-display text-xl font-semibold text-accent">{contact.successTitle}</p>
              <p className="text-sm text-muted">
                {confirmationSent ? contact.successConfirmed : contact.success}
              </p>
            </div>
          ) : (
          <>
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="contact-company">{contact.honeypot}</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-sm font-medium text-fg">
                {contact.nameLabel}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={contact.namePlaceholder}
                className={fieldClass}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-phone" className="block text-sm font-medium text-fg">
                {contact.phoneLabel}
                <span className="ms-2 font-normal text-muted">{contact.phoneHint}</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={contact.phonePlaceholder}
                className={fieldClass}
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-sm font-medium text-fg">
                {contact.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={contact.emailPlaceholder}
                className={fieldClass}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-sm font-medium text-fg">
                {contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={contact.messagePlaceholder}
                className={`${fieldClass} resize-y`}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={isLoading ? "btn-loading w-full sm:w-auto" : "btn-primary w-full sm:w-auto"}
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <PulseDot />
                  {contact.sending}
                </span>
              ) : (
                contact.submit
              )}
            </button>
          </>
          )}

            {hasError ? (
              <p id="contact-form-error" className="text-sm text-red-300" role="alert">
                {errorMessage}
              </p>
            ) : null}

            {status === "idle" ? (
              <p className="text-sm text-muted">{contact.note}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
