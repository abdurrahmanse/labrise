import React from "react";
import { ListOrdered, GraduationCap, Sparkles } from "lucide-react";
import { roadmapUiData, RoadmapHeaderChip } from "@/content/roadmap/roadmapUiData";

function renderChipIcon(iconName: RoadmapHeaderChip["iconName"]) {
  switch (iconName) {
    case "ListOrdered":
      return <ListOrdered className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    case "GraduationCap":
      return <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />;
    case "Sparkles":
      return <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
  }
}

export function RoadmapIntelligenceChips() {
  const { chips } = roadmapUiData.header;

  return (
    <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
      {chips.map((chip, idx) => (
        <div
          key={idx}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
        >
          {renderChipIcon(chip.iconName)}
          <span>{chip.label}</span>
        </div>
      ))}
    </div>
  );
}

export default RoadmapIntelligenceChips;
