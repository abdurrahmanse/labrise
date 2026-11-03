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
}

export interface CountryEntry {
  country: string;
  region: Region;
  routes: string;
  funding: string;
  supervisor: "Required first" | "Recommended" | "Not needed";
  fee: string;
}


export type DirectoryType = "countries" | "universities" | "professors";
