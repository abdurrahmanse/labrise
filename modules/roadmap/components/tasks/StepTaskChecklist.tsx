"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import type { ChecklistItem } from "../../types/step";
import { StepTaskItem } from "./StepTaskItem";
import { legacyText } from "@/content/text/legacy";

export interface StepTaskChecklistProps {
  stepId: string;
  checklist: ChecklistItem[];
  completedItems: { [key: string]: boolean };
  onToggleItem: (index: number) => void;
}

/**
 * Actionable tasks checklist sub-section.
 */
export function StepTaskChecklist({
  stepId,
  checklist,
  completedItems,
  onToggleItem,
}: StepTaskChecklistProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {legacyText.stepTaskChecklist.t0}
        </span>
        <span className="text-[11px] text-slate-500 font-mono">
          {legacyText.stepTaskChecklist.t1}
        </span>
      </div>

      <div className="space-y-2.5">
        {checklist.map((item, idx) => {
          const isChecked = !!completedItems[`${stepId}-${idx}`];
          return (
            <StepTaskItem
              key={idx}
              index={idx}
              item={item}
              isChecked={isChecked}
              onToggle={() => onToggleItem(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StepTaskChecklist;
