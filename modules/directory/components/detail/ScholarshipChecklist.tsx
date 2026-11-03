"use client";

import { Check, RotateCcw } from "lucide-react";
import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { cn } from "@/lib/utils";
import { ProgressBar } from "@/modules/documents/components/ProgressBar";
import { countDone, stepKey, useApplyProgress } from "@/modules/apply/store/useApplyProgress";
import { useMounted } from "@/shared/hooks/useMounted";

/** A checklist for one scholarship. It reuses the apply-progress store with a key per scholarship. */
export function ScholarshipChecklist({ slug, items }: { slug: string; items: string[] }) {
  const track = `scholarship-${slug}`;
  const mounted = useMounted();
  const doneMap = useApplyProgress((s) => s.done);
  const toggle = useApplyProgress((s) => s.toggle);
  const reset = useApplyProgress((s) => s.reset);
  const state = mounted ? doneMap : {};
  const { done, percent } = countDone(state, track, items.length);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between font-mono text-xs text-slate-400">
          <span>{t.checklist.progress(done, items.length)}</span>
          {done > 0 && (
            <button type="button" onClick={() => reset(track)} className="inline-flex cursor-pointer items-center gap-1.5 font-bold hover:text-rose-400">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> {t.checklist.reset}
            </button>
          )}
        </div>
        <ProgressBar percent={percent} label={t.checklist.title} />
      </div>
      <ul className="space-y-2">
        {items.map((label, i) => {
          const on = !!state[stepKey(track, i)];
          return (
            <li key={label}>
              <label className={cn("flex cursor-pointer items-start gap-3 border-2 p-3 transition-colors", on ? "border-indigo-400 bg-indigo-600/15" : "border-white/20 bg-white/[0.03] hover:border-indigo-400/60")}>
                <input type="checkbox" checked={on} onChange={() => toggle(track, i)} className="sr-only" aria-label={on ? t.checklist.markUndone : t.checklist.markDone} />
                <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2", on ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>
                  {on && <Check className="h-3.5 w-3.5" aria-hidden />}
                </span>
                <span className={cn("font-bold", on ? "text-slate-400 line-through" : "text-slate-100")}>{label}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="font-mono text-xs text-slate-500">{t.checklist.saved}</p>
    </div>
  );
}
