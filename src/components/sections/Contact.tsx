"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClass = "field";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);
  const whatsapp = whatsappHref();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message, company }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        confirmationSent?: boolean;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "שליחת ההודעה נכשלה. נסו שוב.");
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
      setErrorMessage("לא ניתן להתחבר לשרת. בדקו את החיבור ונסו שוב.");
    }
  }

  const hasError = status === "error";
  const isLoading = status === "loading";

  return (
    <Section
      id={contact.id}
      title={contact.title}
      subtitle={contact.subtitle}
      eyebrow={contact.eyebrow}
      className="border-t border-line"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <div className="studio-card studio-card-quiet border-accent/30 bg-accent-soft">
            <h3 className="font-display text-2xl font-semibold text-fg">
              {contact.whatsappTitle}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{contact.whatsappBody}</p>
            {whatsapp ? (
              <Button
                href={whatsapp}
                className="mt-6 w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsappCta}
              </Button>
            ) : (
              <p className="mt-6 leading-relaxed text-fg">{contact.whatsappPending}</p>
            )}
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="studio-card studio-card-quiet space-y-5"
          noValidate
          aria-busy={isLoading}
        >
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="contact-company">חברה</label>
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
                className={fieldClass}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-phone" className="block text-sm font-medium text-fg">
                {contact.form.phoneLabel}
                <span className="ms-2 font-normal text-muted">{contact.form.phoneHint}</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={contact.form.phonePlaceholder}
                className={fieldClass}
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
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
                className={fieldClass}
                required
                disabled={isLoading}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "contact-form-error" : undefined}
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
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isLoading ? "שולח..." : contact.form.submitLabel}
            </button>

            {status === "success" ? (
              <p className="text-sm text-accent" role="status">
                {confirmationSent ? contact.successConfirmed : contact.success}
              </p>
            ) : null}

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
