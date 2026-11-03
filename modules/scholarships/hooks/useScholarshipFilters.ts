"use client";

import { parseAsInteger, parseAsString, parseAsStringLiteral, useQueryStates } from "nuqs";
import { SCHOLARSHIP_SORTS, type ScholarshipSearchParams } from "../types/search";

/** Search, filters, sort and page live in the URL, so any result page can be shared or bookmarked. */
export function useScholarshipFilters() {
  const [state, setState] = useQueryStates(
    {
      q: parseAsString.withDefault(""),
      country: parseAsString.withDefault(""),
      level: parseAsString.withDefault(""),
      sort: parseAsStringLiteral(SCHOLARSHIP_SORTS),
      page: parseAsInteger.withDefault(1)
    },
    { history: "replace" }
  );

  /** Changing any filter returns to page 1. */
  const setFilters = (next: Partial<Omit<typeof state, "page">>) => setState({ ...next, page: 1 });

  const params: ScholarshipSearchParams = {
    q: state.q || undefined,
    country: state.country || undefined,
    level: (state.level || undefined) as ScholarshipSearchParams["level"],
    sort: state.sort ?? undefined,
    page: state.page
  };

  return { state, params, setFilters, setPage: (page: number) => setState({ page }) };
}
