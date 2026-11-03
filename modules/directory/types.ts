import type { Scholarship } from "@/modules/scholarships/contracts";
import type { Region } from "@/shared/types/region";
import type { DIRECTORY_TYPES, ENTRY_KINDS } from "./constants";

export interface UniversityEntry {
  name: string;
  country: string;
  region: Region;
  funding: string;
  deadline: string;
  site: string;
}

export interface ProfessorEntry {
  name: string;
  university: string;
  country: string;
  group: string;
  /** Add only addresses copied from the professor's official university page. */
  email?: string;
  /** Extra guidance for contacting this person. */
  note?: string;
}

export interface CountryEntry {
  country: string;
  region: Region;
  routes: string;
  funding: string;
  supervisor: "Required first" | "Recommended" | "Not needed";
  fee: string;
}

/** A scholarship in the directory. The entity belongs to the scholarships module; the directory lists it. */
export type ScholarshipEntry = Scholarship;

export interface ProviderEntry {
  name: string;
  /** Who the organisation mainly supports. */
  supports: string;
  country: string;
  region: Region;
  kind: string;
  programs: string[];
  route: string;
  requirements: string[];
  documents: string[];
  selection: string;
  site: string;
}

export type DirectoryType = (typeof DIRECTORY_TYPES)[number];

/** The entity each directory type lists. */
export interface EntryOf {
  countries: CountryEntry;
  universities: UniversityEntry;
  professors: ProfessorEntry;
  scholarships: ScholarshipEntry;
  providers: ProviderEntry;
}

/** The full list of entries for each directory type. */
export type DirectoryEntries = { [T in DirectoryType]: EntryOf[T][] };

/** A link to another directory entry, shown as "related" under an entry and in the saved list. */
export interface EntryLink {
  kind: (typeof ENTRY_KINDS)[number];
  title: string;
  subtitle: string;
  href: string;
}

/** One entry plus the entries it links to, tagged by type so the caller knows which entity it got. */
export type EntryResult = { [T in DirectoryType]: { type: T; slug: string; entry: EntryOf[T]; related: EntryLink[] } }[DirectoryType];
