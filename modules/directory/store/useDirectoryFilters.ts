"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const REGIONS = ["All", "Europe", "North America", "Asia", "Oceania", "Middle East"] as const;
export type RegionFilter = (typeof REGIONS)[number];

interface DirectoryFiltersState {
  region: RegionFilter;
  query: string;
  setRegion: (region: RegionFilter) => void;
  setQuery: (query: string) => void;
  reset: () => void;
}

export const useDirectoryFilters = create<DirectoryFiltersState>()(
  persist(
    (set) => ({
      region: "All",
      query: "",
      setRegion: (region) => set({ region }),
      setQuery: (query) => set({ query }),
      reset: () => set({ region: "All", query: "" })
    }),
    {
      name: "directory-filters",
      // The search text is temporary; only the chosen region is remembered.
      partialize: (state) => ({ region: state.region })
    }
  )
);
