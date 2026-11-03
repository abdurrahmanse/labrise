import { countries, professors, providers, scholarships, universities } from "@/modules/directory/catalog";
import { countrySlug, professorSlug, providerSlug, scholarshipSlug, universitySlug } from "@/modules/directory/contracts";
import type { SearchKind } from "../types";

export type { SearchKind };

export interface SearchItem {
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
  /** Lower-case text the query is matched against. */
  haystack: string;
}

const item = (kind: SearchKind, title: string, subtitle: string, href: string, extra = ""): SearchItem => ({
  kind,
  title,
  subtitle,
  href,
  haystack: `${title} ${subtitle} ${extra}`.toLowerCase()
});

/** Every directory entry as one flat list. Built once, on the first search. */
export function buildSearchIndex(): SearchItem[] {
  return [
    ...countries.map((c) => item("Country", c.country, `${c.region} · ${c.routes}`, `/directory/countries/${countrySlug(c)}`)),
    ...universities.map((u) => item("University", u.name, u.country, `/directory/universities/${universitySlug(u)}`)),
    ...providers.map((p) => item("Funder", p.name, `${p.country} · ${p.kind}`, `/directory/providers/${providerSlug(p)}`, p.programs.join(" "))),
    ...scholarships.map((s) => item("Scholarship", s.name, `${s.host} · ${s.level}`, `/directory/scholarships/${scholarshipSlug(s)}`)),
    ...professors.map((p) => item("Professor", p.name, `${p.university}, ${p.country}`, `/directory/professors/${professorSlug(p)}`, p.group))
  ];
}
