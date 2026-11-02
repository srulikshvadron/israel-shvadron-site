"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "שליחת ההודעה נכשלה. נסו שוב.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
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
      eyebrow="הצעת מחיר"
      className="border-t border-line"
    >
      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl space-y-5 rounded-xl border border-line bg-bg-elevated/50 p-6 sm:p-8"
          noValidate
          aria-busy={isLoading}
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
              className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70"
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
              className="w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70"
              required
              disabled={isLoading}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? "contact-form-error" : undefined}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#042f2e] transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isLoading ? "שולח..." : contact.form.submitLabel}
          </button>

          {status === "success" ? (
            <p className="text-sm text-accent" role="status">
              ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.
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
    </Section>
  );
}
