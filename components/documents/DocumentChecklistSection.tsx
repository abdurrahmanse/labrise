"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { DocumentGuideline, documentsGuideControlsData } from "@/data/documentsData";

export interface DocumentChecklistSectionProps {
  document: DocumentGuideline;
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
}

export function DocumentChecklistSection({
  document,
  checkedItems,
  onToggleItem
}: DocumentChecklistSectionProps) {
  const { checklistTitle } = documentsGuideControlsData.sections;
  const completedCount = document.checklistItems.filter((i) => checkedItems[i.id]).length;

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-white/5 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <h4 className="text-sm font-bold text-teal-400 font-mono uppercase tracking-wider">
          {checklistTitle}
        </h4>
        <span className="text-xs font-mono text-slate-400">
          {completedCount} of {document.checklistItems.length} verified
        </span>
      </div>

      <div className="space-y-2">
        {document.checklistItems.map((item) => {
          const isChecked = Boolean(checkedItems[item.id]);

          return (
            <label
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-teal-950/40 border-teal-500/40 text-teal-200"
                  : "bg-slate-900/40 border-white/5 text-slate-300 hover:border-white/15"
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

export default DocumentChecklistSection;
