"use client";

import { Button } from "@/shared/ui/Button";
import { Send } from "lucide-react";
import { contactPageText as t } from "@/content/text/contact";
import { cn } from "@/shared/utils/cn";
import { surface } from "@/shared/components/Surface";
import { useContactForm } from "../hooks/useContactForm";
import { MIN_MESSAGE } from "../utils/contactSchema";
import { ContactField, fieldClass } from "./ContactField";
import { ContactSent } from "./ContactSent";
import { ContactTopicPicker } from "./ContactTopicPicker";

export function ContactForm() {
  const { values, errors, sent, setField, submit, reset } = useContactForm();

  if (sent) return <ContactSent values={sent} onReset={reset} />;

  return (
    <form onSubmit={submit} noValidate className={surface({ tone: "panel", depth: "md", padding: "xl", className: "space-y-6" })}>
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
        <span className="flex h-9 w-9 items-center justify-center bg-indigo-600 text-white">
          <Send className="h-5 w-5" aria-hidden />
        </span>
        {t.form.title}
      </h2>

      <ContactTopicPicker value={values.topic} onChange={(topic) => setField("topic", topic)} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <ContactField id="contact-name" label={t.form.name} error={errors.name ? t.errors.name : undefined}>
          {({ invalid, ...props }) => (
            <input {...props} value={values.name} onChange={(e) => setField("name", e.target.value)} placeholder={t.form.namePlaceholder} autoComplete="name" aria-invalid={invalid} />
          )}
        </ContactField>
        <ContactField id="contact-email" label={t.form.email} error={errors.email ? t.errors.email : undefined}>
          {({ invalid, ...props }) => (
            <input {...props} type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} placeholder={t.form.emailPlaceholder} autoComplete="email" aria-invalid={invalid} />
          )}
        </ContactField>
      </div>

      <ContactField id="contact-page" label={t.form.page}>
        {({ id }) => (
          <input id={id} value={values.page} onChange={(e) => setField("page", e.target.value)} placeholder={t.form.pagePlaceholder} maxLength={200} className={fieldClass} />
        )}
      </ContactField>

      <div>
        <ContactField id="contact-message" label={t.form.message} invalid={errors.message}>
          {({ invalid, className, ...props }) => (
            <textarea {...props} rows={4} value={values.message} onChange={(e) => setField("message", e.target.value)} placeholder={t.form.messagePlaceholder} aria-invalid={invalid} className={cn(className, "resize-y")} />
          )}
        </ContactField>
        <div className="mt-1 flex justify-between gap-3 text-sm">
          <span className="text-rose-400">{errors.message ? t.errors.message(MIN_MESSAGE) : ""}</span>
          <span className="font-mono text-xs text-slate-500">{t.form.counter(values.message.trim().length, MIN_MESSAGE)}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" leftIcon={<Send className="h-4 w-4" aria-hidden />}>{t.form.submit}</Button>
        <p className="max-w-sm font-sans text-sm font-normal text-slate-400">{t.form.note}</p>
      </div>
    </form>
  );
}
