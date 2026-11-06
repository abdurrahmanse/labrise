import type { ComponentType } from "react";
import { directoryData } from "../data";
import type { DirectoryType, EntryOf } from "../types";
import { ProfessorsExplorer } from "../professors/ProfessorsExplorer";
import { CountriesList } from "./CountriesList";
import { LabsList } from "./LabsList";
import { ProvidersList } from "./ProvidersList";
import { ScholarshipsList } from "./ScholarshipsList";
import { UniversitiesList } from "./UniversitiesList";

/** The list component for each directory type. Adding a type means adding one line here. */
const LISTS: { [T in DirectoryType]: ComponentType<{ initialData: EntryOf[T][] }> } = {
  countries: CountriesList,
  universities: UniversitiesList,
  professors: ProfessorsExplorer,
  scholarships: ScholarshipsList,
  providers: ProvidersList,
  labs: LabsList
};

export function DirectoryTypeList<T extends DirectoryType>({ type }: { type: T }) {
  const List = LISTS[type] as ComponentType<{ initialData: EntryOf[T][] }>;
  return <List initialData={directoryData[type]} />;
}
