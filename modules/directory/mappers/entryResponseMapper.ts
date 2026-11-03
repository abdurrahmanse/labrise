import { toScholarship, toScholarshipDto } from "@/modules/scholarships/contracts";
import type { EntryLinkDto, EntryResponseDto } from "../dto/directoryDto";
import type { EntryLink, EntryResult } from "../types";
import { toCountry, toCountryDto, toProfessor, toProfessorDto, toProvider, toProviderDto, toUniversity, toUniversityDto } from "./entryMappers";

const toEntryLink = (dto: EntryLinkDto): EntryLink => ({ kind: dto.kind, title: dto.title, subtitle: dto.subtitle, href: dto.href });
const toEntryLinkDto = (link: EntryLink): EntryLinkDto => ({ kind: link.kind, title: link.title, subtitle: link.subtitle, href: link.href });

/** Wire format to the result the site works with: the entry becomes its entity, the links become plain objects. */
export function toEntryResult(dto: EntryResponseDto): EntryResult {
  const common = { slug: dto.slug, related: dto.related.map(toEntryLink) };
  switch (dto.type) {
    case "countries":
      return { type: dto.type, entry: toCountry(dto.entry), ...common };
    case "universities":
      return { type: dto.type, entry: toUniversity(dto.entry), ...common };
    case "professors":
      return { type: dto.type, entry: toProfessor(dto.entry), ...common };
    case "scholarships":
      return { type: dto.type, entry: toScholarship(dto.entry), ...common };
    case "providers":
      return { type: dto.type, entry: toProvider(dto.entry), ...common };
  }
}

/** Entity result to wire format, used by the built-in /api route so it sends what a real backend would. */
export function toEntryResponseDto(result: EntryResult): EntryResponseDto {
  const common = { slug: result.slug, related: result.related.map(toEntryLinkDto) };
  switch (result.type) {
    case "countries":
      return { type: result.type, entry: toCountryDto(result.entry), ...common };
    case "universities":
      return { type: result.type, entry: toUniversityDto(result.entry), ...common };
    case "professors":
      return { type: result.type, entry: toProfessorDto(result.entry), ...common };
    case "scholarships":
      return { type: result.type, entry: toScholarshipDto(result.entry), ...common };
    case "providers":
      return { type: result.type, entry: toProviderDto(result.entry), ...common };
  }
}
