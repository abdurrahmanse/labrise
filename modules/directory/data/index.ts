import type { DirectoryEntries, DirectoryType } from "../types";
import { countries } from "./countries";
import { labs } from "./labs";
import { professors } from "./professors";
import { providers } from "./providers";
import { scholarships } from "./scholarships";
import { universities } from "./universities";

export { countries, labs, professors, providers, scholarships, universities };

export const directoryData: DirectoryEntries = { countries, universities, professors, scholarships, providers, labs };

export const directoryTypes: { type: DirectoryType; title: string; lead: string }[] = [
  { type: "countries", title: "Countries", lead: "Funded routes and what you get." },
  { type: "universities", title: "Universities", lead: "Funding type and typical deadline." },
  { type: "professors", title: "Professors", lead: "Save professors, track your outreach and copy emails taken from official pages." },
  { type: "providers", title: "Scholarship providers", lead: "The organisations that award scholarships, with what they ask from applicants." },
  { type: "scholarships", title: "Scholarships", lead: "Major fully funded programs, what they cover and who can apply." },
  { type: "labs", title: "Labs & groups", lead: "Research labs, institutes and communities, linked to their country, university and professors." }
];
