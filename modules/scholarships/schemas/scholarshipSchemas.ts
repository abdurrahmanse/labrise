import { z } from "zod";
import { scholarshipSchema } from "@/modules/directory/contracts";
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants";
import { SCHOLARSHIP_SORTS } from "../types/search";

export { scholarshipSchema };

const text = z.string().trim().min(1).max(100);

/** Query string of GET /api/scholarships. Used by the route and by the URL filter hook. */
export const searchParamsSchema = z.object({
  q: text.optional(),
  country: text.optional(),
  level: scholarshipSchema.shape.level.optional(),
  region: scholarshipSchema.shape.region.optional(),
  sort: z.enum(SCHOLARSHIP_SORTS).optional(),
  page: z.coerce.number().int().min(1).max(1000).default(1),
  pageSize: z.coerce.number().int().min(1).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE)
});

export const scholarshipPageSchema = z.object({
  items: z.array(scholarshipSchema),
  total: z.number(),
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number()
});
