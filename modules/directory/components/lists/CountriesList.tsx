"use client";

import type { CountryEntry } from "../../types";
import { countrySlug } from "../../utils/slugs";
import { CountryCard } from "../cards/CountryCard";
import { LiveCardBrowser } from "./LiveCardBrowser";
import { listText } from "@/content/text/directory";

export function CountriesList({ initialData }: { initialData: CountryEntry[] }) {
  return (
    <LiveCardBrowser
      type="countries"
      initialData={initialData}
      placeholder={listText.countries}
      keyOf={countrySlug}
      regionOf={(x) => x.region}
      searchText={(x) => `${x.country} ${x.routes} ${x.funding}`}
      renderCard={(x) => <CountryCard country={x} />}
    />
  );
}
