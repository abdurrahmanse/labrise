import type { RegionFilter } from "./regions";
import type { Region } from "@/shared/types/region";

interface FilterInput<T> {
  entries: T[];
  region: RegionFilter;
  query: string;
  regionOf: (entry: T) => Region | undefined;
  searchText: (entry: T) => string;
}

export function filterEntries<T>({ entries, region, query, regionOf, searchText }: FilterInput<T>): T[] {
  const q = query.trim().toLowerCase();
  return entries.filter(
    (entry) =>
      (region === "All" || regionOf(entry) === region) && (!q || searchText(entry).toLowerCase().includes(q))
  );
}
