import type { ComponentType } from "react";
import { Flag } from "@/shared/components/Flag";
import { detailText, sectionText } from "@/content/text/directory";
import type { LabEntry } from "../../types";
import { labSlug } from "../../utils/slugs";
import { labTrail, withStep } from "../../utils/trails";
import { tabNeighbours } from "../../utils/tabs";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { EntrySectionShell } from "../sections/EntrySectionShell";
import { LabContextSection } from "../sections/lab/LabContextSection";
import { LabFundingSection } from "../sections/lab/LabFundingSection";
import { LabJoinSection } from "../sections/lab/LabJoinSection";
import { LabPeopleSection } from "../sections/lab/LabPeopleSection";

const SECTIONS = { people: LabPeopleSection, funding: LabFundingSection, join: LabJoinSection, context: LabContextSection } satisfies Record<string, ComponentType<{ lab: LabEntry }>>;

export type LabView = keyof typeof SECTIONS;
export const LAB_VIEWS = Object.keys(SECTIONS) as LabView[];

/** One small page of a lab. The frame is shared; each view is its own section component. */
export function LabSectionView({ lab, view }: { lab: LabEntry; view: LabView }) {
  const base = `/directory/labs/${labSlug(lab)}`;
  const s = sectionText.lab;
  const Section = SECTIONS[view];

  return (
    <EntrySectionShell
      eyebrow={detailText.eyebrow.lab(lab.kind, lab.country)}
      title={`${s.titles[view]}: ${lab.name}`}
      lead={s.hints[view]}
      media={<Flag country={lab.country} className="h-10 w-14" />}
      trail={withStep(labTrail(lab), s.titles[view], `${base}/${view}`)}
      notice={{ subject: lab.name, source: lab.site }}
      detail={{ href: base, kind: "Lab", name: lab.name }}
      tabs={<EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />}
      {...tabNeighbours(base, [...s.tabs], view)}
    >
      <Section lab={lab} />
    </EntrySectionShell>
  );
}
