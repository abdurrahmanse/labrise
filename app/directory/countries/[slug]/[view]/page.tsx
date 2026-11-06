import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { countries, ecosystemOfCountry, findCountry, universities } from "@/modules/directory/catalog";
import { labsInCountry } from "@/modules/directory/catalog";
import { countrySlug, universitySlug } from "@/modules/directory/contracts";
import { CountryViewTabs } from "@/modules/directory/components/ecosystem/CountryViewTabs";
import { FunderList } from "@/modules/directory/components/ecosystem/FunderList";
import { LabRoster } from "@/modules/directory/components/ecosystem/LabRoster";
import { ProfessorRoster } from "@/modules/directory/components/ecosystem/ProfessorRoster";
import { UniversityRoster } from "@/modules/directory/components/ecosystem/UniversityRoster";
import { Flag } from "@/shared/components/Flag";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { StepGrid } from "@/shared/components/StepGrid";
import { countryDetails } from "@/modules/directory/data/countryDetails";
import { CountryFacts } from "@/modules/directory/components/detail/CountryFacts";
import { APPLY_STEPS } from "@/modules/directory/components/detail/applySteps";
import { countryTrail, withStep } from "@/modules/directory/utils/trails";
import { scholarshipsInCountry } from "@/modules/directory/utils/lookups";
import { scholarshipSlug } from "@/modules/directory/contracts";
import { buildMetadata } from "@/modules/seo";
import { countryViewText, detailText, labText, rosterText } from "@/content/text/directory";
import { PageFallback } from "@/shared/components/PageFallback";

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const VIEWS = ["universities", "professors", "labs", "scholarships", "study", "funding"] as const;
type View = (typeof VIEWS)[number];

const TITLES: Record<View, string> = countryViewText.titles;

export function generateStaticParams() {
  return countries.flatMap((c) => VIEWS.map((view) => ({ slug: countrySlug(c), view })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !VIEWS.includes(view as View)) return { title: countryViewText.notFound };
  return buildMetadata({
    title: countryViewText.metaTitle(TITLES[view as View], country.country),
    description: countryViewText.metaDescription(TITLES[view as View], country.country),
    path: `/directory/countries/${slug}/${view}`
  });
}

async function CountryViewPageContent({ params }: Props) {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !VIEWS.includes(view as View)) notFound();

  const { summaries, professors, funders } = ecosystemOfCountry(country);
  const labs = view === "labs" ? labsInCountry(country.country) : [];

  return (
    <PageShell
      eyebrow={countryViewText.eyebrow(country.country, country.region)}
      title={TITLES[view as View]}
      media={<Flag country={country.country} className="h-10 w-14" />}
      trail={withStep(countryTrail(country), TITLES[view as View], `/directory/countries/${slug}/${view}`)}
    >
      <CountryViewTabs slug={slug} />

      {view === "universities" && <UniversityRoster summaries={summaries} />}

      {view === "professors" &&
        (summaries.some((s) => s.professors.length > 0) ? (
          summaries
            .filter((s) => s.professors.length > 0)
            .map(({ university, professors: list }) => (
              <Block key={university.name} title={university.name}>
                <ProfessorRoster professors={list} />
                <a href={`/directory/universities/${universitySlug(university)}`} className="text-sm font-bold text-indigo-400 hover:text-indigo-200">
                  {rosterText.universityDetails}
                </a>
              </Block>
            ))
        ) : (
          <ProfessorRoster professors={professors} />
        ))}

      {view === "labs" && (
        <>
          <p className="text-slate-300">{labText.countryIntro(country.country, labs.length)}</p>
          {universities
            .filter((u) => labs.some((l) => l.university === u.name))
            .map((u) => (
              <Block key={u.name} title={u.name}>
                <LabRoster labs={labs.filter((l) => l.university === u.name)} showUniversity={false} />
                <a href={`/directory/universities/${universitySlug(u)}`} className="text-sm font-bold text-indigo-400 hover:text-indigo-200">
                  {rosterText.universityDetails}
                </a>
              </Block>
            ))}
          {labs.some((l) => !l.university) && (
            <Block title={labText.nationalGroup}>
              <LabRoster labs={labs.filter((l) => !l.university)} />
            </Block>
          )}
          {labs.length === 0 && <p className="text-slate-400">{labText.none}</p>}
        </>
      )}

      {view === "scholarships" && (
        <>
          <Block title={detailText.blocks.scholarshipsPrograms}>
            {scholarshipsInCountry(country.country).length > 0 ? (
              <Chips items={scholarshipsInCountry(country.country).map((x) => ({ href: `/directory/scholarships/${scholarshipSlug(x)}`, label: x.name, meta: x.level }))} />
            ) : (
              <p className="text-slate-400">{countryViewText.noScholarships}</p>
            )}
            {countryDetails[slug] && <BulletList items={countryDetails[slug].scholarships} />}
          </Block>
          <Block title={countryViewText.fundingBlock}>
            <FunderList funders={funders} empty={countryViewText.fundingEmpty} />
          </Block>
        </>
      )}

      {view === "study" && countryDetails[slug] && (
        <>
          <Block title={detailText.blocks.studyAndLife}>
            <CountryFacts detail={countryDetails[slug]} />
            <p className="text-sm text-slate-400">{detailText.hints.figures}</p>
          </Block>
          <Block title={detailText.blocks.findPositions}>
            <ExternalLinks items={countryDetails[slug].find} />
          </Block>
          <Block title={detailText.blocks.tips}>
            <BulletList items={countryDetails[slug].tips} />
          </Block>
          <Block title={detailText.blocks.howToApply}>
            <StepGrid steps={APPLY_STEPS} />
          </Block>
        </>
      )}

      {view === "funding" && (
        <Block title={countryViewText.fundingBlock}>
          <FunderList funders={funders} empty={countryViewText.fundingEmpty} />
          <p className="text-sm text-slate-400">{countryViewText.fundingHint}</p>
        </Block>
      )}
    </PageShell>
  );
}

export default function CountryViewPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <CountryViewPageContent params={params} />
    </Suspense>
  );
}
