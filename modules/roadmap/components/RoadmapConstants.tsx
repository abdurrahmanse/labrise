import React from "react";
import { Cpu, Sparkles, Target, FileCheck, ShieldCheck } from "lucide-react";
import { RoadmapLevel } from "@/data/types";

export const LEVEL_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-purple-400" />
};

export const DIFFICULTY_VARIANTS: Record<
  RoadmapLevel["difficulty"],
  "indigo" | "cyan" | "emerald" | "amber" | "purple"
> = {
  Fundamental: "indigo",
  Intensive: "cyan",
  Strategic: "emerald",
  Critical: "amber",
  Elite: "purple"
};

export function getLevelIcon(iconName: string): React.ReactNode {
  return LEVEL_ICONS[iconName] || <Cpu className="w-5 h-5 text-indigo-400" />;
}

export function getLevelDifficultyVariant(
  difficulty: RoadmapLevel["difficulty"]
): "indigo" | "cyan" | "emerald" | "amber" | "purple" {
  return DIFFICULTY_VARIANTS[difficulty] || "indigo";
}

/**
 * Maps a pipeline phase number (0-6) to its corresponding dedicated Roadmap Level page.
 */
export function getPhaseLevelHref(phaseNumber: number): string {
  if (phaseNumber === 0) return "/roadmap/level-1";
  if (phaseNumber === 1) return "/roadmap/level-2";
  if (phaseNumber === 2) return "/roadmap/level-3";
  if (phaseNumber <= 4) return "/roadmap/level-4";
  return "/roadmap/level-5";
}

