"use client";

import type { LabEntry } from "../../types";
import { labSlug } from "../../utils/slugs";
import { LabCard } from "../cards/LabCard";
import { LiveCardBrowser } from "./LiveCardBrowser";
import { listText } from "@/content/text/directory";

export function LabsList({ initialData }: { initialData: LabEntry[] }) {
  return (
    <LiveCardBrowser
      type="labs"
      initialData={initialData}
      placeholder={listText.labs}
      keyOf={labSlug}
      regionOf={(x) => x.region}
      searchText={(x) => `${x.name} ${x.kind} ${x.country} ${x.university ?? ""} ${x.focus} ${x.offers}`}
      renderCard={(x) => <LabCard lab={x} />}
    />
  );
}
