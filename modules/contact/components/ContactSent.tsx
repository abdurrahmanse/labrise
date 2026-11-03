import { CheckCircle2 } from "lucide-react";
import { CopyButton } from "@/shared/ui/CopyButton";
import { contactPageText as t } from "@/content/text/contact";
import { surface } from "@/shared/components/Surface";
import { buildMessage } from "../utils/buildMailto";
import type { ContactValues } from "../utils/contactSchema";

interface ContactSentProps {
  values: ContactValues;
  onReset: () => void;
}

/** Confirmation shown after the email app is opened, with the text to copy if it did not open. */
export function ContactSent({ values, onReset }: ContactSentProps) {
  const { subject, body } = buildMessage(values);
  return (
    <div className={surface({ tone: "panel", depth: "md", padding: "xl", className: "space-y-5" })} role="status">
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
        <button type="button" onClick={onReset} className="cursor-pointer px-3 py-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200">
          {t.sent.again}
        </button>
      </div>
    </div>
  );
}
