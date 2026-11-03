"use client";

import { Check, ChevronDown, RotateCcw } from "lucide-react";
import { professorOutreachWorkflow } from "@/data/professorsData";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { cn } from "@/lib/utils";
import { ProgressBar } from "@/modules/documents/components/ProgressBar";
import { useMounted } from "@/shared/hooks/useMounted";
import { useOutreachProgress } from "../store/useOutreachProgress";

export function OutreachStepper() {
  const mounted = useMounted();
  const doneMap = useOutreachProgress((s) => s.done);
  const toggle = useOutreachProgress((s) => s.toggle);
  const reset = useOutreachProgress((s) => s.reset);
  const state = mounted ? doneMap : {};
  const total = professorOutreachWorkflow.length;
  const done = professorOutreachWorkflow.filter((s) => state[s.stepNumber]).length;

  return (
    <div className="space-y-4">
      <div className="border-2 border-white/30 bg-canvas-card/60 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]">
        <div className="flex items-center justify-between font-mono text-xs text-slate-400">
          <span>{t.workflow.progress(done, total)}</span>
          {done > 0 && (
            <button type="button" onClick={reset} className="inline-flex cursor-pointer items-center gap-1.5 font-bold hover:text-rose-400">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> {t.workflow.reset}
            </button>
          )}
        </div>
        <div className="mt-3"><ProgressBar percent={Math.round((done / total) * 100)} label={t.workflow.title} /></div>
        <p className="mt-2 font-mono text-xs text-slate-500">{t.workflow.saved}</p>
      </div>

      <ol className="space-y-3">
        {professorOutreachWorkflow.map((step) => {
          const on = !!state[step.stepNumber];
          return (
            <li key={step.stepNumber} className={cn("border-2 backdrop-blur-xl transition-colors", on ? "border-indigo-400/60 bg-indigo-600/10" : "border-white/25 bg-canvas-card/60")}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-indigo-600 font-mono font-bold text-white">{step.stepNumber}</span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("block text-lg font-bold", on ? "text-slate-400 line-through" : "text-white")}>{step.title}</span>
                    <span className="mt-1 block font-sans text-[length:var(--text-body)] font-normal text-slate-300">{step.shortDesc}</span>
                  </span>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="space-y-4 border-t border-white/15 p-4">
                  <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-200">{step.detailedProtocol}</p>
                  <label className="inline-flex cursor-pointer items-center gap-3 font-bold text-slate-100">
                    <input type="checkbox" checked={on} onChange={() => toggle(step.stepNumber)} className="sr-only" />
                    <span className={cn("flex h-7 w-7 items-center justify-center border-2", on ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>{on && <Check className="h-4 w-4" aria-hidden />}</span>
                    {on ? t.workflow.markUndone : t.workflow.markDone}
                  </label>
                </div>
              </details>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
