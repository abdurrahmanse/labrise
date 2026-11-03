import React from "react";
import type { Metadata } from "next";
import { CountryGuidesExplorer } from "@/components/countries/CountryGuidesExplorer";
import { countriesMetadata } from "@/data/metadata";
import { Globe2, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = countriesMetadata;

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium">
            <Globe2 className="w-3.5 h-3.5" />
            <span>20 Verified International Destinations</span>
            <span className="text-slate-600">|</span>
            <span className="text-indigo-400">Official Government Portals</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Explore 20 Global Scholarship Destinations
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Accurate, verified country-by-country guides explaining statutory funding models, government bilateral scholarships, salaried doctoral employment contracts, supervisor outreach rules, and official national search engines.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Europe (12 Countries)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>North America (USA & Canada)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Asia & Oceania (Japan, Korea, China, Singapore, Australia, NZ)</span>
            </span>
          </div>
        </div>

        {/* Interactive Country Explorer */}
        <CountryGuidesExplorer />
      </div>
    </main>
  );
}
