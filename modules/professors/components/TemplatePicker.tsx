"use client";

import { useState } from "react";
import { Paperclip, Lightbulb, Ruler, Mail } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { coldEmailTemplates } from "@/data/professorsData";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { cn } from "@/lib/utils";

export function TemplatePicker() {
  const [id, setId] = useState(coldEmailTemplates[0].id);
  const template = coldEmailTemplates.find((x) => x.id === id) ?? coldEmailTemplates[0];

  return (
    <div className="space-y-5">
      <div role="tablist" className="flex flex-wrap gap-2">
        {coldEmailTemplates.map((x) => (
          <button key={x.id} role="tab" type="button" aria-selected={x.id === id} onClick={() => setId(x.id)} className={cn("inline-flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-bold transition-colors", x.id === id ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10")}>
            <Mail className="h-4 w-4" aria-hidden /> {x.name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <p className="font-sans text-sm font-normal text-slate-400"><span className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.templates.for}</span> {template.targetAudience}</p>
          <pre className="whitespace-pre-wrap border-2 border-indigo-400/60 bg-canvas-base/70 p-5 font-mono text-sm leading-relaxed text-slate-200">{template.body}</pre>
          <CopyButton textToCopy={template.body} label={t.templates.copy} />
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-300"><Mail className="h-4 w-4" aria-hidden /> {t.templates.subjects}</p>
            <ul className="space-y-2">
              {template.subjectLines.map((s) => (
                <li key={s} className="border border-white/20 bg-white/[0.03] p-2.5 font-mono text-xs text-slate-200">{s}</li>
              ))}
            </ul>
          </div>
          <p className="flex items-center gap-2 font-mono text-xs text-slate-400"><Ruler className="h-4 w-4 text-indigo-400" aria-hidden /> {t.templates.words}: {template.wordCount}</p>
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-300"><Paperclip className="h-4 w-4" aria-hidden /> {t.templates.attachments}</p>
            <ul className="list-disc space-y-1 pl-5 font-sans text-sm font-normal text-slate-200">
              {template.recommendedAttachments.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-300"><Lightbulb className="h-4 w-4" aria-hidden /> {t.templates.tips}</p>
            <ul className="list-disc space-y-1 pl-5 font-sans text-sm font-normal text-slate-200">
              {template.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
