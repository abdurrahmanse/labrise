import type { z } from "zod";
import type { ScholarshipDto } from "@/modules/scholarships/contracts";
import type {
  countryDtoSchema,
  entryLinkDtoSchema,
  entryResponseDtoSchema,
  professorDtoSchema,
  providerDtoSchema,
  universityDtoSchema
} from "../schemas/directorySchemas";

export type CountryDto = z.infer<typeof countryDtoSchema>;
export type UniversityDto = z.infer<typeof universityDtoSchema>;
export type ProfessorDto = z.infer<typeof professorDtoSchema>;
export type ProviderDto = z.infer<typeof providerDtoSchema>;
export type EntryLinkDto = z.infer<typeof entryLinkDtoSchema>;
export type EntryResponseDto = z.infer<typeof entryResponseDtoSchema>;

/** The wire format each directory type lists. */
export interface DtoOf {
  countries: CountryDto;
  universities: UniversityDto;
  professors: ProfessorDto;
  scholarships: ScholarshipDto;
  providers: ProviderDto;
}
