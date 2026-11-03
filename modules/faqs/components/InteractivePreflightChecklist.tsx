"use client";

import React, { useState } from "react";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WidgetChecklistItem } from "@/components/roadmap/widgets/common";
import { preflightChecklistData } from "@/data/faqsSectionData";
import { faqsPageData } from "@/data/pagesData";
import { legacyText } from "@/data/text/legacy";

export function InteractivePreflightChecklist() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    "preflight-0": true,
    "preflight-1": true
  });

  const sectionMeta = faqsPageData.sections[2];

  const toggle = (idx: number) => {
    const key = `preflight-${idx}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const completed = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completed / preflightChecklistData.length) * 100);

  return (
    <section id="readiness-checklist" className="py-20 border-b border-white/10 bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Pre-Flight Audit"}
          badgeVariant="emerald"
          badgeIcon={<ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Pre-Flight Application Readiness Checklist"}
          subtitle={sectionMeta?.subtitle || "Audit these 5 mandatory criteria before submitting your final applications on December priority deadlines."}
        />

        <SectionCard
          variant="default"
          borderGlow="emerald"
          className="bg-canvas-card"
          headerClassName="pb-6 mb-6 border-b border-white/10"
          headerRight={
            <Badge variant={completed === preflightChecklistData.length ? "emerald" : "amber"} size="md">
              {completed === preflightChecklistData.length ? "Ready for Submission" : `${progressPercent}% Complete`}
            </Badge>
          }
          title={
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block">{legacyText.interactivePreflightChecklist.t0}</span>
              <span className="text-2xl font-heading font-bold text-white font-mono mt-0.5 block">
                {completed} of {preflightChecklistData.length} Verified
              </span>
            </div>
          }
          footer={
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs w-full">
              <span className="text-slate-400">
                {legacyText.interactivePreflightChecklist.t1}
              </span>
              <Button
                href="/roadmap"
                variant="emerald"
                size="md"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                {legacyText.interactivePreflightChecklist.t2}
              </Button>
            </div>
          }
        >
          {/* Progress Bar */}
          <div className="mb-6 space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>{legacyText.interactivePreflightChecklist.t3}</span>
              <span className="font-bold text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-canvas-base h-2.5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {preflightChecklistData.map((item, idx) => {
              const isChecked = !!checkedItems[`preflight-${idx}`];
              return (
                <WidgetChecklistItem
                  key={idx}
                  isChecked={isChecked}
                  onClick={() => toggle(idx)}
                  label={item}
                  theme="emerald"
                  className="p-4"
                />
              );
            })}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
