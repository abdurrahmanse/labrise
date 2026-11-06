import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { labText } from "@/content/text/directory";
import { fieldByKey, fieldKeyOf } from "../data/fields";
import { professors } from "../data/professors";
import { universities } from "../data/universities";
import type { LabEntry } from "../types";
import { professorsAtUniversity } from "../lookups";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";

export function LabPeopleSection({ lab }: { lab: LabEntry }) {
  const people = professors.filter((p) => lab.professors.includes(p.name));
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const colleagues = university ? professorsAtUniversity(university).filter((p) => !lab.professors.includes(p.name)).slice(0, 6) : [];
  const fieldKeys = [...new Set(people.map((p) => fieldKeyOf(p.group)))];

  return (
    <>
      <Block title={labText.blocks.people}>
        {people.length > 0 ? <ProfessorRoster professors={people} /> : <p className="text-slate-400">{labText.noPeople}</p>}
      </Block>
      {fieldKeys.length > 0 && (
        <Block title={labText.blocks.fields}>
          <Chips items={fieldKeys.map((k) => ({ href: `/directory/fields/${k}`, label: fieldByKey(k)?.title ?? k }))} />
        </Block>
      )}
      {university && colleagues.length > 0 && (
        <Block title={labText.blocks.colleagues(university.name)}>
          <ProfessorRoster professors={colleagues} />
        </Block>
      )}
    </>
  );
}
