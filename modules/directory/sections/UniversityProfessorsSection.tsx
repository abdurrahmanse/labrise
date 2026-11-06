import { Block } from "@/shared/components/Block";
import { detailText } from "@/content/text/directory";
import type { UniversityEntry } from "../types";
import { professorsAtUniversity } from "../lookups";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";

export function UniversityProfessorsSection({ university }: { university: UniversityEntry }) {
  const professors = professorsAtUniversity(university);
  return (
    <Block title={detailText.blocks.professors(professors.length)}>
      <ProfessorRoster professors={professors} />
    </Block>
  );
}
