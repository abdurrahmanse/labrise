import { z } from "zod";

const portalDto = z.object({ name: z.string(), url: z.string(), description: z.string() });

const governmentScholarshipDto = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  coverage: z.string(),
  degreeLevel: z.enum(["Master's & PhD", "Master's Only", "PhD Only"])
});

/** Wire format of a country guide. Mapped to the CountryGuide entity by mappers/countryGuideMapper.ts. */
export const countryGuideDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  flag: z.string(),
  region: z.enum(["Europe", "North America", "Asia", "Oceania"]),
  headline: z.string(),
  summary: z.string(),
  fundingPhilosophy: z.string(),
  commonFundingRoutes: z.array(z.string()),
  governmentScholarships: z.array(governmentScholarshipDto),
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
  officialPortals: z.array(portalDto),
  applicationSequence: z.array(z.string())
});
