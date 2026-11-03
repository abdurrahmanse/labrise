"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  ArrowRight,
  DollarSign,
  Users,
  BookOpen,
  Briefcase,
  MailCheck,
} from "lucide-react";
import { DegreePathway } from "@/data/homeData";

const ICON_MAP = {
  GraduationCap,
  Award,
  DollarSign,
  Users,
  BookOpen,
  Briefcase,
  MailCheck,
};

export interface DegreePathwayCardProps {
  pathway: DegreePathway;
  isActive: boolean;
  onSelect: () => void;
}

export function DegreePathwayCard({
  pathway,
  isActive,
  onSelect,
}: DegreePathwayCardProps) {
  const isMasters = pathway.id === "masters";
  const HeaderIcon = isMasters ? GraduationCap : Award;

  return (
    <div
      onClick={onSelect}
      className={`p-5 sm:p-7 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
        isActive
          ? isMasters
            ? "bg-slate-900/90 border-teal-500/50 shadow-2xl shadow-teal-950/30 ring-1 ring-teal-500/30"
            : "bg-slate-900/90 border-indigo-500/50 shadow-2xl shadow-indigo-950/30 ring-1 ring-indigo-500/30"
          : "bg-slate-900/40 border-white/[0.08] hover:border-white/20"
      }`}
    >
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md shrink-0 ${
              isMasters
                ? "bg-teal-950/80 border border-teal-500/40 text-teal-300"
                : "bg-indigo-950/80 border border-indigo-500/40 text-indigo-300"
            }`}
          >
            <HeaderIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span
              className={`text-[11px] font-mono font-bold tracking-wider uppercase block ${
                isMasters ? "text-teal-400" : "text-indigo-400"
              }`}
            >
              {pathway.badge}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {pathway.title}
            </h3>
          </div>
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium shrink-0 ${
            isActive
              ? isMasters
                ? "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold"
                : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
              : "bg-white/5 text-slate-400"
          }`}
        >
          {pathway.duration}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
        {pathway.description}
      </p>

      <div className="space-y-2.5 mb-6 text-xs text-slate-300">
        {pathway.features.map((feat, idx) => {
          const FeatIcon = ICON_MAP[feat.iconName as keyof typeof ICON_MAP] || BookOpen;
          return (
            <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm ${
                  isMasters
                    ? "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold"
                    : "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                }`}
              >
                <FeatIcon className="w-3.5 h-3.5" />
              </span>
              <div className="leading-relaxed text-xs sm:text-[13px]">
                <strong className="text-white font-bold">{feat.label}:</strong> {feat.detail}
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href={pathway.ctaHref}
        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors group ${
          isMasters ? "text-teal-400 hover:text-teal-300" : "text-indigo-400 hover:text-indigo-300"
        }`}
      >
        <span>{pathway.ctaLabel}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default DegreePathwayCard;
