import type { ProviderDto } from "../dto/directoryDto";
import type { ProviderEntry } from "../types";

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
