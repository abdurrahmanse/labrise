"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { RoadmapStep } from "@/data/types";
import { StepWidgetRenderer } from "./widgets/StepWidgetRegistry";
import { percentOf } from "@/shared/lib/percent";
import {
  StepCardHeader,
  StepObjectiveBanner,
  StepProgressBar,
  StepCodeSnippet,
  StepAcademicContext,
  StepTaskChecklist,
  StepFacultyIntel,
  StepDeliverableBanner,
  StepResourcesList,
} from "./tasks";

interface RoadmapStepCardProps {
  step: RoadmapStep;
}

export function RoadmapStepCard({ step }: RoadmapStepCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (idx: number) => {
    const key = `${step.id}-${idx}`;
    setCompletedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const completedCount = step.checklist.filter(
    (_, idx) => !!completedItems[`${step.id}-${idx}`]
  ).length;

  const progressPercent = percentOf(completedCount, step.checklist.length);

  const glowVariant = step.stepNumber.startsWith("0.1")
    ? "indigo"
    : step.stepNumber.startsWith("0.2")
    ? "cyan"
    : "emerald";

  return (
    <GlassCard
      borderGlow={glowVariant}
      className="p-6 sm:p-8 transition-all duration-300 bg-canvas-card/95 border border-white/10 hover:border-white/20 shadow-2xl relative overflow-hidden group"
    >
      {/* Top ambient color sheen */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          step.stepNumber === "0.1"
            ? "from-indigo-500 via-purple-500 to-pink-500"
            : step.stepNumber === "0.2"
            ? "from-cyan-500 via-blue-500 to-indigo-500"
            : "from-emerald-500 via-teal-500 to-cyan-500"
        }`}
      />

      {/* 1. Header Section */}
      <StepCardHeader
        stepNumber={step.stepNumber}
        priority={step.priority}
        duration={step.duration}
        title={step.title}
        subtitle={step.subtitle}
        isExpanded={isExpanded}
        onToggleExpand={() => setIsExpanded(!isExpanded)}
      />

      {/* 2. Key Objective Highlight Banner */}
      <StepObjectiveBanner keyObjective={step.keyObjective} />

      {/* 3. Task Completion Progress & Status Bar */}
      <StepProgressBar
        completedCount={completedCount}
        totalCount={step.checklist.length}
        progressPercent={progressPercent}
      />

      {/* 4. Dynamic Contextual Widget via Registry */}
      <StepWidgetRenderer stepNumber={step.stepNumber} />

      {/* 5. Optional Code Snippet */}
      {step.stepNumber !== "0.2" && step.codeSnippet && (
        <StepCodeSnippet snippet={step.codeSnippet} />
      )}

      {/* 6. Expandable Deep-Dive Sub-sections */}
      {isExpanded && (
        <div className="space-y-6 pt-5 border-t border-white/5">
          {/* 6a. Academic Description & Context */}
          {step.description && (
            <StepAcademicContext description={step.description} />
          )}

          {/* 6b. Interactive Actionable Checklist */}
          <StepTaskChecklist
            stepId={step.id}
            checklist={step.checklist}
            completedItems={completedItems}
            onToggleItem={toggleCheck}
          />

          {/* 6c. Faculty Intel: Pro-Tips vs. Rejection Traps */}
          <StepFacultyIntel
            proTips={step.proTips}
            commonPitfalls={step.commonPitfalls}
          />

          {/* 6d. Proof-of-Work Deliverable Banner */}
          <StepDeliverableBanner deliverable={step.deliverable} />

          {/* 6e. Curated Literature & Resources */}
          <StepResourcesList resources={step.resources} />
        </div>
      )}
    </GlassCard>
  );
}

export default RoadmapStepCard;
