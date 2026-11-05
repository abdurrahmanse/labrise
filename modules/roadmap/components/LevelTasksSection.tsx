import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import type { RoadmapLevel } from "../types/level";
import type { RoadmapStep } from "../types/step";
import { levelDetailUiData } from "@/content/roadmap/levelDetailUiData";

interface LevelTasksSectionProps {
  level: RoadmapLevel;
  levelSteps: RoadmapStep[];
}

export function LevelTasksSection({ level, levelSteps }: LevelTasksSectionProps) {
  const { tasks } = levelDetailUiData;

  return (
    <section id="level-tasks" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={`Level 0${level.levelNumber} ${tasks.badge}`}
        badgeVariant="indigo"
        badgeIcon={<Layers className="w-4 h-4 text-indigo-400" />}
        title={
          <span>
            Level 0{level.levelNumber} {tasks.title}{" "}
            <span className="text-slate-400 font-normal font-sans text-base">
              ({levelSteps.length} {tasks.tasksSuffix})
            </span>
          </span>
        }
        subtitle={level.objective}
        align="between"
        size="md"
        borderBottom={true}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {levelSteps.map((step) => (
          <Link
            key={step.id}
            href={`/roadmap/${level.slug}/${step.id}`}
            className="group flex flex-col gap-2 bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="bg-indigo-600 px-2 py-0.5 font-mono text-xs font-bold text-white">{step.stepNumber}</span>
              <span className="font-mono text-xs text-slate-400">{step.duration}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{step.shortTitle}</h3>
            <p className="text-slate-300">{step.subtitle}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-indigo-400">
              Open step <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LevelTasksSection;
