"use client";

import React, { useState } from "react";
import { useCountryGuides, type CountryGuide } from "@/modules/content";
import { CountryHeader } from "./CountryHeader";
import { CountryFilters } from "./CountryFilters";
import { CountryCard } from "./CountryCard";
import { legacyText } from "@/data/text/legacy";

export function CountryGuidesExplorer({ initialCountries }: { initialCountries: CountryGuide[] }) {
  const { data: countryGuidesData } = useCountryGuides(initialCountries);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [supervisorFilter, setSupervisorFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCountries = countryGuidesData.filter((country) => {
    if (selectedRegion !== "All" && country.region !== selectedRegion) return false;
    if (supervisorFilter !== "All" && country.supervisorContactRequirement !== supervisorFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = country.name.toLowerCase().includes(q);
      const inHeadline = country.headline.toLowerCase().includes(q);
      const inGov = country.governmentScholarships.some((g) =>
        g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)
      );
      const inRoutes = country.commonFundingRoutes.some((r) => r.toLowerCase().includes(q));
      return inName || inHeadline || inGov || inRoutes;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <CountryHeader />

      {/* Filters */}
      <CountryFilters
        selectedRegion={selectedRegion}
        onSelectedRegionChange={setSelectedRegion}
        supervisorFilter={supervisorFilter}
        onSupervisorFilterChange={setSupervisorFilter}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onExpandAll={() => {}}
        onCollapseAll={() => {}}
        totalCount={countryGuidesData.length}
        filteredCount={filteredCountries.length}
      />

      {/* Country Cards Grid */}
      <div className="space-y-4">
        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
            <h3 className="text-base font-bold text-white">{legacyText.countryGuidesExplorer.t0}</h3>
            <p className="text-xs text-slate-400">
              {legacyText.countryGuidesExplorer.t1}
            </p>
            <button
              onClick={() => {
                setSelectedRegion("All");
                setSupervisorFilter("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold cursor-pointer"
            >
              {legacyText.countryGuidesExplorer.t2}
            </button>
          </div>
        ) : (
          filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))
        )}
      </div>
    </div>
  );
}

export default CountryGuidesExplorer;
