"use client";

import React from "react";
import type { ChecklistItem } from "../../types/step";

export interface StepTaskItemProps {
  item: ChecklistItem;
  isChecked: boolean;
  onToggle: () => void;
  index?: number;
}

/**
 * Individual actionable task item component with interactive completion state,
 * checkbox input, and strikethrough styling.
 */
export function StepTaskItem({ item, isChecked, onToggle }: StepTaskItemProps) {
  return (
    <div
      onClick={onToggle}
      className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start gap-3.5 select-none ${
        isChecked
          ? "bg-emerald-950/25 border-emerald-500/40 text-slate-200 line-through opacity-85 shadow-sm"
          : "bg-canvas-base border-white/5 text-slate-300 hover:border-white/20 hover:bg-canvas-base"
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className="mt-1 h-4 w-4 rounded border-white/20 text-emerald-500 focus:ring-0 cursor-pointer shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="font-heading font-bold text-white mb-0.5 text-xs sm:text-sm">
          {item.task}
        </div>
        <div className="leading-relaxed text-slate-400 text-xs">
          {item.detail}
        </div>
      </div>
    </div>
  );
}

export default StepTaskItem;
