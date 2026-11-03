import { z } from "zod";
import { SEARCH_KINDS } from "../types";

export const searchResultSchema = z.object({
  kind: z.enum(SEARCH_KINDS),
  title: z.string(),
  subtitle: z.string(),
  href: z.string()
});
export type SearchResult = z.infer<typeof searchResultSchema>;

/** One page of GET /api/search. `nextPage` is null on the last page. */
export const searchResponseSchema = z.object({
  query: z.string(),
  total: z.number(),
  items: z.array(searchResultSchema),
  nextPage: z.number().nullable()
});
export type SearchResponse = z.infer<typeof searchResponseSchema>;
