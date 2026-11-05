import type { ProfessorDto } from "../dto/directoryDto";
import type { ProfessorEntry } from "../types";

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
