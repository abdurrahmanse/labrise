import { Block } from "@/shared/components/Block";
import { labText } from "@/content/text/directory";
import { universities } from "../../../data/universities";
import type { CountryEntry } from "../../../types";
import { labsInCountry } from "../../../utils/lookups";
import { LabRoster } from "../../ecosystem/LabRoster";
import { UniversityGroupBlock } from "./UniversityGroupBlock";

export function CountryLabsSection({ country }: { country: CountryEntry }) {
  const labs = labsInCountry(country.country);
  if (labs.length === 0) return <p className="text-slate-400">{labText.none}</p>;
  const independent = labs.filter((l) => !l.university);

  return (
    <>
      <p className="text-slate-300">{labText.countryIntro(country.country, labs.length)}</p>
      {universities
        .filter((u) => labs.some((l) => l.university === u.name))
        .map((u) => (
          <UniversityGroupBlock key={u.name} university={u}>
            <LabRoster labs={labs.filter((l) => l.university === u.name)} showUniversity={false} />
          </UniversityGroupBlock>
        ))}
      {independent.length > 0 && (
        <Block title={labText.nationalGroup}>
          <LabRoster labs={independent} />
        </Block>
      )}
    </>
  );
}
