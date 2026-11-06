import React from "react";
import { Sparkles, AlertTriangle } from "lucide-react";
import { legacyText } from "@/content/text/legacy";

export interface StepFacultyIntelProps {
  proTips?: string[];
  commonPitfalls?: string[];
}

/**
 * Faculty Intel sub-section: Pro-Tips vs. Rejection Pitfalls comparative 2-column grid.
 */
export function StepFacultyIntel({ proTips, commonPitfalls }: StepFacultyIntelProps) {
  const hasTips = proTips && proTips.length > 0;
  const hasPitfalls = commonPitfalls && commonPitfalls.length > 0;

  if (!hasTips && !hasPitfalls) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pro Tips Box */}
      {hasTips && (
        <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
          <div className="text-xs font-bold text-emerald-300 flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Faculty Pro-Tips & Insider Secrets:</span>
          </div>
          <div className="space-y-2">
            {proTips.map((tip, i) => (
              <p
                key={i}
                className="text-xs text-emerald-100/90 leading-relaxed flex items-start gap-2"
              >
                <span className="text-emerald-400 shrink-0 font-bold">•</span>
                <span>{tip}</span>
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Rejection Pitfalls Box */}
      {hasPitfalls && (
        <div className="p-4 sm:p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
          <div className="text-xs font-bold text-rose-300 flex items-center gap-2 font-mono">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>{legacyText.stepFacultyIntel.t0}</span>
          </div>
          <div className="space-y-2">
            {commonPitfalls.map((pitfall, i) => (
              <p
                key={i}
                className="text-xs text-rose-100/90 leading-relaxed flex items-start gap-2"
              >
                <span className="text-rose-400 shrink-0 font-bold">•</span>
                <span>{pitfall}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StepFacultyIntel;
