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

export type { DirectoryType };
