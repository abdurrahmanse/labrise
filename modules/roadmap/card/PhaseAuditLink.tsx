import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface PhaseAuditLinkProps {
  slug: string;
  checklistCount: number;
}

export function PhaseAuditLink({ slug, checklistCount }: PhaseAuditLinkProps) {
  const { card } = roadmapUiData;

  return (
    <div className="flex items-center gap-3 self-end sm:self-auto">
      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-teal-400">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>
          {checklistCount} {card.verificationChecksSuffix}
        </span>
      </span>

      <Link
        href={`/roadmap/phases/${slug}`}
        className="text-xs font-mono font-bold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1 group/cta"
      >
        <span>{card.fullBlueprintCta}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default PhaseAuditLink;
