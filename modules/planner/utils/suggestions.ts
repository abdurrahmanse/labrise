import type { SearchResult } from "@/modules/search/client";
import type { ApplicationKind } from "../store/usePlanner";

/** Search result kinds that can become a planned application, and the planner kind each maps to. */
const KIND_OF: Partial<Record<SearchResult["kind"], ApplicationKind>> = {
  University: "university",
  Scholarship: "scholarship",
  Funder: "scholarship"
};

/** Keeps only results the planner can use (professors and countries are not applications). */
export const plannableResults = (results: SearchResult[]) => results.filter((r) => KIND_OF[r.kind]);

/** The suggestion whose title equals the typed name, ignoring case and surrounding spaces. */
export const findSuggestion = (suggestions: SearchResult[], name: string) =>
  suggestions.find((s) => s.title.toLowerCase() === name.trim().toLowerCase());

export const kindOfSuggestion = (suggestion: SearchResult) => KIND_OF[suggestion.kind];
