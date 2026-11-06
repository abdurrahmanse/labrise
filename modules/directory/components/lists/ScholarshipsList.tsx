"use client";

import type { ScholarshipEntry } from "../../types";
import { scholarshipSlug } from "../../utils/slugs";
import { ScholarshipCard } from "../cards/ScholarshipCard";
import { LiveCardBrowser } from "./LiveCardBrowser";
import { listText } from "@/content/text/directory";

export function ScholarshipsList({ initialData }: { initialData: ScholarshipEntry[] }) {
  return (
    <LiveCardBrowser
      type="scholarships"
      initialData={initialData}
      placeholder={listText.scholarships}
      keyOf={scholarshipSlug}
      regionOf={(x) => x.region}
      searchText={(x) => `${x.name} ${x.host} ${x.level} ${x.covers}`}
      renderCard={(x) => <ScholarshipCard scholarship={x} />}
    />
  );
}
