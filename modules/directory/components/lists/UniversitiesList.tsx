"use client";

import type { UniversityEntry } from "../../types";
import { universitySlug } from "../../utils/slugs";
import { UniversityCard } from "../cards/UniversityCard";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";
import { listText } from "@/content/text/directory";

export function UniversitiesList({ initialData }: { initialData: UniversityEntry[] }) {
  return (
    <LiveDirectory type="universities" initialData={initialData}>
      {(data) => (
        <CardBrowser
          data={data}
          placeholder={listText.universities}
          keyOf={universitySlug}
          regionOf={(u) => u.region}
          searchText={(u) => `${u.name} ${u.country} ${u.funding}`}
          renderCard={(u) => <UniversityCard university={u} />}
        />
      )}
    </LiveDirectory>
  );
}
