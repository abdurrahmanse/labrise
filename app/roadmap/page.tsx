import React from "react";
import type { Metadata } from "next";
import { CompleteRoadmapView } from "@/modules/roadmap";
import { roadmapMetadata } from "@/data/metadata";
import { roadmapUiData, RoadmapPageHeroMetric } from "@/data/roadmapUiData";
import { CheckCircle2, ShieldCheck, Sparkles, Layers, ListOrdered, Award } from "lucide-react";

export const metadata: Metadata = roadmapMetadata;

function renderHeroMetricIcon(iconName: RoadmapPageHeroMetric["iconName"]) {
  switch (iconName) {
    case "ListOrdered":
      return <ListOrdered className="w-4 h-4 text-teal-400" />;
    case "Layers":
      return <Layers className="w-4 h-4 text-cyan-400" />;
    case "CheckCircle2":
      return <CheckCircle2 className="w-4 h-4 text-indigo-400" />;
    case "Award":
      return <Award className="w-4 h-4 text-emerald-400" />;
  }
}

export default function RoadmapPage() {
  const { pageHero } = roadmapUiData;

  return (
    <main className="min-h-screen bg-canvas-base text-slate-100 pb-20">
      {/* Dynamic Ambient Background Glow */}
      <div className="relative overflow-hidden pt-28 pb-14 border-b border-white/[0.08] bg-canvas-base">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-slate-900/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold shadow-[3px_3px_0_0_rgba(58,95,224,0.35)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>{pageHero.badge}</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{pageHero.standardBadge}</span>
            </span>
          </div>

          {/* Hero Headline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] font-heading">
              {pageHero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
                {pageHero.titleGradient}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl">
              {pageHero.description}
            </p>
          </div>

          {/* 4 Metric Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-5xl">
            {pageHero.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.015] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg shadow-black/25 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {renderHeroMetricIcon(metric.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {metric.category}
                  </span>
                </div>
                <div
                  className={`text-2xl font-bold font-heading ${metric.accentColor === "emerald" ? "text-emerald-400" : "text-white"}`}
                >
                  {metric.value}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Roadmap View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <CompleteRoadmapView />
      </div>
    </main>
  );
}
