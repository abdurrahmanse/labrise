export const SEARCH_KINDS = ["Country", "University", "Professor", "Funder", "Scholarship"] as const;
export type SearchKind = (typeof SEARCH_KINDS)[number];

/** One hit in the search box. */
export interface SearchResult {
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
}

/** One page of hits for a search text. `nextPage` is null on the last page. */
export interface SearchPage {
  query: string;
  total: number;
  items: SearchResult[];
  nextPage: number | null;
}
