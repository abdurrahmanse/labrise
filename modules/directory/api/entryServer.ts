import "server-only";
import { countries, labs, professors, providers, universities } from "../data";
import { fundersOfUniversity, universitiesOfProvider } from "../utils/connections";
import { findCountry, findLab, findProfessor, findProvider, findScholarship, findUniversity, labsAtUniversity, labsInCountry, labsOfProfessor, professorsAtUniversity, providerOfScholarship, universitiesInCountry, universityOfProfessor } from "../utils/lookups";
import { countrySlug, labSlug, professorSlug, providerSlug, universitySlug } from "../utils/slugs";
import type { DirectoryType, EntryLink, EntryResult } from "../types";

const uni = (u: (typeof universities)[number]): EntryLink => ({ kind: "University", title: u.name, subtitle: u.country, href: `/directory/universities/${universitySlug(u)}` });
const prof = (p: (typeof professors)[number]): EntryLink => ({ kind: "Professor", title: p.name, subtitle: `${p.university}, ${p.country}`, href: `/directory/professors/${professorSlug(p)}` });
const funder = (p: (typeof providers)[number]): EntryLink => ({ kind: "Funder", title: p.name, subtitle: `${p.country} · ${p.kind}`, href: `/directory/providers/${providerSlug(p)}` });
const labLink = (l: (typeof labs)[number]): EntryLink => ({ kind: "Lab", title: l.name, subtitle: `${l.university ?? l.country} · ${l.kind}`, href: `/directory/labs/${labSlug(l)}` });
const country = (c: (typeof countries)[number]): EntryLink => ({ kind: "Country", title: c.country, subtitle: c.region, href: `/directory/countries/${countrySlug(c)}` });

const LIMIT = 8;

/** Finds one entry and the entries connected to it. Returns null for an unknown slug. */
export function getEntry(type: DirectoryType, slug: string): EntryResult | null {
  switch (type) {
    case "countries": {
      const entry = findCountry(slug);
      if (!entry) return null;
      return { type, slug, entry, related: [...universitiesInCountry(entry.country).slice(0, LIMIT).map(uni), ...labsInCountry(entry.country).slice(0, LIMIT).map(labLink)] };
    }
    case "universities": {
      const entry = findUniversity(slug);
      if (!entry) return null;
      const c = countries.find((x) => x.country === entry.country);
      const related = [...(c ? [country(c)] : []), ...labsAtUniversity(entry).slice(0, 4).map(labLink), ...professorsAtUniversity(entry).slice(0, 4).map(prof), ...fundersOfUniversity(entry).slice(0, 3).map(funder)];
      return { type, slug, entry, related };
    }
    case "professors": {
      const entry = findProfessor(slug);
      if (!entry) return null;
      const u = universityOfProfessor(entry);
      const peers = professors.filter((p) => p.group === entry.group && p.name !== entry.name).slice(0, 5).map(prof);
      return { type, slug, entry, related: [...(u ? [uni(u)] : []), ...labsOfProfessor(entry).map(labLink), ...peers] };
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
    case "labs": {
      const entry = findLab(slug);
      if (!entry) return null;
      const u = entry.university ? universities.find((x) => x.name === entry.university) : undefined;
      const c = countries.find((x) => x.country === entry.country);
      const people = professors.filter((p) => entry.professors.includes(p.name)).map(prof);
      const others = labs.filter((l) => l.university === entry.university && l.university && l.name !== entry.name).slice(0, 4).map(labLink);
      return { type, slug, entry, related: [...(u ? [uni(u)] : c ? [country(c)] : []), ...people, ...others] };
    }
  }
}
