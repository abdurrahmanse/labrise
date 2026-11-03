"use client";

import { RotateCcw, Trophy } from "lucide-react";
import { documentsData } from "@/data/documentsData";
import { documentsHubText as t } from "@/data/text/documents";
import { useMounted } from "@/shared/hooks/useMounted";
import { progressOf } from "../lib/progress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";
import { ProgressBar } from "./ProgressBar";

/** Overall readiness across every document. */
export function DocumentsProgress() {
  const mounted = useMounted();
  const checked = useDocumentChecklist((s) => s.checked);
  const reset = useDocumentChecklist((s) => s.reset);
  const { done, total, percent } = progressOf(documentsData, mounted ? checked : {});

  return (
    <section className="border-2 border-white/30 bg-canvas-card/60 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]" aria-label={t.progress.title}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center bg-indigo-600 text-white">
            <Trophy className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white">{t.progress.title}</h2>
            <p className="font-mono text-xs text-slate-400">{t.progress.done(done, total)}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-white">{t.progress.percent(percent)}</span>
          {done > 0 && (
            <button type="button" onClick={reset} className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-rose-400">
              <RotateCcw className="h-4 w-4" aria-hidden /> {t.progress.reset}
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        <ProgressBar percent={percent} label={t.progress.title} />
      </div>
      <p className="mt-2 font-mono text-xs text-slate-500">{t.progress.note}</p>
    </section>
  );
}
