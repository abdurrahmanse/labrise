"use client";

import type { ScholarshipEntry } from "../../types";
import { scholarshipSlug } from "../../utils/slugs";
import { ScholarshipCard } from "../cards/ScholarshipCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";
import { listText } from "@/content/text/directory";

export function ScholarshipsList({ initialData }: { initialData: ScholarshipEntry[] }) {
  return (
    <LiveDirectory type="scholarships" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder={listText.scholarships}
          keyOf={scholarshipSlug}
          regionOf={(s) => s.region}
          searchText={(s) => `${s.name} ${s.host} ${s.level} ${s.covers}`}
          renderCard={(s) => <ScholarshipCard scholarship={s} />}
        />
      )}
    </LiveDirectory>
  );
}
