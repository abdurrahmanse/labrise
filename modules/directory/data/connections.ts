// How funders connect to places. Each link means "this organisation funds or runs programmes here".
// Check the provider page for the exact rules. Connections are listed only where they are well known.

import { moreUniversityOnlyProviders } from "./providersMore";

/** Providers tied to a single university. They are not offered across the whole country. */
export const universityOnlyProviders: Record<string, string> = {
  ...moreUniversityOnlyProviders,
  "Gates Cambridge Trust": "University of Cambridge",
  "Rhodes Trust": "University of Oxford",
  "Knight-Hennessy Scholars (Stanford University)": "Stanford University",
  "King Abdullah University of Science and Technology (KAUST)": "KAUST"
};

/** Providers that fund study across a whole region of countries, not one host country. */
export const countryWideEuropeanProviders = [
  "European Education and Culture Executive Agency (Erasmus+)",
  "European Commission (Marie Skłodowska-Curie Actions)"
];

/** Countries where the European programmes above are available. */
export const europeanProgrammeCountries = [
  "Germany", "Sweden", "Netherlands", "Denmark", "Finland", "Belgium", "Austria", "France", "Italy", "Spain", "Ireland", "Hungary", "Norway",
  "Czech Republic", "Poland", "Portugal", "Estonia", "Luxembourg", "Iceland", "Slovenia"
];

/** Nations inside a larger country whose funders also apply: UK-wide programmes work in Scotland. */
export const parentCountry: Record<string, string> = { Scotland: "United Kingdom" };

/** Industry fellowships a PhD student can win from inside a PhD, through a nominating university. */
export const phdFellowshipProviders = ["Google PhD Fellowship", "NVIDIA Graduate Fellowship Program", "Apple Scholars in AI/ML PhD Fellowship"];

/** Universities that host an ELLIS unit. */
export const ellisHosts = [
  "University of Tübingen", "ETH Zurich", "EPFL", "University of Amsterdam", "University of Oxford",
  "University of Cambridge", "University of Edinburgh", "University of Helsinki", "TU Munich"
];

export const ELLIS_PROVIDER = "ELLIS (European Laboratory for Learning and Intelligent Systems)";
