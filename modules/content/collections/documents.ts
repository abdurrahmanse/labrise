import { z } from "zod";
import type { DocumentGuideline } from "@/data/documentsData";
import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";

export const documentSchema = z.object({
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
}) satisfies z.ZodType<DocumentGuideline>;

/** Application document guides (CV, SOP, recommendation letters and so on). */
export const documents = defineCollection<DocumentGuideline>({
  name: "documents",
  path: endpoints.documents,
  schema: documentSchema,
  idOf: (doc) => doc.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/data/documentsData")).documentsData
});
