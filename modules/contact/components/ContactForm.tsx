"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { contactPageText as t, contactTopics } from "@/data/text/contact";
import { cn } from "@/lib/utils";
import { buildMailto, buildMessage } from "../lib/buildMailto";
import { contactSchema, MIN_MESSAGE, type ContactErrors, type ContactValues } from "../lib/contactSchema";

const EMPTY: ContactValues = { topic: "correction", name: "", email: "", page: "", message: "" };

const fieldClass =
  "w-full border-2 border-white/30 bg-white/[0.05] px-4 py-3 font-sans text-base font-normal text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-indigo-400";
const labelClass = "mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400";

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState<ContactValues | null>(null);

  const set = <K extends keyof ContactValues>(key: K, value: ContactValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: ContactErrors = {};
      for (const issue of result.error.issues) next[issue.path[0] as keyof ContactValues] = true;
      setErrors(next);
      return;
    }
    setSent(result.data);
    window.location.href = buildMailto(result.data);
  };

  if (sent) {
    const { subject, body } = buildMessage(sent);
    return (
      <div className="space-y-5 border-2 border-white/30 bg-canvas-card/60 p-6 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]" role="status">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-emerald-500 text-white">
            <CheckCircle2 className="h-7 w-7" aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-white">{t.sent.title}</h2>
            <p className="mt-1 font-sans font-normal text-slate-300">{t.sent.body}</p>
          </div>
        </div>
        <pre className="whitespace-pre-wrap border-2 border-indigo-400/60 bg-canvas-base/70 p-4 font-mono text-sm leading-relaxed text-slate-200">
          {subject + "\n\n" + body}
        </pre>
        <div className="flex flex-wrap gap-3">
          <CopyButton textToCopy={`${subject}\n\n${body}`} label={t.sent.copy} />
          <button
            type="button"
            onClick={() => {
              setSent(null);
              setValues(EMPTY);
            }}
            className="cursor-pointer px-3 py-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200"
          >
            {t.sent.again}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6 border-2 border-white/30 bg-canvas-card/60 p-6 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
        <span className="flex h-9 w-9 items-center justify-center bg-indigo-600 text-white">
          <Send className="h-5 w-5" aria-hidden />
        </span>
        {t.form.title}
      </h2>

      <fieldset>
        <legend className={labelClass}>{t.form.topic}</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactTopics.map(({ value, label, hint, Icon }) => {
            const active = values.topic === value;
            return (
              <label
                key={value}
                className={cn(
                  "flex cursor-pointer items-start gap-3 border-2 p-3 transition-colors",
                  active ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/25 bg-white/[0.03] text-slate-200 hover:border-indigo-400/70"
                )}
              >
                <input type="radio" name="topic" value={value} checked={active} onChange={() => set("topic", value)} className="sr-only" />
                <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                <span>
                  <span className="block font-bold">{label}</span>
                  <span className={cn("block font-sans text-sm font-normal", active ? "text-white/80" : "text-slate-400")}>{hint}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>{t.form.name}</label>
          <input id="contact-name" value={values.name} onChange={(e) => set("name", e.target.value)} placeholder={t.form.namePlaceholder} autoComplete="name" aria-invalid={errors.name} className={cn(fieldClass, errors.name && "border-rose-400")} />
          {errors.name && <p className="mt-1 text-sm text-rose-400">{t.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>{t.form.email}</label>
          <input id="contact-email" type="email" value={values.email} onChange={(e) => set("email", e.target.value)} placeholder={t.form.emailPlaceholder} autoComplete="email" aria-invalid={errors.email} className={cn(fieldClass, errors.email && "border-rose-400")} />
          {errors.email && <p className="mt-1 text-sm text-rose-400">{t.errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-page" className={labelClass}>{t.form.page}</label>
        <input id="contact-page" value={values.page} onChange={(e) => set("page", e.target.value)} placeholder={t.form.pagePlaceholder} maxLength={200} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>{t.form.message}</label>
        <textarea id="contact-message" rows={4} value={values.message} onChange={(e) => set("message", e.target.value)} placeholder={t.form.messagePlaceholder} aria-invalid={errors.message} className={cn(fieldClass, "resize-y", errors.message && "border-rose-400")} />
        <div className="mt-1 flex justify-between gap-3 text-sm">
          <span className="text-rose-400">{errors.message ? t.errors.message(MIN_MESSAGE) : ""}</span>
          <span className="font-mono text-xs text-slate-500">{t.form.counter(values.message.trim().length, MIN_MESSAGE)}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex cursor-pointer items-center gap-2 border-2 border-transparent bg-indigo-600 px-6 py-3 font-bold uppercase tracking-wider text-sm text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5">
          <Send className="h-4 w-4" aria-hidden /> {t.form.submit}
        </button>
        <p className="max-w-sm font-sans text-sm font-normal text-slate-400">{t.form.note}</p>
      </div>
    </form>
  );
}
