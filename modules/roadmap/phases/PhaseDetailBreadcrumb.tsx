import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { RoadmapPhase } from "../types/phase";
import { phaseDetailUiData } from "@/content/roadmap/phaseDetailUiData";
import { legacyText } from "@/content/text/legacy";

export interface PhaseDetailBreadcrumbProps {
  phase: RoadmapPhase;
}

export function PhaseDetailBreadcrumb({ phase }: PhaseDetailBreadcrumbProps) {
  const { hero, navigationFooter, badges } = phaseDetailUiData;

  return (
    <nav aria-label={legacyText.phaseDetailBreadcrumb.t0} className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono">
      <Link
        href="/roadmap"
        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
      >
        <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>{hero.breadcrumbHub}</span>
      </Link>
      <span className="text-slate-600">/</span>
      <Link
        href="/roadmap"
        className="text-slate-400 hover:text-white transition-colors"
      >
        {navigationFooter.allPhasesTitle}
      </Link>
      <span className="text-slate-600">/</span>
      <span className="text-indigo-400 font-bold truncate max-w-[220px] sm:max-w-none">
        {badges.phasePrefix} {String(phase.number).padStart(2, "0")}: {phase.title}
      </span>
    </nav>
  );
}

export default PhaseDetailBreadcrumb;
