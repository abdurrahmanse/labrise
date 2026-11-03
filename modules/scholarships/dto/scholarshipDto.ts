import type { z } from "zod";
import type { scholarshipDtoSchema, scholarshipPageDtoSchema } from "../schemas/scholarshipSchema";

export type ScholarshipDto = z.infer<typeof scholarshipDtoSchema>;
export type ScholarshipPageDto = z.infer<typeof scholarshipPageDtoSchema>;
