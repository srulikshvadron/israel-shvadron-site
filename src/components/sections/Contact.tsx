"use client";

import { FormEvent, useState } from "react";
import type { Copy, Locale } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SuccessSwoosh } from "@/components/brand/SuccessSwoosh";
import { PulseDot } from "@/components/brand/PulseDot";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { phoneHref, publicPhone, whatsappHref } from "@/lib/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClass = "field";

export function Contact({ locale, copy }: { locale: Locale; copy: Copy }) {
  const contact = copy.contact;
  const whatsapp = whatsappHref(copy.whatsappPrefill);
  const phoneNumber = publicPhone();
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
    setErrorMessage("");

    if (!phone.trim() && !email.trim()) {
      setStatus("error");
      setErrorMessage(copy.api.contact);
      return;
    }

    setStatus("loading");

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
      <ul className="mb-10 grid gap-4 md:grid-cols-3">
        {contact.trust.map((item) => (
          <li key={item.title}>
            <Reveal className="h-full">
              <div className="trust-item">
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="mt-1 text-[1.0625rem] leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal variant="rise">
          <div className="space-y-5">
            <div className="studio-card">
              <h3 className="font-display text-xl font-semibold text-fg">{contact.whatsappTitle}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">{contact.whatsappBody}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={whatsapp ?? "#contact"}
                  className="w-full sm:w-auto"
                  {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {contact.whatsappCta}
                </Button>
                {phoneNumber ? (
                  <Button href={phoneHref(phoneNumber)} variant="secondary" className="w-full sm:w-auto">
                    {contact.callCta}
                  </Button>
                ) : null}
              </div>
              {phoneNumber ? (
                <p className="mt-4 text-[1.0625rem] text-muted">
                  {contact.phoneLine}{" "}
                  <a
                    href={phoneHref(phoneNumber)}
                    dir="ltr"
                    className="inline-block font-semibold text-fg underline-offset-4 hover:text-accent hover:underline"
                  >
                    {phoneNumber}
                  </a>
                </p>
              ) : null}
            </div>
            <div className="studio-card studio-card-quiet">
              <h3 className="font-display text-xl font-semibold text-fg">{contact.briefTitle}</h3>
              <ul className="mt-4 space-y-2 text-[1.0625rem] text-muted">
                {contact.briefItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-semibold text-fg">{contact.afterTitle}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">{contact.after}</p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="rise">
          <form
            onSubmit={handleSubmit}
            className="studio-card studio-card-quiet space-y-5"
            noValidate
            aria-busy={isLoading}
          >
          {status === "success" ? (
            <div className="success-panel" role="status">
              <SuccessSwoosh className="success-swoosh h-9 w-52" />
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

            <p id="contact-reach-hint" className="text-[1.0625rem] font-medium text-fg">
              {contact.reachHint}
            </p>

            <div className="space-y-2">
              <label htmlFor="contact-phone" className="block text-sm font-medium text-fg">
                {contact.phoneLabel}
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
                aria-describedby={hasError ? "contact-reach-hint contact-form-error" : "contact-reach-hint"}
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
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-reach-hint contact-form-error" : "contact-reach-hint"}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-sm font-medium text-fg">
                {contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={8}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={contact.messagePlaceholder}
                className={`${fieldClass} min-h-44 resize-y`}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            {hasError ? (
              <p id="contact-form-error" className="text-base font-medium text-red-300" role="alert">
                {errorMessage}
              </p>
            ) : null}

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

            {status === "idle" ? (
              <p className="text-sm text-muted">{contact.note}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
