import React from "react";
import { Users } from "lucide-react";
import { professorOutreachWorkflow, professorOutreachControlsData } from "@/content/professors/professorsData";
import { legacyText } from "@/content/text/legacy";

export function OutreachWorkflowSection() {
  const { workflowTitle, workflowSubtitle } = professorOutreachControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Users className="w-4 h-4" />
          <span>{legacyText.outreachWorkflowSection.t0}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {workflowTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {workflowSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {professorOutreachWorkflow.map((step) => (
          <div
            key={step.stepNumber}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                {String(step.stepNumber).padStart(2, "0")}
              </span>
              <h4 className="text-sm font-bold text-white">{step.title}</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">{step.detailedProtocol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutreachWorkflowSection;
