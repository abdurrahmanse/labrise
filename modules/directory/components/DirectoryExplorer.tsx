"use client";

import { useMemo } from "react";
import { filterEntries } from "../lib/filter";
import { regionOfProfessor } from "../lib/lookups";
import { useDirectoryFilters } from "../store/useDirectoryFilters";
import type { CountryEntry, ProfessorEntry, UniversityEntry } from "../types";
import { countryColumns } from "./columns/countryColumns";
import { professorColumns } from "./columns/professorColumns";
import { universityColumns } from "./columns/universityColumns";
import { DataTable } from "./DataTable";
import { LiveDirectory } from "./LiveDirectory";
import { DirectorySearch } from "./DirectorySearch";
import { RegionTabs } from "./RegionTabs";
import { TrackerDownloadButton } from "./TrackerDownloadButton";

function Toolbar({ count, placeholder, extra }: { count: number; placeholder: string; extra?: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <DirectorySearch placeholder={placeholder} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <RegionTabs />
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span>{count} shown</span>
          {extra}
        </div>
      </div>
    </div>
  );
}

function CountriesView({ data }: { data: CountryEntry[] }) {
  const { region, query } = useDirectoryFilters();
  const rows = useMemo(
    () => filterEntries({ entries: data, region, query, regionOf: (c) => c.region, searchText: (c) => `${c.country} ${c.routes} ${c.funding}` }),
    [data, region, query]
  );

  return (
    <div className="space-y-5">
      <Toolbar count={rows.length} placeholder="Search country, route, funding…" />
      <DataTable data={rows} columns={countryColumns} />
    </div>
  );
}

function UniversitiesView({ data }: { data: UniversityEntry[] }) {
  const { region, query } = useDirectoryFilters();
  const rows = useMemo(
    () => filterEntries({ entries: data, region, query, regionOf: (u) => u.region, searchText: (u) => `${u.name} ${u.country} ${u.funding}` }),
    [data, region, query]
  );

  return (
    <div className="space-y-5">
      <Toolbar count={rows.length} placeholder="Search university, country, funding…" />
      <DataTable data={rows} columns={universityColumns} />
    </div>
  );
}

function ProfessorsView({ data }: { data: ProfessorEntry[] }) {
  const { region, query } = useDirectoryFilters();
  const rows = useMemo(
    () => filterEntries({ entries: data, region, query, regionOf: regionOfProfessor, searchText: (p) => `${p.name} ${p.university} ${p.country} ${p.group}` }),
    [data, region, query]
  );

  return (
    <div className="space-y-5">
      <Toolbar count={rows.length} placeholder="Search name, group, country…" extra={<TrackerDownloadButton professors={data} />} />
      <DataTable data={rows} columns={professorColumns} />
    </div>
  );
}

export const CountriesExplorer = ({ initialData }: { initialData: CountryEntry[] }) => (
  <LiveDirectory type="countries" initialData={initialData}>{(data) => <CountriesView data={data} />}</LiveDirectory>
);

export const UniversitiesExplorer = ({ initialData }: { initialData: UniversityEntry[] }) => (
  <LiveDirectory type="universities" initialData={initialData}>{(data) => <UniversitiesView data={data} />}</LiveDirectory>
);

export const ProfessorsExplorer = ({ initialData }: { initialData: ProfessorEntry[] }) => (
  <LiveDirectory type="professors" initialData={initialData}>{(data) => <ProfessorsView data={data} />}</LiveDirectory>
);
