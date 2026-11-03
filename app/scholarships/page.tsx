import React from "react";
import type { Metadata } from "next";
import { ScholarshipFinderView } from "@/components/scholarships/ScholarshipFinderView";
import { scholarshipsMetadata } from "@/data/metadata";
import { Search, ShieldCheck, CheckCircle2, Terminal } from "lucide-react";

export const metadata: Metadata = scholarshipsMetadata;

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-canvas-base text-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium">
            <Search className="w-3.5 h-3.5" />
            <span>Phase 04 Methodology</span>
            <span className="text-slate-600">|</span>
            <span className="text-indigo-400">Official Database Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Find Scholarships and Universities
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A comprehensive, 11-step discovery workflow to locate legitimate, accredited university departments, government bilateral awards, and funded doctoral research positions without falling into commercial aggregator traps.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-teal-400" />
              <span>Copyable Boolean Search Formulas</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Government Portals</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Anti-Fraud Detection Rules</span>
            </span>
          </div>
        </div>

        {/* Interactive Search Tool & Guide */}
        <ScholarshipFinderView />
      </div>
    </main>
  );
}
