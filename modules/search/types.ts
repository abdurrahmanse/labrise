export const SEARCH_KINDS = ["Country", "University", "Professor", "Funder", "Scholarship"] as const;
export type SearchKind = (typeof SEARCH_KINDS)[number];
