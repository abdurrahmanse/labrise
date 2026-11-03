"use client";

import React from "react";
import { FileText, HelpCircle, Sparkles, GraduationCap } from "lucide-react";
import { DocumentGuideline, documentsGuideControlsData } from "@/data/documentsData";

export interface DocumentOverviewCardProps {
  document: DocumentGuideline;
}

export function DocumentOverviewCard({ document }: DocumentOverviewCardProps) {
  const { what, why } = documentsGuideControlsData.labels;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{document.badge}</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {document.name}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-none bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 self-start sm:self-center">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{document.degreeLevel}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
            <FileText className="w-3.5 h-3.5" />
            <span>{what}</span>
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{document.what}</p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{why}</span>
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{document.why}</p>
        </div>
      </div>
    </div>
  );
}

export default DocumentOverviewCard;
