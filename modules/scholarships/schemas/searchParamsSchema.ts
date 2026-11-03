import { z } from "zod";
import { REGION_NAMES } from "@/shared/types/region";
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, SCHOLARSHIP_LEVELS } from "../constants";
import { SCHOLARSHIP_SORTS } from "../types/search";

const text = z.string().trim().min(1).max(100);

/** Query string of GET /api/scholarships: what a caller may ask for. Used by the route and by any backend that serves it. */
export const searchParamsSchema = z.object({
  q: text.optional(),
  country: text.optional(),
  level: z.enum(SCHOLARSHIP_LEVELS).optional(),
  region: z.enum(REGION_NAMES).optional(),
  sort: z.enum(SCHOLARSHIP_SORTS).optional(),
  page: z.coerce.number().int().min(1).max(1000).default(1),
  pageSize: z.coerce.number().int().min(1).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE)
});
