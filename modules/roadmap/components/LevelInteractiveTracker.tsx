"use client";

import React, { useState } from "react";
import { Award, Check } from "lucide-react";
import { GlassCard } from "@/shared/ui/GlassCard";
import { Badge } from "@/shared/ui/Badge";
import type { RoadmapLevel } from "../types/level";
import { levelDetailUiData } from "@/content/roadmap/levelDetailUiData";
import { percentOf } from "@/shared/utils/percent";

interface LevelInteractiveTrackerProps {
  level: RoadmapLevel;
}

export function LevelInteractiveTracker({ level }: LevelInteractiveTrackerProps) {
  const { tracker } = levelDetailUiData;

  const [completedMilestones, setCompletedMilestones] = useState<{ [key: string]: boolean }>({
    "milestone-0": true
  });

  const toggleMilestone = (idx: number) => {
    const key = `milestone-${idx}`;
    setCompletedMilestones((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const total = level.milestones.length;
  const count = Object.values(completedMilestones).filter(Boolean).length;
  const progressPercent = percentOf(count, total);

  return (
    <section className="py-12 border-b border-white/10 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard borderGlow={level.accentColor} className="p-6 sm:p-8 bg-canvas-card border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-slate-400 block mb-1">
                Level 0{level.levelNumber} {tracker.liveBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {tracker.title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-300">
                {count} {tracker.ofSeparator} {total} {tracker.tasksVerifiedLabel}
              </span>
              <Badge variant={count === total ? "emerald" : "indigo"} size="md">
                {count === total ? tracker.allCompletedBadge : `${progressPercent}% Verified`}
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 space-y-1.5">
            <div className="w-full h-2.5 rounded-full bg-slate-900 border border-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Milestone Checkpoint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {level.milestones.map((ms, idx) => {
              const isDone = !!completedMilestones[`milestone-${idx}`];
              return (
                <div
                  key={idx}
                  onClick={() => toggleMilestone(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isDone
                      ? "bg-indigo-950/40 border-indigo-500/50 text-white shadow-lg"
                      : "bg-canvas-base border-white/5 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Milestone 0{idx + 1}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          isDone
                            ? "bg-indigo-600 border-transparent text-white"
                            : "border-white/20 bg-white/5"
                        }`}
                      >
                        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <h4 className="text-sm font-heading font-bold text-white mb-1.5 leading-snug">
                      {ms.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                      {ms.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{ms.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default LevelInteractiveTracker;
