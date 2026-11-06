import { Block } from "@/shared/components/Block";
import { detailText } from "@/content/text/directory";
import type { UniversityEntry } from "../types";
import { labsAtUniversity } from "../lookups";
import { LabRoster } from "../ecosystem/LabRoster";

export function UniversityLabsSection({ university }: { university: UniversityEntry }) {
  const labs = labsAtUniversity(university);
  return (
    <Block title={detailText.blocks.labsHere(labs.length)}>
      <LabRoster labs={labs} showUniversity={false} />
    </Block>
  );
}
