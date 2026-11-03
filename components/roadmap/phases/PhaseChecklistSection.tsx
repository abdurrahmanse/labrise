import React from "react";
import { ClipboardCheck } from "lucide-react";
import { PhaseChecklistItem as PhaseChecklistItemType } from "@/data/roadmapPhasesData";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";
import { PhaseChecklistItem } from "./PhaseChecklistItem";

interface PhaseChecklistSectionProps {
  phaseNumber: number;
  checklist: PhaseChecklistItemType[];
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function PhaseChecklistSection({
  phaseNumber,
  checklist,
  checkedItems,
  onToggle,
}: PhaseChecklistSectionProps) {
  const { checklist: checklistUi, badges } = phaseDetailUiData;

  const totalChecks = checklist.length;
  const completedChecks = checklist.filter(
    (item) => checkedItems[item.id]
  ).length;
  const progressPercent =
    totalChecks > 0 ? Math.round((completedChecks / totalChecks) * 100) : 0;

  return (
    <section id="checklist" className="scroll-mt-24 space-y-6">
      <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
              <ClipboardCheck className="w-4 h-4" />
              <span>
                {badges.phasePrefix} {String(phaseNumber).padStart(2, "0")} {checklistUi.auditSuffix}
              </span>
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {checklistUi.heading}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-300">
              {completedChecks} {checklistUi.ofSeparator} {totalChecks} {checklistUi.verifiedSuffix}
            </span>
            <span className="px-3 py-1 rounded-none text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              {progressPercent}% {checklistUi.completeSuffix}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Checkbox Items */}
        <div className="space-y-3">
          {checklist.map((item) => (
            <PhaseChecklistItem
              key={item.id}
              item={item}
              isChecked={Boolean(checkedItems[item.id])}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhaseChecklistSection;
