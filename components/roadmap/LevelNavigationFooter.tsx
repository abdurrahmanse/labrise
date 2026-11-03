"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { roadmapLevelsData } from "@/data/levelsData";
import { RoadmapLevel } from "@/data/types";
import { levelDetailUiData } from "@/data/levelDetailUiData";

interface LevelNavigationFooterProps {
  currentLevel: RoadmapLevel;
}

export function LevelNavigationFooter({ currentLevel }: LevelNavigationFooterProps) {
  const { navigationFooter } = levelDetailUiData;

  const currentIndex = roadmapLevelsData.findIndex((l) => l.id === currentLevel.id);
  const prevLevel = currentIndex > 0 ? roadmapLevelsData[currentIndex - 1] : null;
  const nextLevel = currentIndex < roadmapLevelsData.length - 1 ? roadmapLevelsData[currentIndex + 1] : null;

  return (
    <div className="py-12 border-t border-white/10 bg-[#0b0b0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Level Button */}
          {prevLevel ? (
            <Link
              href={`/roadmap/${prevLevel.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#121214] hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  {navigationFooter.prevLevelLabel}
                </span>
                <span className="text-xs font-heading font-bold text-white">
                  Level {prevLevel.levelNumber}: {prevLevel.shortTitle}
                </span>
              </div>
            </Link>
          ) : (
            <Link
              href="/roadmap"
              className="w-full sm:w-auto p-4 rounded-xl bg-[#121214] hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  {navigationFooter.badge}
                </span>
                <span className="text-xs font-heading font-bold text-white">
                  {navigationFooter.hubButton}
                </span>
              </div>
            </Link>
          )}

          {/* Center Hub Link */}
          <Link
            href="/roadmap"
            className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>{navigationFooter.hubButton}</span>
          </Link>

          {/* Next Level Button */}
          {nextLevel ? (
            <Link
              href={`/roadmap/${nextLevel.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#121214] hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  {navigationFooter.nextLevelLabel}
                </span>
                <span className="text-xs font-heading font-bold text-white">
                  Level {nextLevel.levelNumber}: {nextLevel.shortTitle}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              href="/documents"
              className="w-full sm:w-auto p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right font-bold"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-200 block">
                  {navigationFooter.curriculumCompleteBadge}
                </span>
                <span className="text-xs font-heading">
                  {navigationFooter.toolkitButton}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default LevelNavigationFooter;
