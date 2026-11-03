"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

export interface HeroCtaButtonsProps {
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export function HeroCtaButtons({ primaryCta, secondaryCta }: HeroCtaButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-3 sm:pt-5 max-w-xl mx-auto px-2">
      {/* Primary Action Button (Explore Roadmap) */}
      <Link
        href={primaryCta.href}
        className="group relative inline-flex items-center justify-center gap-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-base sm:text-lg text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-teal-500 hover:from-indigo-400 hover:via-indigo-500 hover:to-teal-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/45 border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>{primaryCta.label}</span>
        <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-200 shadow-sm">
          <ArrowRight className="w-4 h-4 text-white" />
        </span>
      </Link>

      {/* Secondary Action Button (Explore Countries) */}
      <Link
        href={secondaryCta.href}
        className="group relative inline-flex items-center justify-center gap-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-base sm:text-lg text-slate-100 bg-[#121214]/90 hover:bg-[#18181b] backdrop-blur-xl border border-white/15 hover:border-teal-400/50 shadow-lg shadow-black/40 hover:shadow-teal-500/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-300 group-hover:bg-teal-500/25 group-hover:scale-105 transition-all duration-200">
          <Globe2 className="w-4 h-4" />
        </span>
        <span>{secondaryCta.label}</span>
      </Link>
    </div>
  );
}

export default HeroCtaButtons;
