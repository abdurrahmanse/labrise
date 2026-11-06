import { expansionProfessors } from "../data/professorsExpansion";
import { expansionProviders } from "../data/providersExpansion";
import { expansionScholarships } from "../data/scholarshipsExpansion";
import { expansionUniversities } from "../data/universitiesExpansion";
import { labs } from "../data/labs";
import type { DirectoryType } from "../types";

/**
 * Entries added from public sources and not yet checked against the official page.
 * The detail page says so instead of showing the review date. When an entry has been checked, remove it from its
 * source file's expansion list (or move it into the main list), and it is shown as reviewed again.
 */
const UNVERIFIED: Partial<Record<DirectoryType, Set<string>>> = {
  professors: new Set(expansionProfessors.map((p) => p.name)),
  universities: new Set(expansionUniversities.map((u) => u.name)),
  providers: new Set(expansionProviders.map((p) => p.name)),
  scholarships: new Set(expansionScholarships.map((s) => s.name)),
  labs: new Set(labs.map((l) => l.name))
};

export const isUnverified = (type: DirectoryType, name: string) => UNVERIFIED[type]?.has(name) ?? false;
