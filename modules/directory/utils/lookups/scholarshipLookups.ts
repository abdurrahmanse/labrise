import { parentCountry } from "../../data/connections";
import { scholarships } from "../../data/scholarships";
import { scholarshipSlug } from "../slugs";

export const findScholarship = (slug: string) => scholarships.find((s) => scholarshipSlug(s) === slug);

/** Scholarships hosted by a country (the data uses the country name or "Europe" for EU-wide programs). */
export const scholarshipsInCountry = (country: string) =>
  scholarships.filter((s) => s.host === country || s.host === parentCountry[country]);
