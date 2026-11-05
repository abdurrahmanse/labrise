"use client";

import type { ProviderEntry } from "../../types";
import { providerSlug } from "../../utils/slugs";
import { ProviderCard } from "../cards/ProviderCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";
import { listText } from "@/content/text/directory";

export function ProvidersList({ initialData }: { initialData: ProviderEntry[] }) {
  return (
    <LiveDirectory type="providers" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder={listText.providers}
          keyOf={providerSlug}
          regionOf={(p) => p.region}
          searchText={(p) => `${p.name} ${p.country} ${p.kind} ${p.supports} ${p.programs.join(" ")}`}
          renderCard={(p) => <ProviderCard provider={p} />}
        />
      )}
    </LiveDirectory>
  );
}
