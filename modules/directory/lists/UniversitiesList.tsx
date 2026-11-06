"use client";

import type { UniversityEntry } from "../types";
import { universitySlug } from "../utils/slugs";
import { UniversityCard } from "../cards/UniversityCard";
import { LiveCardBrowser } from "./LiveCardBrowser";
import { listText } from "@/content/text/directory";

export function UniversitiesList({ initialData }: { initialData: UniversityEntry[] }) {
  return (
    <LiveCardBrowser
      type="universities"
      initialData={initialData}
      placeholder={listText.universities}
      keyOf={universitySlug}
      regionOf={(x) => x.region}
      searchText={(x) => `${x.name} ${x.country} ${x.funding}`}
      renderCard={(x) => <UniversityCard university={x} />}
    />
  );
}
