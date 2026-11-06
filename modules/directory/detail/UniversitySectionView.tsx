import { isUnverified } from "../utils/review";
import type { ComponentType } from "react";
import { Avatar } from "@/shared/components/Avatar";
import { detailText, sectionText } from "@/content/text/directory";
import type { UniversityEntry } from "../types";
import { universitySlug } from "../utils/slugs";
import { universityTrail, withStep } from "../utils/trails";
import { tabNeighbours } from "../utils/tabs";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { EntrySectionShell } from "../sections/EntrySectionShell";
import { UniversityFundingSection } from "../sections/UniversityFundingSection";
import { UniversityLabsSection } from "../sections/UniversityLabsSection";
import { UniversityProfessorsSection } from "../sections/UniversityProfessorsSection";
import { UniversityStudySection } from "../sections/UniversityStudySection";

const SECTIONS = {
  labs: UniversityLabsSection,
  professors: UniversityProfessorsSection,
  funding: UniversityFundingSection,
  study: UniversityStudySection
} satisfies Record<string, ComponentType<{ university: UniversityEntry }>>;

export type UniversityView = keyof typeof SECTIONS;
export const UNIVERSITY_VIEWS = Object.keys(SECTIONS) as UniversityView[];

/** One small page of a university. The frame is shared; each view is its own section component. */
export function UniversitySectionView({ university, view }: { university: UniversityEntry; view: UniversityView }) {
  const base = `/directory/universities/${universitySlug(university)}`;
  const s = sectionText.university;
  const Section = SECTIONS[view];

  return (
    <EntrySectionShell
      eyebrow={detailText.eyebrow.university(university.country)}
      title={`${s.titles[view]}: ${university.name}`}
      lead={s.hints[view]}
      media={<Avatar name={university.name.replace(/^(University of|The) /, "")} size={64} square />}
      trail={withStep(universityTrail(university), s.titles[view], `${base}/${view}`)}
      notice={{ subject: university.name, source: university.site, unverified: isUnverified("universities", university.name) }}
      detail={{ href: base, kind: "University", name: university.name }}
      tabs={<EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />}
      {...tabNeighbours(base, [...s.tabs], view)}
    >
      <Section university={university} />
    </EntrySectionShell>
  );
}
