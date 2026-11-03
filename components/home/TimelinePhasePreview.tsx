"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { legacyText } from "@/data/text/legacy";

export interface TimelinePhasePreviewProps {
  selectedPhase: RoadmapPhase;
}

export function TimelinePhasePreview({ selectedPhase }: TimelinePhasePreviewProps) {
  return (
    <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-500/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5 sm:space-y-6">
        {/* Header Info */}
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-bold">
              Phase {String(selectedPhase.number).padStart(2, "0")} of 13
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
              <Clock className="w-3 h-3 text-teal-400" />
              <span>{selectedPhase.estimatedDuration}</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {selectedPhase.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {selectedPhase.tagline}
          </p>
        </div>

        {/* What & Why Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
              {legacyText.timelinePhasePreview.t0}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedPhase.what}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
              {legacyText.timelinePhasePreview.t1}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedPhase.why}</p>
          </div>
        </div>

        {/* Action Steps Preview */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
            {legacyText.timelinePhasePreview.t2}
          </span>
          <div className="space-y-2">
            {selectedPhase.how.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="w-5 h-5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="leading-relaxed">
                  <strong className="text-white">{item.step}:</strong>{" "}
                  <span className="text-slate-300">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nuance Pills */}
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300 space-y-1.5">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-[11px] font-mono">
            <span>{legacyText.timelinePhasePreview.t3}</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            <strong className="text-teal-300">{legacyText.timelinePhasePreview.t4}</strong> {selectedPhase.mastersNuance}
          </p>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            <strong className="text-indigo-300">{legacyText.timelinePhasePreview.t5}</strong> {selectedPhase.phdNuance}
          </p>
        </div>
      </div>

      {/* CTA Button to Full Roadmap */}
      <div className="pt-5 sm:pt-6 border-t border-white/10 mt-6 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          href={`/roadmap#${selectedPhase.id}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all group"
        >
          <span>View Phase {String(selectedPhase.number).padStart(2, "0")} Full Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <span className="text-[11px] text-slate-400 font-mono text-center sm:text-right">
          {legacyText.timelinePhasePreview.t6}
        </span>
      </div>
    </div>
  );
}

export default TimelinePhasePreview;
