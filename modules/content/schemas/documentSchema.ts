import { z } from "zod";

/** Wire format of an application document guide. Mapped to the DocumentGuideline entity by mappers/documentMapper.ts. */
export const documentDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  badge: z.string(),
  degreeLevel: z.enum(["Universal", "Master's Heavy", "PhD / Research Master's"]),
  what: z.string(),
  why: z.string(),
  structure: z.array(z.object({ section: z.string(), guidance: z.string() })),
  commonMistakes: z.array(z.string()),
  officialChecks: z.array(z.string()),
  checklistItems: z.array(z.object({ id: z.string(), label: z.string(), tip: z.string().optional() }))
});
