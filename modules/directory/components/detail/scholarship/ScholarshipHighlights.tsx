import Link from "next/link";
import { CalendarClock, Globe2, Landmark, Layers } from "lucide-react";
import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { HighlightTiles } from "@/shared/components/StatTiles";
import { countryByName } from "../../../lib/lookups";
import { countrySlug, providerSlug } from "../../../lib/slugs";
import type { ProviderEntry, ScholarshipEntry } from "../../../types";

interface ScholarshipHighlightsProps {
  scholarship: ScholarshipEntry;
  provider?: ProviderEntry;
}

/** Level, deadline, host country and provider at a glance. */
export function ScholarshipHighlights({ scholarship, provider }: ScholarshipHighlightsProps) {
  const country = countryByName(scholarship.host);
  return (
    <HighlightTiles
      items={[
        { Icon: Layers, label: t.highlights.level, children: scholarship.level },
        { Icon: CalendarClock, label: t.highlights.deadline, children: scholarship.deadline },
        { Icon: Globe2, label: t.highlights.host, children: country ? <Link href={`/directory/countries/${countrySlug(country)}`} className="hover:text-indigo-300">{scholarship.host}</Link> : scholarship.host },
        { Icon: Landmark, label: t.highlights.provider, children: provider ? <Link href={`/directory/providers/${providerSlug(provider)}`} className="hover:text-indigo-300">{provider.name}</Link> : "—" }
      ]}
    />
  );
}
