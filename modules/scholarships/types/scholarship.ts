import type { Region } from "@/shared/types/region";
import type { SCHOLARSHIP_LEVELS } from "../constants";

export type ScholarshipLevel = (typeof SCHOLARSHIP_LEVELS)[number];

/** One scholarship programme, as the site works with it. */
export interface Scholarship {
  name: string;
  /** Host country, or "Europe" for EU-wide programmes. */
  host: string;
  region: Region;
  level: ScholarshipLevel;
  covers: string;
  eligibility: string;
  deadline: string;
  /** Official page. */
  site: string;
}
