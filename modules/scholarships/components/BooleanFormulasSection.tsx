import React from "react";
import { Terminal, Code2, Sparkles } from "lucide-react";
import { searchQueryFormulas, scholarshipFinderControlsData } from "@/content/scholarships/scholarshipsSearchData";
import { scholarshipsUiData } from "@/content/scholarships/scholarshipsUiData";
import { CopyButton } from "@/shared/ui/CopyButton";

export function BooleanFormulasSection() {
  const { booleanTitle, booleanSubtitle } = scholarshipFinderControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Terminal className="w-4 h-4" />
          <span>{scholarshipsUiData.advancedDiscoveryBadge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {booleanTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {booleanSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {searchQueryFormulas.map((formula) => (
          <div
            key={formula.id}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="inline-flex items-center gap-2 text-sm font-bold text-white">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <span>{formula.title}</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {formula.targetEngines.map((eng, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {eng}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300">{formula.purpose}</p>

              {/* Code Box */}
              <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-teal-300 border border-white/5 break-all select-all">
                {formula.query}
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 flex-wrap">
                <strong className="inline-flex items-center gap-1 text-slate-300 font-mono">
                  <Sparkles className="w-3 h-3 text-teal-400" />
                  <span>{scholarshipsUiData.exampleLabel}</span>
                </strong>
                <span>{formula.exampleFilled}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-end">
              <CopyButton textToCopy={formula.query} label={scholarshipsUiData.copyQueryLabel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooleanFormulasSection;
