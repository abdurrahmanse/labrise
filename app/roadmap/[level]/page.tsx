import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { roadmapLevelsData, getLevelBySlug } from "@/data/levelsData";
import { stepsData } from "@/data/steps";
import { LevelHero } from "@/components/roadmap/LevelHero";
import { LevelInteractiveTracker } from "@/components/roadmap/LevelInteractiveTracker";
import { LevelTasksSection } from "@/components/roadmap/LevelTasksSection";
import { LevelNavigationFooter } from "@/components/roadmap/LevelNavigationFooter";
import { notFoundTitles } from "@/data/text/site";

interface Props {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  return roadmapLevelsData.map((lvl) => ({
    level: lvl.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level: levelSlug } = await params;
  const level = getLevelBySlug(levelSlug);
  if (!level) return { title: notFoundTitles.level };

  return {
    title: `Level ${level.levelNumber}: ${level.shortTitle} — AI Scholarship Roadmap`,
    description: `${level.tagline} Step-by-step technical execution, proof-of-work milestones, code loops, and faculty review criteria for Level ${level.levelNumber}.`,
    openGraph: {
      title: `Level 0${level.levelNumber}: ${level.title} — AI Scholarship Roadmap`,
      description: level.objective.slice(0, 160),
      type: "article",
    },
  };
}

async function LevelDetailContent({ params }: Props) {
  const { level: levelSlug } = await params;
  const level = getLevelBySlug(levelSlug);

  if (!level) {
    notFound();
  }

  // Filter granular steps belonging to this level
  const levelSteps = stepsData.filter((step) => level.stepIds.includes(step.id));

  return (
    <main className="min-h-screen bg-canvas-base text-slate-100 pb-20">
      <LevelHero level={level} />
      <LevelInteractiveTracker level={level} />
      <LevelTasksSection level={level} levelSteps={levelSteps} />
      <LevelNavigationFooter currentLevel={level} />
    </main>
  );
}

export default function LevelDetailRoute({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas-base animate-pulse" />}>
      <LevelDetailContent params={params} />
    </Suspense>
  );
}
