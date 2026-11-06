"use client";

import type { LabEntry } from "../../types";
import { labSlug } from "../../utils/slugs";
import { LabCard } from "../cards/LabCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";
import { listText } from "@/content/text/directory";

export function LabsList({ initialData }: { initialData: LabEntry[] }) {
  return (
    <LiveDirectory type="labs" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder={listText.labs}
          keyOf={labSlug}
          regionOf={(l) => l.region}
          searchText={(l) => `${l.name} ${l.kind} ${l.country} ${l.university ?? ""} ${l.focus} ${l.offers}`}
          renderCard={(l) => <LabCard lab={l} />}
        />
      )}
    </LiveDirectory>
  );
}
