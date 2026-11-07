import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RoadmapStepCard as StepCard } from "@/modules/roadmap/components/RoadmapStepCard";
import { roadmapLevelsData, getLevelBySlug } from "@/content/roadmap/levelsData";
import { getStepById } from "@/content/roadmap/steps";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { PageFallback } from "@/shared/components/PageFallback";
import { navLabels, notFoundTitles } from "@/content/text/site";

interface Props {
  params: Promise<{ level: string; step: string }>;
}

export function generateStaticParams() {
  return roadmapLevelsData.flatMap((level) => level.stepIds.map((step) => ({ level: level.slug, step })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, step } = await params;
  const stepData = getStepById(step);
  if (!stepData) return { title: notFoundTitles.generic };
  return buildMetadata({ title: stepData.title, description: stepData.keyObjective.slice(0, 160), path: `/roadmap/${level}/${step}` });
}

async function LevelStepPageContent({ params }: Props) {
  const { level: levelSlug, step: stepId } = await params;
  const level = getLevelBySlug(levelSlug);
  const step = getStepById(stepId);
  if (!level || !step || !level.stepIds.includes(stepId)) notFound();

  const index = level.stepIds.indexOf(stepId);
  const prev = level.stepIds[index - 1] && getStepById(level.stepIds[index - 1]);
  const next = level.stepIds[index + 1] && getStepById(level.stepIds[index + 1]);

  return (
    <PageShell
      eyebrow={`Level 0${level.levelNumber} · Step ${step.stepNumber}`}
      title={step.shortTitle}
      lead={step.subtitle}
      trail={[{ href: "/", label: navLabels.home }, { href: "/roadmap", label: navLabels.roadmap }, { href: `/roadmap/${level.slug}`, label: `Level 0${level.levelNumber}` }, { href: "", label: step.shortTitle }]}
      prev={prev ? { href: `/roadmap/${level.slug}/${prev.id}`, label: prev.shortTitle } : undefined}
      next={next ? { href: `/roadmap/${level.slug}/${next.id}`, label: next.shortTitle } : undefined}
    >
      <StepCard step={step} />
    </PageShell>
  );
}

export default function LevelStepPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <LevelStepPageContent params={params} />
    </Suspense>
  );
}
