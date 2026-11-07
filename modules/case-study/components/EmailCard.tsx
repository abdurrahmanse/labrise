import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import { caseStudyText as t } from "../text";
import type { EmailMessage } from "../types";

/** One email as it was sent, with a short reason for each part. */
export function EmailCard({ email }: { email: EmailMessage }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      <Surface tone="panel" depth="sm" padding="lg" className="space-y-3">
        <dl className="space-y-1 border-b border-white/15 pb-3 font-sans text-sm">
          <div className="flex gap-2"><dt className="w-16 shrink-0 font-mono text-xs uppercase text-slate-400">{t.email.subject}</dt><dd className="font-bold text-white">{email.subject}</dd></div>
          <div className="flex gap-2"><dt className="w-16 shrink-0 font-mono text-xs uppercase text-slate-400">{t.email.to}</dt><dd className="text-slate-200">{email.to}</dd></div>
          <div className="flex gap-2"><dt className="w-16 shrink-0 font-mono text-xs uppercase text-slate-400">{t.email.sent}</dt><dd className="text-slate-200">{email.sent}</dd></div>
        </dl>
        <div className="space-y-3 font-sans text-sm text-slate-200">
          {email.body.map((line) => <p key={line}>{line}</p>)}
        </div>
      </Surface>
      <div className="space-y-2">
        <Label tone="accent">{t.email.whyTitle}</Label>
        <ul className="space-y-2">
          {email.notes.map((n) => (
            <li key={n.part} className="border border-white/20 p-3 font-sans text-sm">
              <span className="font-bold text-white">{n.part}. </span>
              <span className="text-slate-300">{n.why}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
