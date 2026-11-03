import type { z } from "zod";
import type { countryGuideDtoSchema } from "../schemas/countryGuideSchema";

export type CountryGuideDto = z.infer<typeof countryGuideDtoSchema>;
