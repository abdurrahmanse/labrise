"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";
import {
  CountryHeroSection,
  CountryOverviewSection,
  CountryFundingRoutesSection,
  CountryGovScholarshipsSection,
  CountryDegreeModelsSection,
  CountryAssistantshipsSection,
  CountrySupervisorSection,
  CountryLanguageDeadlinesSection,
  CountrySequenceSection,
  CountryWarningsSection,
  CountryPortalsSection,
} from "./detail";

interface CountryDetailPageProps {
  country: CountryGuide;
}

export function CountryDetailPage({ country }: CountryDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-slate-100">
      {/* ── 1. Hero & Navigation ── */}
      <CountryHeroSection country={country} />

      {/* ── 2. Page Content Sections (Responsive across 5 devices) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 sm:space-y-14">
        {/* 1. Overview & Funding Philosophy */}
        <CountryOverviewSection
          summary={country.summary}
          fundingPhilosophy={country.fundingPhilosophy}
        />

        {/* 2. Common Funding Routes */}
        <CountryFundingRoutesSection routes={country.commonFundingRoutes} />

        {/* 3. Government & University Scholarships */}
        <CountryGovScholarshipsSection
          scholarships={country.governmentScholarships}
          universityScholarships={country.universityScholarships}
        />

        {/* 4. PhD & Master's Funding Models */}
        <CountryDegreeModelsSection
          mastersFundingModel={country.mastersFundingModel}
          phdFundingModel={country.phdFundingModel}
        />

        {/* 5. Research Assistantships */}
        <CountryAssistantshipsSection
          available={country.assistantshipsAvailable}
          detail={country.assistantshipsDetail}
        />

        {/* 6. Supervisor Contact Guidance */}
        <CountrySupervisorSection
          requirement={country.supervisorContactRequirement}
          notes={country.supervisorContactNotes}
        />

        {/* 7. Language Requirements & Typical Deadlines */}
        <CountryLanguageDeadlinesSection
          languageRequirements={country.languageRequirements}
          typicalApplicationDeadlines={country.typicalApplicationDeadlines}
        />

        {/* 8. Step-by-Step Application Sequence */}
        <CountrySequenceSection steps={country.applicationSequence} />

        {/* 9. Critical Warnings & Limitations */}
        <CountryWarningsSection limitations={country.importantLimitations} />

        {/* 10. Official Portals & Authoritative Resources */}
        <CountryPortalsSection portals={country.officialPortals} />

        {/* ── Page Footer Navigation ── */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Destinations</span>
          </Link>
          <p className="text-xs font-mono text-slate-500">
            {country.flag} {country.name} · {country.region} · {country.code}
          </p>
        </div>
      </div>
    </main>
  );
}

export default CountryDetailPage;
