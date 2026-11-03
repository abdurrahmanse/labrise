export type CountrySection = "overview" | "funding" | "apply";

export const COUNTRY_SECTIONS: { id: CountrySection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "funding", label: "Funding" },
  { id: "apply", label: "How to apply" }
];

export const countrySectionHref = (countryId: string, section: CountrySection) =>
  section === "overview" ? `/countries/${countryId}` : `/countries/${countryId}/${section}`;
