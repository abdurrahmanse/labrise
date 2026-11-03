import type { DirectoryType } from "../../types";
import { CountryEntry } from "./CountryEntry";
import { ProfessorEntry } from "./ProfessorEntry";
import { ProviderEntry } from "./ProviderEntry";
import { ScholarshipEntry } from "./ScholarshipEntry";
import { UniversityEntry } from "./UniversityEntry";

interface DirectoryEntryProps {
  type: DirectoryType;
  slug: string;
}

/** Picks the page for one directory entry by its type. */
export function DirectoryEntry({ type, slug }: DirectoryEntryProps) {
  switch (type) {
    case "countries":
      return <CountryEntry slug={slug} />;
    case "universities":
      return <UniversityEntry slug={slug} />;
    case "providers":
      return <ProviderEntry slug={slug} />;
    case "scholarships":
      return <ScholarshipEntry slug={slug} />;
    case "professors":
      return <ProfessorEntry slug={slug} />;
  }
}
