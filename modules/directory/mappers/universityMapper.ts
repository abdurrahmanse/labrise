import type { UniversityDto } from "../dto/directoryDto";
import type { UniversityEntry } from "../types";

export const toUniversity = (dto: UniversityDto): UniversityEntry => ({
  name: dto.name,
  country: dto.country,
  region: dto.region,
  funding: dto.funding,
  deadline: dto.deadline,
  site: dto.site
});

export const toUniversityDto = (entry: UniversityEntry): UniversityDto => ({
  name: entry.name,
  country: entry.country,
  region: entry.region,
  funding: entry.funding,
  deadline: entry.deadline,
  site: entry.site
});
