import { Block } from "@/shared/components/Block";
import { StepList } from "@/shared/components/StepList";
import type { GuideSection } from "../data/details";

export function GuideSections({ sections }: { sections: GuideSection[] }) {
  return (
    <>
      {sections.map((section, i) => (
        <Block key={section.heading} title={`${i + 1}. ${section.heading}`}>
          <StepList items={section.items} />
        </Block>
      ))}
    </>
  );
}
