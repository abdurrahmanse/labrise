"use client";

import React, { useState } from "react";
import Link from "next/link";
import { roadmapPhasesData, RoadmapPhase } from "@/data/roadmapPhasesData";
import { timelineOverviewData } from "@/data/homeData";
import { ChevronRight, Compass, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelinePhasePreview } from "./TimelinePhasePreview";

export function RoadmapTimelineOverview() {
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase>(roadmapPhasesData[0]);
  const { badge, title, subtitle, ctaLabel, ctaHref } = timelineOverviewData;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          badgeVariant="teal"
          title={title}
          subtitle={subtitle}
          align="center"
          size="lg"
        />

        {/* Desktop & Tablet: Connected Timeline Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Phase List Sidebar / Stepper (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {roadmapPhasesData.map((phase) => {
              const isSelected = selectedPhase.id === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-indigo-400/10 border-indigo-400 shadow-[4px_4px_0_0_#c6f21f]"
                      : "bg-slate-900/40 border-white/[0.06] hover:bg-slate-900/80 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                        isSelected
                          ? "bg-indigo-400 text-black"
                          : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      {String(phase.number).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors line-clamp-1 ${
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {phase.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        {phase.estimatedDuration.split("(")[0].trim()}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-indigo-400 translate-x-0.5" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card (7 Cols) */}
          <div className="lg:col-span-7">
            <TimelinePhasePreview selectedPhase={selectedPhase} />
          </div>
        </div>

        {/* Global Bottom Link */}
        <div className="text-center pt-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RoadmapTimelineOverview;
