"use client";

import React from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { roadmapUiData } from "@/data/roadmapUiData";

interface RoadmapEmptyStateProps {
  onReset: () => void;
}

export function RoadmapEmptyState({ onReset }: RoadmapEmptyStateProps) {
  const { title, description, resetLabel } = roadmapUiData.emptyState;

  return (
    <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 max-w-lg mx-auto">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
        <SearchX className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-base font-bold text-white">
          {title}
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          {description}
        </p>
      </div>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-400 hover:bg-indigo-300 text-black border-2 border-black text-xs font-semibold cursor-pointer transition-colors shadow-md"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>{resetLabel}</span>
      </button>
    </div>
  );
}

export default RoadmapEmptyState;
