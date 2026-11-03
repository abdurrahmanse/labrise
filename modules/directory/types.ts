export type Region = "Europe" | "North America" | "Asia" | "Oceania" | "Middle East";

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


export interface ScholarshipEntry {
  name: string;
  host: string;
  region: Region;
  level: "Master's" | "PhD" | "Master's & PhD" | "PhD & research";
  covers: string;
  eligibility: string;
  deadline: string;
  site: string;
}

export interface ProviderEntry {
  name: string;
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

export type DirectoryType = "countries" | "universities" | "professors" | "scholarships" | "providers";
