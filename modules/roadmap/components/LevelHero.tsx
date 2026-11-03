import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  Quote
} from "lucide-react";
import { Badge } from "@/shared/ui/Badge";
import type { RoadmapLevel } from "../types/level";
import { levelDetailUiData } from "@/content/roadmap/levelDetailUiData";
import { getLevelIcon, getLevelDifficultyVariant } from "./RoadmapConstants";
import { legacyText } from "@/content/text/legacy";

interface LevelHeroProps {
  level: RoadmapLevel;
}

export function LevelHero({ level }: LevelHeroProps) {
  const { hero } = levelDetailUiData;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-white/[0.08] bg-canvas-base">
      {/* 0. Top Glowing Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(58, 95, 224, 0.1) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)",
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
        <div className="mb-6">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-900/80 border border-white/10 hover:border-indigo-400/50 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-md group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>{hero.breadcrumbOverview}</span>
            <span className="text-slate-600">/</span>
            <span className="text-indigo-400 font-bold">Level 0{level.levelNumber}</span>
          </Link>
        </div>

        {/* Level Badge, Timeline, Difficulty */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-slate-900/80 border border-indigo-500/40 text-white text-xs font-mono font-bold shadow-[3px_3px_0_0_rgba(58,95,224,0.35)] backdrop-blur-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {getLevelIcon(level.iconName)}
            <span>{level.badge}</span>
          </div>

          <Badge variant={getLevelDifficultyVariant(level.difficulty)} size="sm">
            {level.difficulty} {hero.difficultySuffix}
          </Badge>

          <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/[0.05] border border-white/10 backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{level.timeline}</span>
          </span>
        </div>

        {/* Level Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.12] sm:leading-[1.1] font-heading break-words">
          Level {level.levelNumber}:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            {level.title}
          </span>
        </h1>

        {/* Level Subtitle / Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed font-sans font-normal">
          {level.tagline}
        </p>

        {/* Primary Objective Banner */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-slate-900/40 border-y border-r border-white/10 border-l-4 border-l-indigo-500 mb-8 max-w-4xl shadow-xl backdrop-blur-md">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Level 0{level.levelNumber} Primary Objective
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {level.objective}
          </p>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.015] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg shadow-black/25 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {legacyText.levelHero.t0}
            </span>
            <div className="text-xl font-bold font-mono text-white">
              {level.totalSteps} In-Depth Tasks
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              {legacyText.levelHero.t1}
            </span>
          </div>

          <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.015] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg shadow-black/25 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {legacyText.levelHero.t2}
            </span>
            <div className="text-xl font-bold font-mono text-cyan-300">
              {level.estimatedHours}
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              {legacyText.levelHero.t3}
            </span>
          </div>

          <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.015] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg shadow-black/25 hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              {hero.deliverableLabel}
            </span>
            <div className="text-xs font-bold text-emerald-400 font-sans leading-snug line-clamp-2">
              {level.keyDeliverable}
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              {legacyText.levelHero.t4}
            </span>
          </div>
        </div>

        {/* Faculty Quote */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 italic flex items-start gap-3 max-w-4xl">
          <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 not-italic" />
          <div>
            <p>&ldquo;{level.facultyInsightQuote.quote}&rdquo;</p>
            <span className="not-italic text-[11px] font-mono text-indigo-400 font-semibold block mt-1">
              — {level.facultyInsightQuote.author}, {level.facultyInsightQuote.affiliation}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LevelHero;
