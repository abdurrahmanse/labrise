import { z } from "zod";
import type { CountryGuide } from "@/data/countryGuidesData";
import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";

const portal = z.object({ name: z.string(), url: z.string(), description: z.string() });

const governmentScholarship = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  coverage: z.string(),
  degreeLevel: z.enum(["Master's & PhD", "Master's Only", "PhD Only"])
});

export const countryGuideSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  flag: z.string(),
  region: z.enum(["Europe", "North America", "Asia", "Oceania"]),
  headline: z.string(),
  summary: z.string(),
  fundingPhilosophy: z.string(),
  commonFundingRoutes: z.array(z.string()),
  governmentScholarships: z.array(governmentScholarship),
  universityScholarships: z.string(),
  phdFundingModel: z.string(),
  mastersFundingModel: z.string(),
  assistantshipsAvailable: z.boolean(),
  assistantshipsDetail: z.string(),
  supervisorContactRequirement: z.enum(["Strictly Required Before Application", "Recommended", "Centralized / Not Required"]),
  supervisorContactNotes: z.string(),
  languageRequirements: z.string(),
  typicalApplicationDeadlines: z.string(),
  importantLimitations: z.array(z.string()),
  officialPortals: z.array(portal),
  applicationSequence: z.array(z.string())
}) satisfies z.ZodType<CountryGuide>;

/** Country scholarship guides (the /countries pages). */
export const countryGuides = defineCollection<CountryGuide>({
  name: "country-guides",
  path: endpoints.countryGuides,
  schema: countryGuideSchema,
  idOf: (guide) => guide.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/data/countryGuidesData")).countryGuidesData
});
