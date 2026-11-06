"use client";

import React, { useState } from "react";
import { Sigma, BookOpen, Sparkles } from "lucide-react";
import { mathTopicsData, mathDiagnosticMeta } from "@/content/roadmap/stepWidgetsData";
import {
  WidgetShell,
  WidgetHeader,
  WidgetTabs,
  WidgetTabButton,
  WidgetSectionCard,
  WidgetCallout
} from ".";
import { legacyText } from "@/content/text/legacy";
import { WidgetChecklistItem } from "@/shared/ui/WidgetChecklistItem";
import { percentOf } from "@/shared/utils/percent";

export function StepMathDiagnosticWidget() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [masteredConcepts, setMasteredConcepts] = useState<{ [key: string]: boolean }>({
    "linear-algebra-0": true,
    "calculus-0": true
  });

  const activeTopic = mathTopicsData[activeTopicIndex] || mathTopicsData[0];

  const toggleConcept = (conceptKey: string) => {
    setMasteredConcepts((prev) => ({
      ...prev,
      [conceptKey]: !prev[conceptKey]
    }));
  };

  const topicMasteredCount = activeTopic.concepts.filter(
    (_, i) => !!masteredConcepts[`${activeTopic.id}-${i}`]
  ).length;

  const topicMasteryPercent = percentOf(topicMasteredCount, activeTopic.concepts.length);

  return (
    <WidgetShell theme="indigo">
      {/* Header */}
      <WidgetHeader
        theme="indigo"
        icon={<Sigma className="w-5 h-5" />}
        stepBadge={mathDiagnosticMeta.stepBadge}
        title={mathDiagnosticMeta.title}
        headerBadge={mathDiagnosticMeta.headerBadge}
        rightSlot={
          <span className="text-xs font-mono text-indigo-300 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">
            {topicMasteryPercent}% Pillar Mastered
          </span>
        }
      />

      {/* Domain Selection Tabs */}
      <WidgetTabs columns={4}>
        {mathTopicsData.map((topic, idx) => (
          <WidgetTabButton
            key={topic.id}
            theme="indigo"
            isActive={activeTopicIndex === idx}
            onClick={() => setActiveTopicIndex(idx)}
            topLabel={`PILLAR 0${idx + 1}`}
            mainLabel={topic.name.split("&")[0]}
          />
        ))}
      </WidgetTabs>

      {/* Active Domain Deep-Dive Card */}
      <WidgetSectionCard
        headerSlot={
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                {activeTopic.badge}
              </span>
              <h5 className="text-base font-heading font-bold text-white">
                {activeTopic.name}
              </h5>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Topic {activeTopicIndex + 1} of {mathTopicsData.length}
            </span>
          </div>
        }
      >
        {/* Core Mathematical Concepts Checklist */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              {mathDiagnosticMeta.conceptsHeader}
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              {legacyText.stepMathDiagnosticWidget.t0}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeTopic.concepts.map((concept, i) => {
              const conceptKey = `${activeTopic.id}-${i}`;
              return (
                <WidgetChecklistItem
                  key={i}
                  theme="indigo"
                  isChecked={!!masteredConcepts[conceptKey]}
                  onClick={() => toggleConcept(conceptKey)}
                  label={concept}
                />
              );
            })}
          </div>
        </div>

        {/* Sample Proof Challenge Box */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-700/50">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-bold mb-1.5">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>{mathDiagnosticMeta.proofChallengeHeader}</span>
          </div>
          <p className="text-xs text-slate-200 font-mono italic leading-relaxed">
            &ldquo;{activeTopic.sampleProof}&rdquo;
          </p>
        </div>

        {/* Faculty Expectation Callout */}
        <WidgetCallout
          variant="neutral"
          icon={<Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />}
          title={mathDiagnosticMeta.realityHeader}
          description={activeTopic.admissionsExpectation}
        />
      </WidgetSectionCard>
    </WidgetShell>
  );
}
