"use client";

import React, { useState } from "react";
import { BookOpen, Target, Sparkles, Award, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { literatureMatrixData, literatureMatrixMeta } from "@/data/stepWidgetsData";
import {
  WidgetShell,
  WidgetHeader,
  WidgetTabs,
  WidgetTabButton,
  WidgetSectionCard,
  WidgetCallout
} from "./common";

export function StepLiteratureMatrixWidget() {
  const [selectedDomainId, setSelectedDomainId] = useState("efficient-llm");
  const selectedDomain =
    literatureMatrixData.find((d) => d.id === selectedDomainId) || literatureMatrixData[0];

  return (
    <WidgetShell theme="purple">
      {/* Header */}
      <WidgetHeader
        theme="purple"
        icon={<BookOpen className="w-5 h-5" />}
        stepBadge={literatureMatrixMeta.stepBadge}
        title={literatureMatrixMeta.title}
        headerBadge={literatureMatrixMeta.headerBadge}
      />

      {/* Domain Switcher */}
      <WidgetTabs columns={3}>
        {literatureMatrixData.map((d) => (
          <WidgetTabButton
            key={d.id}
            theme="purple"
            isActive={selectedDomainId === d.id}
            onClick={() => setSelectedDomainId(d.id)}
            topLabel="Subfield Focus"
            mainLabel={d.domain}
          />
        ))}
      </WidgetTabs>

      {/* Domain Deep-Dive Container */}
      <WidgetSectionCard
        headerSlot={
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Active Specialization
              </span>
              <h5 className="text-sm sm:text-base font-heading font-bold text-white">
                {selectedDomain.domain}
              </h5>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">
                Primary Venues:
              </span>
              {selectedDomain.recommendedVenues.map((v) => (
                <Badge key={v} variant="purple" size="sm">
                  {v}
                </Badge>
              ))}
            </div>
          </div>
        }
      >
        {/* Hot Problems & Open Questions */}
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 mb-2.5">
            <Target className="w-3.5 h-3.5 text-purple-400" />
            High-Yield Research Problems & Algorithmic Gaps:
          </span>
          <div className="space-y-2">
            {selectedDomain.hotProblems.map((prob, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-canvas-base border border-white/5 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <span className="font-mono text-purple-400 font-bold shrink-0">
                  [GAP 0{i + 1}]
                </span>
                <span className="leading-relaxed">{prob}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canonical Papers to Dissect */}
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            Benchmark Papers Every Applicant Must Master:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedDomain.foundationalPapers.map((paper, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-canvas-base border border-white/5 space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-white leading-tight">
                    {paper.title}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <div className="text-[11px] font-mono text-cyan-400">
                  {paper.authorsYear}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {paper.coreTakeaway}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Whiteboard Defense Pitch Strategy */}
        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/40">
          <span className="text-[10px] font-mono uppercase font-bold text-purple-300 block mb-1">
            Faculty Whiteboard Formulation Pitch:
          </span>
          <p className="text-xs font-mono text-slate-200 leading-relaxed italic">
            &ldquo;{selectedDomain.whiteboardAttackAngle}&rdquo;
          </p>
        </div>

        {/* Advisors Filter Principle Callout */}
        <WidgetCallout
          variant="neutral"
          icon={<Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />}
          title={literatureMatrixMeta.advisorsVerdict}
          description={literatureMatrixMeta.advisorsQuote}
        />
      </WidgetSectionCard>
    </WidgetShell>
  );
}
