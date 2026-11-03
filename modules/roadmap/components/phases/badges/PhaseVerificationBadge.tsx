import React from "react";
import { ShieldCheck } from "lucide-react";
import { phaseDetailUiData } from "@/content/roadmap/phaseDetailUiData";

export function PhaseVerificationBadge() {
  const { badges } = phaseDetailUiData;

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
      <span>{badges.freeStandard}</span>
    </span>
  );
}

export default PhaseVerificationBadge;
