import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

interface PhaseNavigationFooterProps {
  prevPhase?: RoadmapPhase | null;
  nextPhase?: RoadmapPhase | null;
}

export function PhaseNavigationFooter({
  prevPhase,
  nextPhase,
}: PhaseNavigationFooterProps) {
  const { navigationFooter, badges } = phaseDetailUiData;

  return (
    <section className="pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Phase Link */}
        {prevPhase ? (
          <Link
            href={`/roadmap/phases/${prevPhase.slug}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#121214] hover:bg-[#1a1a1d] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 text-teal-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {navigationFooter.prevPhaseLabel}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[220px] block">
                {badges.phasePrefix} {String(prevPhase.number).padStart(2, "0")}:{" "}
                {prevPhase.title}
              </span>
            </div>
          </Link>
        ) : (
          <Link
            href="/roadmap"
            className="w-full sm:w-auto p-4 rounded-xl bg-[#121214] hover:bg-[#1a1a1d] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 text-teal-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {navigationFooter.overviewLabel}
              </span>
              <span className="text-xs font-bold text-white">
                {navigationFooter.allPhasesTitle}
              </span>
            </div>
          </Link>
        )}

        {/* Hub Center Link */}
        <Link
          href="/roadmap"
          className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-teal-400" />
          <span>{navigationFooter.hubButton}</span>
        </Link>

        {/* Next Phase Link */}
        {nextPhase ? (
          <Link
            href={`/roadmap/phases/${nextPhase.slug}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-gradient-to-r from-indigo-900/60 to-teal-900/60 hover:from-indigo-900/90 hover:to-teal-900/90 border border-teal-500/40 text-white transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right shadow-lg"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 block">
                {navigationFooter.nextPhaseLabel}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[220px] block">
                {badges.phasePrefix} {String(nextPhase.number).padStart(2, "0")}:{" "}
                {nextPhase.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-teal-300 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        ) : (
          <Link
            href="/documents"
            className="w-full sm:w-auto p-4 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 text-white shadow-xl transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right font-bold"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-200 block">
                {navigationFooter.completeBadge}
              </span>
              <span className="text-xs font-heading">
                {navigationFooter.toolkitButton}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </section>
  );
}

export default PhaseNavigationFooter;
