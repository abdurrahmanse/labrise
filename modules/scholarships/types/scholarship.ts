import type { ScholarshipEntry } from "@/modules/directory/contracts";

/** One scholarship programme, as the site shows it. */
export type Scholarship = ScholarshipEntry;
export type ScholarshipLevel = Scholarship["level"];
