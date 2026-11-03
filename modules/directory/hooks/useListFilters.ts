"use client";

import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

/** Search text, region and page live in the URL, so any view can be shared. */
export function useListFilters() {
  return useQueryStates(
    {
      q: parseAsString.withDefault(""),
      region: parseAsString.withDefault("All"),
      page: parseAsInteger.withDefault(1)
    },
    { history: "replace" }
  );
}
