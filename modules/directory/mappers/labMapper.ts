import type { LabDto } from "../dto/directoryDto";
import type { LabEntry } from "../types";

export const toLab = (dto: LabDto): LabEntry => ({
  name: dto.name,
  kind: dto.kind,
  country: dto.country,
  region: dto.region,
  ...(dto.university !== undefined && { university: dto.university }),
  focus: dto.focus,
  offers: dto.offers,
  professors: dto.professors,
  site: dto.site
});

export const toLabDto = (entry: LabEntry): LabDto => ({
  name: entry.name,
  kind: entry.kind,
  country: entry.country,
  region: entry.region,
  ...(entry.university !== undefined && { university: entry.university }),
  focus: entry.focus,
  offers: entry.offers,
  professors: entry.professors,
  site: entry.site
});
