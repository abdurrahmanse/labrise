"use client";

import type { CountryEntry } from "../../types";
import { countrySlug } from "../../utils/slugs";
import { CountryCard } from "../cards/CountryCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";
import { listText } from "@/content/text/directory";

export function CountriesList({ initialData }: { initialData: CountryEntry[] }) {
  return (
    <LiveDirectory type="countries" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder={listText.countries}
          keyOf={countrySlug}
          regionOf={(c) => c.region}
          searchText={(c) => `${c.country} ${c.routes} ${c.funding}`}
          renderCard={(c) => <CountryCard country={c} />}
        />
      )}
    </LiveDirectory>
  );
}
