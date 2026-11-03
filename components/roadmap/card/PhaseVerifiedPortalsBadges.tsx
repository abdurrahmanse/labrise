import React from "react";
import { ExternalLink } from "lucide-react";
import { PhaseOfficialResource } from "@/data/roadmapPhasesData";
import { roadmapUiData } from "@/data/roadmapUiData";

export interface PhaseVerifiedPortalsBadgesProps {
  resources: PhaseOfficialResource[];
}

export function PhaseVerifiedPortalsBadges({ resources }: PhaseVerifiedPortalsBadgesProps) {
  const { card } = roadmapUiData;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-mono text-slate-400">
        {card.portalsLabel}
      </span>
      {resources.map((portal, pIdx) => (
        <a
          key={pIdx}
          href={portal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-[11px] font-mono transition-colors"
        >
          <span>{portal.name}</span>
          <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
        </a>
      ))}
    </div>
  );
}

export default PhaseVerifiedPortalsBadges;
