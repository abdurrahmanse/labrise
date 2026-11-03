import { z } from "zod";
import { REGION_NAMES } from "@/shared/types/region";
import { SCHOLARSHIP_LEVELS } from "../constants";

/** Wire format of one scholarship. Mapped to the Scholarship entity by mappers/scholarshipMapper.ts. */
export const scholarshipDtoSchema = z.object({
  name: z.string(),
  host: z.string(),
  region: z.enum(REGION_NAMES),
  level: z.enum(SCHOLARSHIP_LEVELS),
  covers: z.string(),
  eligibility: z.string(),
  deadline: z.string(),
  site: z.string()
});

/** Wire format of one page of search results. */
export const scholarshipPageDtoSchema = z.object({
  items: z.array(scholarshipDtoSchema),
  total: z.number(),
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number()
});
