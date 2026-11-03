"use client";

import React from "react";
import { homeHeroData } from "@/data/homeData";
import { HeroCtaButtons } from "./HeroCtaButtons";
import { HeroValueBadges } from "./HeroValueBadges";

export function HomeHero() {
  const { badge, title, titleGradient, description, primaryCta, secondaryCta, valueBadges } = homeHeroData;

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-white/[0.08] bg-[#070708]">
      {/* 0. Top Glowing Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[560px] pointer-events-none"
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
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-slate-900/80 border border-indigo-500/40 text-indigo-300 text-[11px] sm:text-xs font-mono font-medium shadow-[3px_3px_0_0_rgba(198,242,31,0.9)] backdrop-blur-xl max-w-full overflow-hidden hover:border-indigo-400/60 transition-colors">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="truncate tracking-wide">{badge.label}</span>
            <span className="text-slate-500 shrink-0">|</span>
            <span className="text-teal-400 font-semibold shrink-0 hidden xs:inline">{badge.sublabel}</span>
          </div>

          {/* Headline — 4 breakpoints */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] px-1">
            {title}{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {titleGradient}
            </span>{" "}
            Master&apos;s or PhD
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto px-2">
            {description}
          </p>

          {/* Redesigned CTAs — enlarged high-impact buttons with stylized icon badges */}
          <HeroCtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />

          {/* Value Badges */}
          <HeroValueBadges badges={valueBadges} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
