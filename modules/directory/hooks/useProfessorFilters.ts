"use client";

import { parseAsBoolean, parseAsInteger, parseAsString, parseAsStringLiteral, useQueryStates } from "nuqs";
import { SORTS } from "../utils/professorFilters";

/** Filters and page live in the URL, so a filtered view can be shared or bookmarked. */
export function useProfessorFilters() {
  return useQueryStates(
    {
      q: parseAsString.withDefault(""),
      region: parseAsString.withDefault("All"),
      field: parseAsString.withDefault("All"),
      hasEmail: parseAsBoolean.withDefault(false),
      savedOnly: parseAsBoolean.withDefault(false),
      sort: parseAsStringLiteral(SORTS).withDefault("name"),
      page: parseAsInteger.withDefault(1)
    },
    { history: "replace" }
  );
}
