import { z } from "zod";
import { REGION_NAMES } from "@/shared/types/region";
import { DIRECTORY_TYPES, ENTRY_KINDS } from "../constants";
import { scholarshipDtoSchema } from "@/modules/scholarships/contracts";

/** Which kind of entry a URL or request asks for. */
export const directoryTypeSchema = z.enum(DIRECTORY_TYPES);

const region = z.enum(REGION_NAMES);

export const countryDtoSchema = z.object({
  country: z.string(),
  region,
  routes: z.string(),
  funding: z.string(),
  supervisor: z.enum(["Required first", "Recommended", "Not needed"]),
  fee: z.string()
});

export const universityDtoSchema = z.object({
  name: z.string(),
  country: z.string(),
  region,
  funding: z.string(),
  deadline: z.string(),
  site: z.string()
});

export const professorDtoSchema = z.object({
  name: z.string(),
  university: z.string(),
  country: z.string(),
  group: z.string(),
  email: z.string().optional(),
  note: z.string().optional()
});

export const providerDtoSchema = z.object({
  name: z.string(),
  supports: z.string(),
  country: z.string(),
  region,
  kind: z.string(),
  programs: z.array(z.string()),
  route: z.string(),
  requirements: z.array(z.string()),
  documents: z.array(z.string()),
  selection: z.string(),
  site: z.string()
});

export const labDtoSchema = z.object({
  name: z.string(),
  kind: z.string(),
  country: z.string(),
  region,
  university: z.string().optional(),
  focus: z.string(),
  offers: z.string(),
  professors: z.array(z.string()),
  site: z.string()
});

export const entryLinkDtoSchema = z.object({
  kind: z.enum(ENTRY_KINDS),
  title: z.string(),
  subtitle: z.string(),
  href: z.string()
});

const base = { slug: z.string(), related: z.array(entryLinkDtoSchema) };

/** Wire format of GET /api/directory/{type}/{slug}: one entry plus the entries it links to. The scholarship entry reuses the scholarships module's DTO. */
export const entryResponseDtoSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("countries"), entry: countryDtoSchema, ...base }),
  z.object({ type: z.literal("universities"), entry: universityDtoSchema, ...base }),
  z.object({ type: z.literal("professors"), entry: professorDtoSchema, ...base }),
  z.object({ type: z.literal("scholarships"), entry: scholarshipDtoSchema, ...base }),
  z.object({ type: z.literal("providers"), entry: providerDtoSchema, ...base }),
  z.object({ type: z.literal("labs"), entry: labDtoSchema, ...base })
]);
