import React from "react";
import { Check } from "lucide-react";
import { PhaseChecklistItem as PhaseChecklistItemType } from "@/data/roadmapPhasesData";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

interface PhaseChecklistItemProps {
  item: PhaseChecklistItemType;
  isChecked: boolean;
  onToggle: (id: string) => void;
}

export function PhaseChecklistItem({
  item,
  isChecked,
  onToggle,
}: PhaseChecklistItemProps) {
  const { checklist } = phaseDetailUiData;

  return (
    <label
      onClick={() => onToggle(item.id)}
      className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
        isChecked
          ? "bg-teal-950/40 border-teal-500/50 text-teal-100 shadow-md"
          : "bg-[#0b0b0c] border-white/5 text-slate-300 hover:border-white/20"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
          isChecked
            ? "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold"
            : "border border-slate-600 hover:border-slate-400 bg-white/5"
        }`}
      >
        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </div>
      <div className="text-xs sm:text-sm space-y-1">
        <span
          className={
            isChecked
              ? "line-through text-slate-400 font-normal"
              : "font-semibold text-white"
          }
        >
          {item.label}
        </span>
        {item.tip && (
          <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
            {checklist.proTipPrefix} {item.tip}
          </p>
        )}
      </div>
    </label>
  );
}

export default PhaseChecklistItem;
