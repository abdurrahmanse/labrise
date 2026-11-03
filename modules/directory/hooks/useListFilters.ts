"use client";

import { parseAsInteger, parseAsString, parseAsStringLiteral, useQueryStates } from "nuqs";
import { REGIONS } from "../utils/regions";

/** Search text, region and page live in the URL, so any view can be shared. */
export function useListFilters() {
  return useQueryStates(
    {
      q: parseAsString.withDefault(""),
      region: parseAsStringLiteral(REGIONS).withDefault("All"),
      page: parseAsInteger.withDefault(1)
    },
    { history: "replace" }
  );
}
