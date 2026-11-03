import { z } from "zod";
import { SEARCH_KINDS } from "../types";

export const searchResultDtoSchema = z.object({
  kind: z.enum(SEARCH_KINDS),
  title: z.string(),
  subtitle: z.string(),
  href: z.string()
});

/** Wire format of one page of GET /api/search. Mapped to SearchPage by mappers/searchMapper.ts. */
export const searchResponseDtoSchema = z.object({
  query: z.string(),
  total: z.number(),
  items: z.array(searchResultDtoSchema),
  nextPage: z.number().nullable()
});
