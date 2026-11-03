import React from "react";
import { AlertTriangle, CheckCircle2, Award } from "lucide-react";
import { professorOutreachControlsData } from "@/content/professors/professorsData";
import { legacyText } from "@/content/text/legacy";

export function OutreachComparisonSection() {
  const { comparisonTitle, comparisonSubtitle } = professorOutreachControlsData.sections;
  const { weakTitle, weakIssues, strongTitle, strongAssets } = professorOutreachControlsData.comparison;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          <span>{legacyText.outreachComparisonSection.t0}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {comparisonTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {comparisonSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weak Outreach Box */}
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>{weakTitle}</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {weakIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">✕</span>
                <span className="leading-relaxed">{issue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Strong Outreach Box */}
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>{strongTitle}</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {strongAssets.map((asset, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="leading-relaxed">{asset}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OutreachComparisonSection;
