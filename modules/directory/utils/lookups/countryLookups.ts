import { countries } from "../../data/countries";
import type { CountryEntry } from "../../types";
import { countrySlug } from "../slugs";

export const findCountry = (slug: string) => countries.find((c) => countrySlug(c) === slug);

export const countryByName = (name: string): CountryEntry | undefined =>
  countries.find((c) => c.country === name);
