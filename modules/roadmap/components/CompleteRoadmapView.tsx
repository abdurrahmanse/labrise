import React from "react";
import { RoadmapHeader } from "./RoadmapHeader";
import {
  RoadmapPhasesPipelineSection,
  RoadmapLevelsLadderSection,
} from "./sections";
import { AdmissionsSuiteLaunchpad } from "./AdmissionsSuiteLaunchpad";
import { ROADMAP_TABS } from "./roadmapTabs";
import { SubNav } from "@/shared/components/SubNav";
import { legacyText } from "@/content/text/legacy";

export function CompleteRoadmapView({ part = "levels" }: { part?: "levels" | "phases" }) {
  return (
    <div className="space-y-12">
      <RoadmapHeader />
      <SubNav label={legacyText.completeRoadmapView.t0} items={ROADMAP_TABS} />
      {part === "levels" && (
        <>
          <RoadmapLevelsLadderSection />
          <AdmissionsSuiteLaunchpad />
        </>
      )}
      {part === "phases" && <RoadmapPhasesPipelineSection />}
    </div>
  );
}

export default CompleteRoadmapView;
