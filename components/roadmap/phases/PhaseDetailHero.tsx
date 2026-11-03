"use client";

import React from "react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { PhaseDetailBreadcrumb } from "./PhaseDetailBreadcrumb";
import { PhaseDetailBadges } from "./PhaseDetailBadges";
import { PhaseDetailAnchorNav } from "./PhaseDetailAnchorNav";

export interface PhaseDetailHeroProps {
  phase: RoadmapPhase;
}

export function PhaseDetailHero({ phase }: PhaseDetailHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 border-b border-white/[0.08] bg-[#070708]">
      {/* 0. Top Glowing Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)",
        }}
      />

      {/* 2. Delicate Micro-Grid Pattern with Radial Mask Fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
        }}
      />

      {/* 3. Floating Aurora Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-indigo-600/20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] bg-teal-500/18 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(650px,90vw)] h-[220px] bg-cyan-400/10 blur-[85px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <PhaseDetailBreadcrumb phase={phase} />

        {/* Badges Row */}
        <PhaseDetailBadges phase={phase} />

        {/* Title & Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5 font-heading">
          {phase.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-4xl leading-relaxed mb-8 font-sans">
          {phase.tagline}
        </p>

        {/* Quick Anchor Navigation */}
        <PhaseDetailAnchorNav />
      </div>
    </section>
  );
}

export default PhaseDetailHero;
