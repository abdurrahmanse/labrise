"use client";

import { useQuery } from "@tanstack/react-query";
import { directorySchemas } from "../api/schemas";
import type { CountryEntry, DirectoryType, ProfessorEntry, ScholarshipEntry, UniversityEntry } from "../types";

export interface DirectoryEntries {
  countries: CountryEntry[];
  universities: UniversityEntry[];
  professors: ProfessorEntry[];
  scholarships: ScholarshipEntry[];
}

async function fetchDirectory<T extends DirectoryType>(type: T): Promise<DirectoryEntries[T]> {
  const response = await fetch(`/api/directory/${type}`);
  if (!response.ok) throw new Error(`Failed to load ${type}`);
  // Validate the payload so a bad response fails loudly instead of rendering garbage.
  return directorySchemas[type].parse(await response.json()) as DirectoryEntries[T];
}

/** Server-rendered rows are used first (good for SEO), then TanStack Query keeps them fresh. */
export function useDirectory<T extends DirectoryType>(type: T, initialData: DirectoryEntries[T]) {
  const query = useQuery({
    queryKey: ["directory", type],
    queryFn: () => fetchDirectory(type),
    initialData,
    staleTime: 60 * 60 * 1000
  });
  return { ...query, data: query.data ?? initialData };
}
