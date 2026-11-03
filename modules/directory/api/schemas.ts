import { z } from "zod";

export const directoryTypeSchema = z.enum(["countries", "universities", "professors", "scholarships"]);

const region = z.enum(["Europe", "North America", "Asia", "Oceania", "Middle East"]);

export const countrySchema = z.object({
  country: z.string(),
  region,
  routes: z.string(),
  funding: z.string(),
  supervisor: z.enum(["Required first", "Recommended", "Not needed"]),
  fee: z.string()
});

export const universitySchema = z.object({
  name: z.string(),
  country: z.string(),
  region,
  funding: z.string(),
  deadline: z.string(),
  site: z.string()
});

export const professorSchema = z.object({
  name: z.string(),
  university: z.string(),
  country: z.string(),
  group: z.string(),
  email: z.string().optional(),
  note: z.string().optional()
});

export const scholarshipSchema = z.object({
  name: z.string(),
  host: z.string(),
  region,
  level: z.enum(["Master's", "PhD", "Master's & PhD", "PhD & research"]),
  covers: z.string(),
  eligibility: z.string(),
  deadline: z.string(),
  site: z.string()
});

export const directorySchemas = {
  countries: z.array(countrySchema),
  universities: z.array(universitySchema),
  professors: z.array(professorSchema),
  scholarships: z.array(scholarshipSchema)
} as const;
