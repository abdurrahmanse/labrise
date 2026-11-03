"use client";

import { useSearch } from "@/modules/search/client";
import { plannableResults } from "../utils/suggestions";

const MIN_CHARS = 2;

/** Names the planner can offer while typing. They come from the search API, so the page does not ship the whole directory. */
export function useNameSuggestions(name: string) {
  const search = useSearch(name, name.trim().length >= MIN_CHARS);
  return plannableResults(search.items);
}
