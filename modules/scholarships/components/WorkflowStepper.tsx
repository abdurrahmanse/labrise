"use client";

import { Check, Search, ShieldAlert, ShieldCheck } from "lucide-react";
import { searchWorkflowSteps } from "@/data/scholarshipsSearchData";
import { finderText as t } from "@/data/text/scholarships";
import { AccordionStep } from "@/shared/components/AccordionStep";
import { IconBadge } from "@/shared/components/IconBadge";
import { Label } from "@/shared/components/Text";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { useFinderProgress } from "../store/useFinderProgress";

const CATEGORY_ICON = { Discovery: Search, Validation: ShieldCheck, Safety: ShieldAlert } as const;
const IDS = searchWorkflowSteps.map((s) => s.number);
const CATEGORIES = Array.from(new Set(searchWorkflowSteps.map((s) => s.category)));

export function WorkflowStepper() {
  const { isDone, toggle, done, total, percent, reset } = useProgress(useFinderProgress, IDS);

  return (
    <div className="space-y-8">
      <ProgressPanel label={t.workflow.title} summary={t.workflow.progress(done, total)} percent={percent} onReset={() => reset(true)} canReset={done > 0} note={t.workflow.saved} />

      {CATEGORIES.map((category) => (
        <section key={category} aria-label={t.workflow.stage[category]} className="space-y-3">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white">
            <IconBadge icon={CATEGORY_ICON[category]} />
            {t.workflow.stage[category]}
          </h3>
          <ol className="space-y-3">
            {searchWorkflowSteps.filter((s) => s.category === category).map((step) => (
              <AccordionStep key={step.number} number={String(step.number).padStart(2, "0")} title={step.title} summary={step.summary} done={isDone(step.number)} onToggle={() => toggle(step.number)} toggleLabel={isDone(step.number) ? t.workflow.markUndone : t.workflow.markDone}>
                <div>
                  <Label as="p" tone="accent" className="mb-2">{t.workflow.instructions}</Label>
                  <ul className="space-y-2">
                    {step.actionableInstructions.map((line) => (
                      <li key={line} className="flex gap-2 font-sans text-[length:var(--text-body)] font-normal text-slate-200"><Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Label as="p" tone="accent" className="mb-2">{t.workflow.keywords}</Label>
                  <div className="flex flex-wrap gap-2">
                    {step.keyToolsOrKeywords.map((k) => (
                      <span key={k} className="border border-white/25 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-200">{k}</span>
                    ))}
                  </div>
                </div>
              </AccordionStep>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
