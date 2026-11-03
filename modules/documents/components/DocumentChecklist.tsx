"use client";

import { Check } from "lucide-react";
import type { DocumentGuideline } from "@/data/documentsData";
import { documentDetailText as t } from "@/data/text/documents";
import { cn } from "@/lib/utils";
import { useMounted } from "@/shared/hooks/useMounted";
import { progressOf } from "../lib/progress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";
import { ProgressBar } from "./ProgressBar";

/** The checklist for one document. Ticks are saved in this browser. */
export function DocumentChecklist({ doc }: { doc: DocumentGuideline }) {
  const mounted = useMounted();
  const checked = useDocumentChecklist((s) => s.checked);
  const toggle = useDocumentChecklist((s) => s.toggle);
  const state = mounted ? checked : {};
  const { done, total, percent } = progressOf([doc], state);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-mono text-xs text-slate-400">{t.progress(done, total)}</p>
        <ProgressBar percent={percent} label={doc.name} />
      </div>
      <ul className="space-y-2">
        {doc.checklistItems.map((item) => {
          const on = !!state[item.id];
          return (
            <li key={item.id}>
              <label className={cn("flex cursor-pointer items-start gap-3 border-2 p-3 transition-colors", on ? "border-indigo-400 bg-indigo-600/15" : "border-white/20 bg-white/[0.03] hover:border-indigo-400/60")}>
                <input type="checkbox" checked={on} onChange={() => toggle(item.id)} className="sr-only" />
                <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2", on ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>
                  {on && <Check className="h-3.5 w-3.5" aria-hidden />}
                </span>
                <span>
                  <span className={cn("block font-bold", on ? "text-slate-400 line-through" : "text-slate-100")}>{item.label}</span>
                  {item.tip && <span className="mt-0.5 block font-sans text-sm font-normal text-slate-400">{item.tip}</span>}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
