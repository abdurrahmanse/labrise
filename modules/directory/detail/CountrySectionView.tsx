import type { ComponentType } from "react";
import { Flag } from "@/shared/components/Flag";
import { countryViewText } from "@/content/text/directory";
import type { CountryEntry } from "../types";
import { countrySlug } from "../utils/slugs";
import { countryTrail, withStep } from "../utils/trails";
import { CountryViewTabs, countryViewItems } from "../ecosystem/CountryViewTabs";
import { EntrySectionShell } from "../sections/EntrySectionShell";
import { CountryFundingSection } from "../sections/CountryFundingSection";
import { CountryLabsSection } from "../sections/CountryLabsSection";
import { CountryProfessorsSection } from "../sections/CountryProfessorsSection";
import { CountryScholarshipsSection } from "../sections/CountryScholarshipsSection";
import { CountryStudySection } from "../sections/CountryStudySection";
import { CountryUniversitiesSection } from "../sections/CountryUniversitiesSection";

const SECTIONS = {
  universities: CountryUniversitiesSection,
  professors: CountryProfessorsSection,
  labs: CountryLabsSection,
  scholarships: CountryScholarshipsSection,
  study: CountryStudySection,
  funding: CountryFundingSection
} satisfies Record<string, ComponentType<{ country: CountryEntry }>>;

export type CountryView = keyof typeof SECTIONS;
export const COUNTRY_VIEWS = Object.keys(SECTIONS) as CountryView[];
export const COUNTRY_VIEW_TITLES: Record<CountryView, string> = countryViewText.titles;

/** One small page of a country. The frame is shared; each view is its own section component. */
export function CountrySectionView({ country, view }: { country: CountryEntry; view: CountryView }) {
  const slug = countrySlug(country);
  const items = countryViewItems(slug);
  const at = items.findIndex((i) => i.href.endsWith(`/${view}`));
  const Section = SECTIONS[view];

  return (
    <EntrySectionShell
      eyebrow={countryViewText.eyebrow(country.country, country.region)}
      title={COUNTRY_VIEW_TITLES[view]}
      lead={country.routes}
      media={<Flag country={country.country} className="h-10 w-14" />}
      trail={withStep(countryTrail(country), COUNTRY_VIEW_TITLES[view], `/directory/countries/${slug}/${view}`)}
      notice={{ subject: country.country }}
      detail={{ href: `/directory/countries/${slug}`, kind: "Country", name: country.country }}
      tabs={<CountryViewTabs slug={slug} />}
      prev={items[at - 1]}
      next={items[at + 1]}
    >
      <Section country={country} />
    </EntrySectionShell>
  );
}
