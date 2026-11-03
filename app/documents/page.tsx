import React from "react";
import type { Metadata } from "next";
import { DocumentsGuideView } from "@/components/documents/DocumentsGuideView";
import { documentsMetadata } from "@/data/metadata";
import { FileCheck, ShieldCheck, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = documentsMetadata;

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-canvas-base text-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Phase 06 Dossier Preparation</span>
            <span className="text-slate-600">|</span>
            <span className="text-indigo-400">Universal & Degree-Specific Documents</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Required Documents Guide & Checklists
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A comprehensive, rigorous dossier preparation guide covering Academic CVs, 5-part Statements of Purpose, Research Proposals, Letters of Recommendation, official transcripts, and language test documentation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Structural Blueprints</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Disqualification Traps Avoidance</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Client-Side Readiness Checklists</span>
            </span>
          </div>
        </div>

        {/* Interactive Documents Explorer */}
        <DocumentsGuideView />
      </div>
    </main>
  );
}
