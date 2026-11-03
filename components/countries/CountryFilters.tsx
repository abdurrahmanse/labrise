"use client";

import React from "react";
import { Users, Layers, Globe2 } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { countryGuidesControlsData } from "@/data/countryGuidesData";
import { countryGuidesUiData } from "@/data/countryGuidesUiData";

export interface CountryFiltersProps {
  selectedRegion: string;
  onSelectedRegionChange: (region: string) => void;
  supervisorFilter: string;
  onSupervisorFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  /** @deprecated No longer used — cards link to detail pages */
  onExpandAll?: () => void;
  /** @deprecated No longer used — cards link to detail pages */
  onCollapseAll?: () => void;
  totalCount: number;
  filteredCount: number;
}

export function CountryFilters({
  selectedRegion,
  onSelectedRegionChange,
  supervisorFilter,
  onSupervisorFilterChange,
  searchQuery,
  onSearchQueryChange,
  totalCount,
  filteredCount
}: CountryFiltersProps) {
  const { regions, supervisorFilters, searchPlaceholder } = countryGuidesControlsData;
  const { filters } = countryGuidesUiData;

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => onSelectedRegionChange(reg)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {reg === "All" && <Globe2 className="w-3 h-3 shrink-0" />}
              <span>{reg}</span>
              {reg === "All" && <span className="opacity-75">({totalCount})</span>}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <SearchInput
            value={searchQuery}
            onChange={onSearchQueryChange}
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Supervisor Filter Dropdown */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono">
            <Users className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{filters.supervisorLabel}</span>
          </span>
          <select
            value={supervisorFilter}
            onChange={(e) => onSupervisorFilterChange(e.target.value)}
            className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            {supervisorFilters.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Count */}
        <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
          <Layers className="w-3.5 h-3.5 text-teal-400" />
          <span>
            {filters.showingPrefix} {filteredCount} {filters.ofSeparator} {totalCount} {filters.countriesSuffix}
          </span>
        </span>
      </div>
    </div>
  );
}

export default CountryFilters;
