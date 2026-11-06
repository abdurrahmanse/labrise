import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { labText } from "@/content/text/directory";
import { universities } from "../data/universities";
import type { LabEntry } from "../types";
import { fundersOfCountry, fundersOfUniversity } from "../connections";
import { scholarshipsInCountry } from "../lookups";
import { scholarshipSlug } from "../utils/slugs";
import { FunderList } from "../ecosystem/FunderList";

export function LabFundingSection({ lab }: { lab: LabEntry }) {
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const funders = university ? fundersOfUniversity(university) : fundersOfCountry(lab.country);
  const hosted = scholarshipsInCountry(lab.country).slice(0, 10);

  return (
    <>
      <Block title={labText.blocks.funding}>
        <FunderList funders={funders.slice(0, 8)} />
        <p className="text-sm text-slate-400">{labText.blocks.fundingHint}</p>
      </Block>
      {hosted.length > 0 && (
        <Block title={labText.blocks.scholarships}>
          <Chips items={hosted.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}
      {university && (
        <Block title={labText.blocks.university}>
          <Facts rows={[[labText.facts.funding, university.funding], [labText.facts.deadline, university.deadline]]} />
        </Block>
      )}
    </>
  );
}
