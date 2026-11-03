import "server-only";
import { countries, professors, providers, universities } from "../data";
import { fundersOfUniversity, universitiesOfProvider } from "../lib/connections";
import { findCountry, findProfessor, findProvider, findScholarship, findUniversity, professorsAtUniversity, providerOfScholarship, universitiesInCountry, universityOfProfessor } from "../lib/lookups";
import { countrySlug, professorSlug, providerSlug, universitySlug } from "../lib/slugs";
import type { DirectoryType } from "../types";
import type { EntryResponse, RelatedItem } from "./entry";

const uni = (u: (typeof universities)[number]): RelatedItem => ({ kind: "University", title: u.name, subtitle: u.country, href: `/directory/universities/${universitySlug(u)}` });
const prof = (p: (typeof professors)[number]): RelatedItem => ({ kind: "Professor", title: p.name, subtitle: `${p.university}, ${p.country}`, href: `/directory/professors/${professorSlug(p)}` });
const funder = (p: (typeof providers)[number]): RelatedItem => ({ kind: "Funder", title: p.name, subtitle: `${p.country} · ${p.kind}`, href: `/directory/providers/${providerSlug(p)}` });
const country = (c: (typeof countries)[number]): RelatedItem => ({ kind: "Country", title: c.country, subtitle: c.region, href: `/directory/countries/${countrySlug(c)}` });

const LIMIT = 8;

/** Finds one entry and the entries connected to it. Returns null for an unknown slug. */
export function getEntry(type: DirectoryType, slug: string): EntryResponse | null {
  switch (type) {
    case "countries": {
      const entry = findCountry(slug);
      if (!entry) return null;
      return { type, slug, entry, related: universitiesInCountry(entry.country).slice(0, LIMIT).map(uni) };
    }
    case "universities": {
      const entry = findUniversity(slug);
      if (!entry) return null;
      const c = countries.find((x) => x.country === entry.country);
      const related = [...(c ? [country(c)] : []), ...professorsAtUniversity(entry).slice(0, 4).map(prof), ...fundersOfUniversity(entry).slice(0, 3).map(funder)];
      return { type, slug, entry, related };
    }
    case "professors": {
      const entry = findProfessor(slug);
      if (!entry) return null;
      const u = universityOfProfessor(entry);
      const peers = professors.filter((p) => p.group === entry.group && p.name !== entry.name).slice(0, 5).map(prof);
      return { type, slug, entry, related: [...(u ? [uni(u)] : []), ...peers] };
    }
    case "scholarships": {
      const entry = findScholarship(slug);
      if (!entry) return null;
      const provider = providerOfScholarship(entry.name);
      return { type, slug, entry, related: provider ? [funder(provider)] : [] };
    }
    case "providers": {
      const entry = findProvider(slug);
      if (!entry) return null;
      return { type, slug, entry, related: universitiesOfProvider(entry).slice(0, LIMIT).map(uni) };
    }
  }
}
