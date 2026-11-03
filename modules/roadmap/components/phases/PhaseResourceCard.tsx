import React from "react";
import { Globe2, ExternalLink, ArrowRight } from "lucide-react";
import type { PhaseOfficialResource } from "../../types/phase";
import { legacyText } from "@/content/text/legacy";

export interface PhaseResourceCardProps {
  resource: PhaseOfficialResource;
}

export function PhaseResourceCard({ resource }: PhaseResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="p-5 rounded-2xl bg-canvas-card border border-white/10 hover:border-teal-500/40 hover:bg-canvas-card transition-all flex flex-col justify-between group shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-teal-300 transition-colors">
            <Globe2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{resource.name}</span>
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition-colors shrink-0" />
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {resource.description}
        </p>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-teal-400 font-medium">
        <span>{legacyText.phaseResourceCard.t0}</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}

export default PhaseResourceCard;
