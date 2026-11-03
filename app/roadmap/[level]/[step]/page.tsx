import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StepCard } from "@/components/roadmap/StepCard";
import { roadmapLevelsData, getLevelBySlug } from "@/data/levelsData";
import { getStepById } from "@/data/steps";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

interface Props {
  params: Promise<{ level: string; step: string }>;
}

export function generateStaticParams() {
  return roadmapLevelsData.flatMap((level) => level.stepIds.map((step) => ({ level: level.slug, step })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, step } = await params;
  const stepData = getStepById(step);
  if (!stepData) return { title: "Not found" };
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
      back={{ href: `/roadmap/${level.slug}`, label: `Level 0${level.levelNumber}` }}
      prev={prev ? { href: `/roadmap/${level.slug}/${prev.id}`, label: prev.shortTitle } : undefined}
      next={next ? { href: `/roadmap/${level.slug}/${next.id}`, label: next.shortTitle } : undefined}
    >
      <StepCard step={step} />
    </PageShell>
  );
}

export default function LevelStepPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 text-slate-400">Loading…</div>}>
      <LevelStepPageContent params={params} />
    </Suspense>
  );
}
