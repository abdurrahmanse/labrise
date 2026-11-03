"use client";

import { Check, ChevronDown, RotateCcw, Search, ShieldAlert, ShieldCheck } from "lucide-react";
import { searchWorkflowSteps, type SearchWorkflowStep } from "@/data/scholarshipsSearchData";
import { finderText as t } from "@/data/text/scholarships";
import { cn } from "@/lib/utils";
import { ProgressBar } from "@/modules/documents/components/ProgressBar";
import { useMounted } from "@/shared/hooks/useMounted";
import { useFinderProgress } from "../store/useFinderProgress";

const CATEGORY_ICON = { Discovery: Search, Validation: ShieldCheck, Safety: ShieldAlert } as const;

function Step({ step, done, onToggle }: { step: SearchWorkflowStep; done: boolean; onToggle: () => void }) {
  return (
    <li className={cn("border-2 backdrop-blur-xl transition-colors", done ? "border-indigo-400/60 bg-indigo-600/10" : "border-white/25 bg-canvas-card/60")}>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-start gap-4 p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-indigo-600 font-mono font-bold text-white">{String(step.number).padStart(2, "0")}</span>
          <span className="min-w-0 flex-1">
            <span className={cn("block text-lg font-bold", done ? "text-slate-400 line-through" : "text-white")}>{step.title}</span>
            <span className="mt-1 block font-sans text-[length:var(--text-body)] font-normal text-slate-300">{step.summary}</span>
          </span>
          <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <div className="space-y-4 border-t border-white/15 p-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-indigo-300">{t.workflow.instructions}</p>
            <ul className="space-y-2">
              {step.actionableInstructions.map((line) => (
                <li key={line} className="flex gap-2 font-sans text-[length:var(--text-body)] font-normal text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-indigo-300">{t.workflow.keywords}</p>
            <div className="flex flex-wrap gap-2">
              {step.keyToolsOrKeywords.map((k) => (
                <span key={k} className="border border-white/25 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-200">{k}</span>
              ))}
            </div>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-3 font-bold text-slate-100">
            <input type="checkbox" checked={done} onChange={onToggle} className="sr-only" />
            <span className={cn("flex h-7 w-7 items-center justify-center border-2", done ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>
              {done && <Check className="h-4 w-4" aria-hidden />}
            </span>
            {done ? t.workflow.markUndone : t.workflow.markDone}
          </label>
        </div>
      </details>
    </li>
  );
}

export function WorkflowStepper() {
  const mounted = useMounted();
  const doneMap = useFinderProgress((s) => s.done);
  const toggle = useFinderProgress((s) => s.toggle);
  const reset = useFinderProgress((s) => s.reset);
  const state = mounted ? doneMap : {};

  const total = searchWorkflowSteps.length;
  const done = searchWorkflowSteps.filter((s) => state[s.number]).length;
  const percent = Math.round((done / total) * 100);
  const categories = Array.from(new Set(searchWorkflowSteps.map((s) => s.category)));

  return (
    <div className="space-y-8">
      <div className="border-2 border-white/30 bg-canvas-card/60 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-400">{t.workflow.progress(done, total)}</p>
          {done > 0 && (
            <button type="button" onClick={reset} className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-rose-400">
              <RotateCcw className="h-4 w-4" aria-hidden /> {t.workflow.reset}
            </button>
          )}
        </div>
        <div className="mt-3"><ProgressBar percent={percent} label={t.workflow.title} /></div>
        <p className="mt-2 font-mono text-xs text-slate-500">{t.workflow.saved}</p>
      </div>

      {categories.map((category) => {
        const Icon = CATEGORY_ICON[category];
        return (
          <section key={category} aria-label={t.workflow.stage[category]} className="space-y-3">
            <h3 className="flex items-center gap-3 text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center bg-indigo-600 text-white"><Icon className="h-5 w-5" aria-hidden /></span>
              {t.workflow.stage[category]}
            </h3>
            <ol className="space-y-3">
              {searchWorkflowSteps.filter((s) => s.category === category).map((step) => (
                <Step key={step.number} step={step} done={!!state[step.number]} onToggle={() => toggle(step.number)} />
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
