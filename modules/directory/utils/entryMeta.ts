import { findCountry, findLab, findProfessor, findProvider, findScholarship, findUniversity } from "./lookups";

export interface EntryMeta {
  title: string;
  description: string;
}

/** Page title and description for a directory entry, or null when the type or slug is unknown. */
export function entryMeta(type: string, slug: string): EntryMeta | null {
  switch (type) {
    case "countries": {
      const c = findCountry(slug);
      return c ? { title: `Fully funded study in ${c.country}`, description: `${c.routes}. ${c.funding}.` } : null;
    }
    case "universities": {
      const u = findUniversity(slug);
      return u ? { title: `${u.name}: funding and how to apply`, description: `${u.funding}. Typical deadline: ${u.deadline}.` } : null;
    }
    case "providers": {
      const p = findProvider(slug);
      return p ? { title: `${p.name}: requirements and how to apply`, description: `${p.programs.join(", ")}. ${p.route}` } : null;
    }
    case "scholarships": {
      const s = findScholarship(slug);
      return s ? { title: `${s.name}: eligibility, coverage and deadline`, description: `${s.level} in ${s.host}. Covers ${s.covers}.` } : null;
    }
    case "professors": {
      const p = findProfessor(slug);
      return p ? { title: `${p.name}, ${p.university}`, description: `${p.group} research group in ${p.country}. How to approach and what to read.` } : null;
    }
    case "labs": {
      const l = findLab(slug);
      return l ? { title: `${l.name}: ${l.kind.toLowerCase()} in ${l.country}`, description: `${l.focus}. ${l.offers}` } : null;
    }
    default:
      return null;
  }
}
