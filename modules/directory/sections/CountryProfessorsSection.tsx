import type { CountryEntry } from "../types";
import { ecosystemOfCountry } from "../connections";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { UniversityGroupBlock } from "./UniversityGroupBlock";

export function CountryProfessorsSection({ country }: { country: CountryEntry }) {
  const { summaries, professors } = ecosystemOfCountry(country);
  const withPeople = summaries.filter((s) => s.professors.length > 0);
  if (withPeople.length === 0) return <ProfessorRoster professors={professors} />;

  return (
    <>
      {withPeople.map(({ university, professors: list }) => (
        <UniversityGroupBlock key={university.name} university={university}>
          <ProfessorRoster professors={list} />
        </UniversityGroupBlock>
      ))}
    </>
  );
}
