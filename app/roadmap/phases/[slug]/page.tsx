import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { roadmapPhasesData, getPhaseBySlug } from "@/data/roadmapPhasesData";
import { PhaseDetailPage } from "@/components/roadmap/phases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roadmapPhasesData.map((phase) => ({ slug: phase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const phase = getPhaseBySlug(slug);
  if (!phase) return { title: "Phase Not Found" };

  return {
    title: `Phase ${phase.number}: ${phase.title} — Scholarship Roadmap`,
    description: `${phase.tagline} Detailed step-by-step instructions, official resources, common pitfalls to avoid, and preparation checklist for Phase ${phase.number}.`,
    openGraph: {
      title: `Phase ${phase.number}: ${phase.title} — Fully Funded Scholarship Roadmap`,
      description: phase.what.slice(0, 160),
      type: "article",
    },
  };
}

async function PhaseDetailContent({ params }: Props) {
  const { slug } = await params;
  const phase = getPhaseBySlug(slug);

  if (!phase) {
    notFound();
  }

  const currentIndex = roadmapPhasesData.findIndex((p) => p.slug === slug);
  const prevPhase =
    currentIndex > 0 ? roadmapPhasesData[currentIndex - 1] : null;
  const nextPhase =
    currentIndex < roadmapPhasesData.length - 1
      ? roadmapPhasesData[currentIndex + 1]
      : null;

  return (
    <PhaseDetailPage
      phase={phase}
      prevPhase={prevPhase}
      nextPhase={nextPhase}
    />
  );
}

export default function PhaseDetailRoute({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0b0c] animate-pulse" />}>
      <PhaseDetailContent params={params} />
    </Suspense>
  );
}
