"use client";

import type { CountryEntry, ProviderEntry, ScholarshipEntry, UniversityEntry } from "../../types";
import { countrySlug, providerSlug, scholarshipSlug, universitySlug } from "../../lib/slugs";
import { CountryCard } from "../cards/CountryCard";
import { ProviderCard } from "../cards/ProviderCard";
import { ScholarshipCard } from "../cards/ScholarshipCard";
import { UniversityCard } from "../cards/UniversityCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";

export function CountriesList({ initialData }: { initialData: CountryEntry[] }) {
  return (
    <LiveDirectory type="countries" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder="Search country, route, funding…"
          keyOf={countrySlug}
          regionOf={(c) => c.region}
          searchText={(c) => `${c.country} ${c.routes} ${c.funding}`}
          renderCard={(c) => <CountryCard country={c} />}
        />
      )}
    </LiveDirectory>
  );
}

export function UniversitiesList({ initialData }: { initialData: UniversityEntry[] }) {
  return (
    <LiveDirectory type="universities" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder="Search university, country, funding…"
          keyOf={universitySlug}
          regionOf={(u) => u.region}
          searchText={(u) => `${u.name} ${u.country} ${u.funding}`}
          renderCard={(u) => <UniversityCard university={u} />}
        />
      )}
    </LiveDirectory>
  );
}

export function ScholarshipsList({ initialData }: { initialData: ScholarshipEntry[] }) {
  return (
    <LiveDirectory type="scholarships" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder="Search scholarship, host, level…"
          keyOf={scholarshipSlug}
          regionOf={(s) => s.region}
          searchText={(s) => `${s.name} ${s.host} ${s.level} ${s.covers}`}
          renderCard={(s) => <ScholarshipCard scholarship={s} />}
        />
      )}
    </LiveDirectory>
  );
}

export function ProvidersList({ initialData }: { initialData: ProviderEntry[] }) {
  return (
    <LiveDirectory type="providers" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder="Search organisation, programme, country, or try: need-based, government…"
          keyOf={providerSlug}
          regionOf={(p) => p.region}
          searchText={(p) => `${p.name} ${p.country} ${p.kind} ${p.supports} ${p.programs.join(" ")}`}
          renderCard={(p) => <ProviderCard provider={p} />}
        />
      )}
    </LiveDirectory>
  );
}
