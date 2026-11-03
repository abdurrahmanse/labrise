import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { countryDetails } from "../../data/countryDetails";
import { countries } from "../../data/countries";
import { fundersOfUniversity } from "../../utils/connections";
import { professorsAtUniversity } from "../../utils/lookups";
import { countrySlug, universitySlug } from "../../utils/slugs";
import type { UniversityEntry } from "../../types";
import { universities } from "../../data/universities";
import { Avatar } from "@/shared/components/Avatar";
import { APPLY_STEPS } from "./applySteps";
import { FunderList } from "../ecosystem/FunderList";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { CountryFacts } from "./CountryFacts";
import { detailText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function UniversityDetailView({ university }: { university: UniversityEntry }) {
  const country = countries.find((c) => c.country === university.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const profs = professorsAtUniversity(university);
  const funders = fundersOfUniversity(university);
  const others = universities.filter((u) => u.country === university.country && u.name !== university.name);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.university(university.country)}
      title={university.name}
      notice={{ subject: university.name, source: university.site }}
      actions={<EntryActions type="universities" slug={universitySlug(university)} />}
      media={<Avatar name={university.name.replace(/^(University of|The) /, "")} size={64} square />}
      lead={detailText.lead.university(university.funding, university.deadline)}
      back={{ href: "/directory/universities", label: detailText.back.universities }}
    >
      <Facts
        rows={[
          [detailText.facts.country, country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{university.country}</Link> : university.country],
          [detailText.facts.region, university.region],
          [detailText.facts.funding, university.funding],
          [detailText.facts.typicalDeadline, university.deadline],
          [
            detailText.facts.officialSite,
            <a key="s" href={university.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {university.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ],
          ...(country ? ([[detailText.facts.professorFirstShort, country.supervisor], [detailText.facts.applicationFee, country.fee]] as [string, React.ReactNode][]) : [])
        ]}
      />
      <p className="text-sm text-slate-400">{detailText.hints.deadlines}</p>

      {detail && (
        <>
          <Block title={detailText.blocks.studyingIn(university.country)}>
            <CountryFacts detail={detail} />
          </Block>
          <Block title={detailText.blocks.fundingToCheck}>
            <BulletList items={detail.scholarships} />
          </Block>
          <Block title={detailText.blocks.openPositions}>
            <ExternalLinks items={[{ label: detailText.hints.website(university.name), href: university.site }, ...detail.find]} />
          </Block>
          <Block title={detailText.blocks.tipsShort}>
            <BulletList items={detail.tips} />
          </Block>
        </>
      )}

      <Block title={detailText.blocks.professors(profs.length)}>
        <ProfessorRoster professors={profs} />
      </Block>
      <Block title={detailText.blocks.fundersHere}>
        <FunderList funders={funders} />
        <p className="text-sm text-slate-400">{detailText.hints.openOrg}</p>
      </Block>
      {others.length > 0 && (
        <Block title={detailText.blocks.moreIn(university.country)}>
          <Chips items={others.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name }))} />
        </Block>
      )}
      <Block title={detailText.blocks.howToApply}>
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </PageShell>
  );
}
