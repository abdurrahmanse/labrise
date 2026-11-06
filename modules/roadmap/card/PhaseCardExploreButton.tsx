import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface PhaseCardExploreButtonProps {
  slug: string;
}

export function PhaseCardExploreButton({ slug }: PhaseCardExploreButtonProps) {
  const { card } = roadmapUiData;

  return (
    <Link
      href={`/roadmap/phases/${slug}`}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-[var(--hover-fill)] text-teal-300 border border-teal-500/30 text-xs font-bold transition-all shadow-sm shrink-0 self-start sm:self-center group/btn"
    >
      <span>{card.exploreBlueprint}</span>
      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
    </Link>
  );
}

export default PhaseCardExploreButton;
