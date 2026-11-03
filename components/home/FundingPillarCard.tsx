"use client";

import React from "react";
import { Award, Briefcase, DollarSign, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { FundingPillarItem } from "@/data/homeData";
import { legacyText } from "@/data/text/legacy";

const ICON_MAP = {
  Award,
  Briefcase,
  DollarSign,
  AlertTriangle
};

const VARIANT_BORDER = {
  emerald: "hover:border-emerald-500/40",
  cyan: "hover:border-cyan-500/40",
  indigo: "hover:border-indigo-500/40",
  amber: "hover:border-amber-500/40"
};

const VARIANT_BADGE = {
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  indigo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/30"
};

export interface FundingPillarCardProps {
  pillar: FundingPillarItem;
}

export function FundingPillarCard({ pillar }: FundingPillarCardProps) {
  const Icon = ICON_MAP[pillar.iconName as keyof typeof ICON_MAP] || DollarSign;
  const borderClass = VARIANT_BORDER[pillar.badgeVariant] || VARIANT_BORDER.indigo;
  const badgeClass = VARIANT_BADGE[pillar.badgeVariant] || VARIANT_BADGE.indigo;

  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/[0.08] ${borderClass} transition-all duration-200 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-teal-400">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">Model {pillar.number}</span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{pillar.title}</h3>
            </div>
          </div>
          <span className={`px-2.5 py-0.5 rounded-none text-[10px] font-mono font-medium border ${badgeClass}`}>
            {pillar.badge}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.description}</p>

        <ul className="space-y-2 mb-5">
          {pillar.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 text-slate-300 font-bold">
          <Sparkles className="w-3 h-3 text-teal-400 shrink-0" />
          <span>{legacyText.fundingPillarCard.t0}</span>
        </span>
        <span>{pillar.examples}</span>
      </div>
    </div>
  );
}

export default FundingPillarCard;
