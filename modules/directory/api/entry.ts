import { z } from "zod";
import type { DirectoryType, ProfessorEntry, ProviderEntry, ScholarshipEntry, UniversityEntry, CountryEntry } from "../types";
import { countrySchema, professorSchema, providerSchema, scholarshipSchema, universitySchema } from "./schemas";

export const relatedItemSchema = z.object({
  kind: z.enum(["Country", "University", "Professor", "Funder", "Scholarship"]),
  title: z.string(),
  subtitle: z.string(),
  href: z.string()
});
export type RelatedItem = z.infer<typeof relatedItemSchema>;

const base = { slug: z.string(), related: z.array(relatedItemSchema) };

/** One entry plus the entries it links to, tagged by type so the client knows which shape it got. */
export const entryResponseSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("countries"), entry: countrySchema, ...base }),
  z.object({ type: z.literal("universities"), entry: universitySchema, ...base }),
  z.object({ type: z.literal("professors"), entry: professorSchema, ...base }),
  z.object({ type: z.literal("scholarships"), entry: scholarshipSchema, ...base }),
  z.object({ type: z.literal("providers"), entry: providerSchema, ...base })
]);
export type EntryResponse = z.infer<typeof entryResponseSchema>;

export interface EntryByType {
  countries: CountryEntry;
  universities: UniversityEntry;
  professors: ProfessorEntry;
  scholarships: ScholarshipEntry;
  providers: ProviderEntry;
}

export const searchResponseSchema = z.object({
  query: z.string(),
  total: z.number(),
  items: z.array(relatedItemSchema.extend({ kind: relatedItemSchema.shape.kind })),
  nextPage: z.number().nullable()
});
export type SearchResponse = z.infer<typeof searchResponseSchema>;

export type { DirectoryType };
