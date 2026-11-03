"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { researchFitChecklist, professorOutreachControlsData } from "@/content/professors/professorsData";

export function ResearchFitChecklistSection() {
  const [checkedFit, setCheckedFit] = useState<Record<string, boolean>>({});
  const { checklistTitle } = professorOutreachControlsData.sections;

  const toggleItem = (id: string) => {
    setCheckedFit((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedFit).filter(Boolean).length;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <h4 className="text-sm font-bold text-white">{checklistTitle}</h4>
        <span className="text-xs font-mono text-teal-300">
          {completedCount} of {researchFitChecklist.length} verified
        </span>
      </div>

      <div className="space-y-2.5">
        {researchFitChecklist.map((item) => {
          const isChecked = Boolean(checkedFit[item.id]);

          return (
            <label
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-teal-950/40 border-teal-500/40 text-teal-200"
                  : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/15"
              }`}
            >
              <div
                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                  isChecked
                    ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
                    : "border border-slate-600 hover:border-slate-400"
                }`}
              >
                {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>
              <div className="text-xs space-y-0.5">
                <span className={isChecked ? "line-through text-slate-400 font-normal" : "font-normal"}>
                  {item.label}
                </span>
                {item.tip && <p className="text-[11px] text-slate-500 font-mono">{item.tip}</p>}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default ResearchFitChecklistSection;
