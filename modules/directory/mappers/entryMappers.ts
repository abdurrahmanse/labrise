import type { CountryDto, ProfessorDto, ProviderDto, UniversityDto } from "../dto/directoryDto";
import type { CountryEntry, ProfessorEntry, ProviderEntry, UniversityEntry } from "../types";

export const toCountry = (dto: CountryDto): CountryEntry => ({
  country: dto.country,
  region: dto.region,
  routes: dto.routes,
  funding: dto.funding,
  supervisor: dto.supervisor,
  fee: dto.fee
});

export const toCountryDto = (entry: CountryEntry): CountryDto => ({
  country: entry.country,
  region: entry.region,
  routes: entry.routes,
  funding: entry.funding,
  supervisor: entry.supervisor,
  fee: entry.fee
});

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

export const toProfessor = (dto: ProfessorDto): ProfessorEntry => ({
  name: dto.name,
  university: dto.university,
  country: dto.country,
  group: dto.group,
  // email and note are left out when absent, so a professor without them stays without them after a round trip
  ...(dto.email === undefined ? {} : { email: dto.email }),
  ...(dto.note === undefined ? {} : { note: dto.note })
});

export const toProfessorDto = (entry: ProfessorEntry): ProfessorDto => ({
  name: entry.name,
  university: entry.university,
  country: entry.country,
  group: entry.group,
  ...(entry.email === undefined ? {} : { email: entry.email }),
  ...(entry.note === undefined ? {} : { note: entry.note })
});

export const toProvider = (dto: ProviderDto): ProviderEntry => ({
  name: dto.name,
  supports: dto.supports,
  country: dto.country,
  region: dto.region,
  kind: dto.kind,
  programs: dto.programs,
  route: dto.route,
  requirements: dto.requirements,
  documents: dto.documents,
  selection: dto.selection,
  site: dto.site
});

export const toProviderDto = (entry: ProviderEntry): ProviderDto => ({
  name: entry.name,
  supports: entry.supports,
  country: entry.country,
  region: entry.region,
  kind: entry.kind,
  programs: entry.programs,
  route: entry.route,
  requirements: entry.requirements,
  documents: entry.documents,
  selection: entry.selection,
  site: entry.site
});
