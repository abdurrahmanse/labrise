import React from "react";
import type { Metadata } from "next";
import { ProfessorOutreachView } from "@/components/professors/ProfessorOutreachView";
import { professorsMetadata } from "@/data/metadata";
import { Users, Mail, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = professorsMetadata;

export default function ProfessorsPage() {
  return (
    <main className="min-h-screen bg-canvas-base text-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>Phase 05 Protocol</span>
            <span className="text-slate-600">|</span>
            <span className="text-teal-400">Supervisor Outreach & Email Generator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Find and Contact Professors
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A comprehensive, ethical guide to academic supervisor outreach for research Master&apos;s and PhD candidates. Learn how to audit faculty research alignment, draft concise 180-word cold emails, follow up gracefully, and determine when contacting faculty is legally required.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Tested Cold Email Blueprints</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Supervisor Necessity Rules</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Research-Fit Checklist</span>
            </span>
          </div>
        </div>

        {/* Interactive Outreach Tool & Blueprints */}
        <ProfessorOutreachView />
      </div>
    </main>
  );
}
