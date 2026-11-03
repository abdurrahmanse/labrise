"use client";

import React, { useState, useEffect } from "react";
import type { RoadmapPhase } from "../../types/phase";
import { PhaseDetailHero } from "./PhaseDetailHero";
import { PhaseWhatWhySection } from "./PhaseWhatWhySection";
import { PhaseHowStepsSection } from "./PhaseHowStepsSection";
import { PhaseResourcesSection } from "./PhaseResourcesSection";
import { PhasePitfallsAndExampleSection } from "./PhasePitfallsAndExampleSection";
import { PhaseDegreeNuancesSection } from "./PhaseDegreeNuancesSection";
import { PhaseChecklistSection } from "./PhaseChecklistSection";
import { PhaseNavigationFooter } from "./PhaseNavigationFooter";

interface PhaseDetailPageProps {
  phase: RoadmapPhase;
  prevPhase?: RoadmapPhase | null;
  nextPhase?: RoadmapPhase | null;
}

export function PhaseDetailPage({
  phase,
  prevPhase,
  nextPhase,
}: PhaseDetailPageProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`phase_checklist_${phase.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        requestAnimationFrame(() => {
          setCheckedItems(parsed);
        });
      }
    } catch {
      // LocalStorage access fallback
    }
  }, [phase.id]);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(
          `phase_checklist_${phase.id}`,
          JSON.stringify(updated)
        );
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 pb-24">
      {/* 1. HERO SECTION */}
      <PhaseDetailHero phase={phase} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-14 sm:space-y-16">
        {/* 2. SECTION: MANDATE & RATIONALE */}
        <PhaseWhatWhySection
          what={phase.what}
          why={phase.why}
        />

        {/* 3. SECTION: DETAILED ACTION STEPS */}
        <PhaseHowStepsSection steps={phase.how} />

        {/* 4. SECTION: CRITICAL APPLICATION TOOLS & PORTALS */}
        <PhaseResourcesSection resources={phase.where} />

        {/* 5. SECTION: PITFALLS & REAL-WORLD EXAMPLE */}
        <PhasePitfallsAndExampleSection
          mistakes={phase.commonMistakes}
          example={phase.practicalExample}
        />

        {/* 6. SECTION: DEGREE LEVEL NUANCES (MASTER'S VS PHD) */}
        <PhaseDegreeNuancesSection
          mastersNuance={phase.mastersNuance}
          phdNuance={phase.phdNuance}
        />

        {/* 7. SECTION: INTERACTIVE PREPARATION CHECKLIST */}
        <PhaseChecklistSection
          phaseNumber={phase.number}
          checklist={phase.checklist}
          checkedItems={checkedItems}
          onToggle={toggleCheck}
        />

        {/* 8. SECTION: PIPELINE NAVIGATION FOOTER */}
        <PhaseNavigationFooter
          prevPhase={prevPhase}
          nextPhase={nextPhase}
        />
      </div>
    </main>
  );
}

export default PhaseDetailPage;
