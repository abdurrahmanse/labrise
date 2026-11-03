"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { roadmapControlsData } from "@/content/roadmap/roadmapPhasesData";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface RoadmapSearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function RoadmapSearchField({ value, onChange }: RoadmapSearchFieldProps) {
  const { searchPlaceholder } = roadmapControlsData;
  const { clearSearchLabel } = roadmapUiData.controls;

  return (
    <div className="relative flex-1 max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4 text-teal-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={searchPlaceholder}
        className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-canvas-base border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-all font-sans"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
          title={clearSearchLabel}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

export default RoadmapSearchField;
