import type { DirectoryType } from "../types";
import { countries } from "./countries";
import { professors } from "./professors";
import { scholarships } from "./scholarships";
import { universities } from "./universities";

export { countries, professors, scholarships, universities };

export const directoryData = { countries, universities, professors, scholarships } as const;

export const directoryTypes: { type: DirectoryType; title: string; lead: string }[] = [
  { type: "countries", title: "Countries", lead: "Funded routes and what you get." },
  { type: "universities", title: "Universities", lead: "Funding type and typical deadline." },
  { type: "professors", title: "Professors", lead: "Copy emails only from the official university page." },
  { type: "scholarships", title: "Scholarships", lead: "Major fully funded programs, what they cover and who can apply." }
];
