"use client";

import type { ProviderEntry } from "../types";
import { providerSlug } from "../utils/slugs";
import { ProviderCard } from "../cards/ProviderCard";
import { LiveCardBrowser } from "./LiveCardBrowser";
import { listText } from "@/content/text/directory";

export function ProvidersList({ initialData }: { initialData: ProviderEntry[] }) {
  return (
    <LiveCardBrowser
      type="providers"
      initialData={initialData}
      placeholder={listText.providers}
      keyOf={providerSlug}
      regionOf={(x) => x.region}
      searchText={(x) => `${x.name} ${x.country} ${x.kind} ${x.supports} ${x.programs.join(" ")}`}
      renderCard={(x) => <ProviderCard provider={x} />}
    />
  );
}
