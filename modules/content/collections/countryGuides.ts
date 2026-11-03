import { defineCollection } from "@/shared/data/collection";
import { endpoints } from "@/shared/data/endpoints";
import { staleTimes } from "@/shared/query/staleTimes";
import type { CountryGuideDto } from "../dto/countryGuideDto";
import { toCountryGuide, toCountryGuideDto } from "../mappers/countryGuideMapper";
import { countryGuideDtoSchema } from "../schemas/countryGuideSchema";
import type { CountryGuide } from "../types/countryGuide";

/** Country scholarship guides (the /countries pages). */
export const countryGuides = defineCollection<CountryGuide, CountryGuideDto>({
  name: "country-guides",
  path: endpoints.countryGuides,
  schema: countryGuideDtoSchema,
  fromDto: toCountryGuide,
  toDto: toCountryGuideDto,
  idOf: (guide) => guide.id,
  staleTime: staleTimes.content,
  local: async () => (await import("@/content/countries/countryGuidesData")).countryGuidesData
});
