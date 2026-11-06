// How funders connect to places. Each link means "this organisation funds or runs programmes here".
// Check the provider page for the exact rules. Connections are listed only where they are well known.

import { expansionUniversityOnlyProviders, expansionWorldwideProviders } from "./providersExpansion";
import { moreUniversityOnlyProviders } from "./providersMore";

/** Providers tied to one university, or to a short list of them. They are not offered across the whole country. */
export const universityOnlyProviders: Record<string, string | string[]> = {
  ...moreUniversityOnlyProviders,
  ...expansionUniversityOnlyProviders,
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
  "Czech Republic", "Poland", "Portugal", "Estonia", "Luxembourg", "Iceland", "Slovenia",
  "Greece", "Romania", "Bulgaria", "Croatia", "Slovakia", "Lithuania", "Latvia", "Serbia", "Cyprus"
];

/** Nations inside a larger country whose funders also apply: UK-wide programmes work in Scotland. */
export const parentCountry: Record<string, string> = { Scotland: "United Kingdom" };

/**
 * Providers that fund study at many universities in many countries, so they belong to no single host country.
 * They are listed in the providers directory and linked from their own scholarship page, but not under a country or a university.
 * Industry fellowships go to students already in a PhD, through universities that the company invites or lets nominate.
 */
export const worldwideProviders = [
  "Google PhD Fellowship",
  "NVIDIA Graduate Fellowship Program",
  "Apple Scholars in AI/ML PhD Fellowship",
  "Aga Khan Foundation (International Scholarship Programme)",
  "Mastercard Foundation Scholars Program",
  "Islamic Development Bank (Scholarship Programme)",
  "Institute of International Education (IIE)",
  ...expansionWorldwideProviders
];

/** Universities that host an ELLIS unit. */
export const ellisHosts = [
  "University of Tübingen", "ETH Zurich", "EPFL", "University of Amsterdam", "University of Oxford",
  "University of Cambridge", "University of Edinburgh", "University of Helsinki", "TU Munich"
];

export const ELLIS_PROVIDER = "ELLIS (European Laboratory for Learning and Intelligent Systems)";
