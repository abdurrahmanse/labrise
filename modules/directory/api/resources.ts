import { z } from "zod";
import { scholarshipDtoSchema, toScholarship, toScholarshipDto } from "@/modules/scholarships/contracts";
import type { DtoOf } from "../dto/directoryDto";
import { toCountry, toCountryDto, toProfessor, toProfessorDto, toProvider, toProviderDto, toUniversity, toUniversityDto } from "../mappers/entryMappers";
import { countryDtoSchema, professorDtoSchema, providerDtoSchema, universityDtoSchema } from "../schemas/directorySchemas";
import type { DirectoryType, EntryOf } from "../types";

/** How one directory type crosses the wire: the schema for its list, and the mappers for each entry. */
interface ListResource<T extends DirectoryType> {
  schema: z.ZodType<DtoOf[T][]>;
  fromDto: (dto: DtoOf[T]) => EntryOf[T];
  toDto: (entry: EntryOf[T]) => DtoOf[T];
}

const resources: { [T in DirectoryType]: ListResource<T> } = {
  countries: { schema: z.array(countryDtoSchema), fromDto: toCountry, toDto: toCountryDto },
  universities: { schema: z.array(universityDtoSchema), fromDto: toUniversity, toDto: toUniversityDto },
  professors: { schema: z.array(professorDtoSchema), fromDto: toProfessor, toDto: toProfessorDto },
  scholarships: { schema: z.array(scholarshipDtoSchema), fromDto: toScholarship, toDto: toScholarshipDto },
  providers: { schema: z.array(providerDtoSchema), fromDto: toProvider, toDto: toProviderDto }
};

/** The list resource for a directory type, typed by that type's entity and DTO. */
export const listResourceOf = <T extends DirectoryType>(type: T): ListResource<T> => resources[type];
