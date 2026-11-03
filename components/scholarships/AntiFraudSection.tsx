import React from "react";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import { scholarshipFinderControlsData } from "@/data/scholarshipsSearchData";

export function AntiFraudSection() {
  const { fraudTitle, fraudBadge } = scholarshipFinderControlsData.sections;
  const { fraudRules } = scholarshipFinderControlsData;

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-4">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>{fraudBadge}</span>
        </span>
        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
          {fraudTitle}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {fraudRules.map((rule, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">{rule.title}</strong>
              <span className="leading-relaxed">{rule.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AntiFraudSection;
