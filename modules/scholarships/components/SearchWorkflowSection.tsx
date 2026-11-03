import React from "react";
import { Compass } from "lucide-react";
import { searchWorkflowSteps, scholarshipFinderControlsData } from "@/data/scholarshipsSearchData";
import { scholarshipsUiData } from "@/data/scholarshipsUiData";

export function SearchWorkflowSection() {
  const { workflowTitle, workflowSubtitle } = scholarshipFinderControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>{scholarshipsUiData.workflowBadge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {workflowTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {workflowSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {searchWorkflowSteps.map((step) => (
          <div
            key={step.number}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-teal-500/30 transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-mono text-xs font-bold flex items-center justify-center">
                {String(step.number).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                {step.category}
              </span>
            </div>

            <h4 className="text-sm font-bold text-white">{step.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {step.summary}
            </p>

            <ul className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-slate-400">
              {step.actionableInstructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">›</span>
                  <span className="leading-relaxed">{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchWorkflowSection;
