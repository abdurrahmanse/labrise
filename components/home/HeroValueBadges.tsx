import React from "react";
import { Compass, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { HomeHeroBadge } from "@/data/homeData";

const ICON_MAP = {
  Compass,
  Globe2,
  ShieldCheck,
  Sparkles
};

const COLOR_MAP = {
  indigo: "text-indigo-400 border-indigo-500/20",
  teal: "text-teal-400 border-teal-500/20",
  emerald: "text-emerald-400 border-emerald-500/20",
  amber: "text-amber-400 border-amber-500/20"
};

export interface HeroValueBadgesProps {
  badges: HomeHeroBadge[];
}

export function HeroValueBadges({ badges }: HeroValueBadgesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left max-w-4xl mx-auto">
      {badges.map((badge, idx) => {
        const Icon = ICON_MAP[badge.iconName as keyof typeof ICON_MAP] || Compass;
        const colorClass = COLOR_MAP[badge.color] || COLOR_MAP.indigo;

        return (
          <div
            key={idx}
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.015] border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg shadow-black/30 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-slate-800/80 border border-white/10 shadow-inner group-hover:scale-105 transition-transform ${colorClass.split(" ")[0]}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className={`text-xs font-mono font-bold ${colorClass.split(" ")[0]}`}>
                {badge.title}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-snug">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HeroValueBadges;
