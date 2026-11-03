"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COUNTRY_SECTIONS, countrySectionHref, type CountrySection } from "./countrySections";
import { SubNav } from "@/shared/components/SubNav";
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
  section?: CountrySection;
}

export function CountryDetailPage({ country, section = "overview" }: CountryDetailPageProps) {
  return (
    <main className="min-h-screen bg-canvas-base text-slate-100">
      <CountryHeroSection country={country} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10">
        <SubNav
          label={`${country.name} guide sections`}
          items={COUNTRY_SECTIONS.map((s) => ({ href: countrySectionHref(country.id, s.id), label: s.label }))}
        />

        {section === "overview" && (
          <>
            <CountryOverviewSection summary={country.summary} fundingPhilosophy={country.fundingPhilosophy} />
            <CountryFundingRoutesSection routes={country.commonFundingRoutes} />
            <CountrySupervisorSection requirement={country.supervisorContactRequirement} notes={country.supervisorContactNotes} />
          </>
        )}

        {section === "funding" && (
          <>
            <CountryGovScholarshipsSection scholarships={country.governmentScholarships} universityScholarships={country.universityScholarships} />
            <CountryDegreeModelsSection mastersFundingModel={country.mastersFundingModel} phdFundingModel={country.phdFundingModel} />
            <CountryAssistantshipsSection available={country.assistantshipsAvailable} detail={country.assistantshipsDetail} />
          </>
        )}

        {section === "apply" && (
          <>
            <CountryLanguageDeadlinesSection languageRequirements={country.languageRequirements} typicalApplicationDeadlines={country.typicalApplicationDeadlines} />
            <CountrySequenceSection steps={country.applicationSequence} />
            <CountryWarningsSection limitations={country.importantLimitations} />
            <CountryPortalsSection portals={country.officialPortals} />
          </>
        )}

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
