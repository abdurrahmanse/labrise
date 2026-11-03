import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { CountryViewTabs } from "@/modules/directory/components/ecosystem/CountryViewTabs";
import { FunderList } from "@/modules/directory/components/ecosystem/FunderList";
import { ProfessorRoster } from "@/modules/directory/components/ecosystem/ProfessorRoster";
import { UniversityRoster } from "@/modules/directory/components/ecosystem/UniversityRoster";
import { Flag } from "@/modules/directory/components/Flag";
import { countries } from "@/modules/directory/data";
import { ecosystemOfCountry } from "@/modules/directory/lib/connections";
import { findCountry } from "@/modules/directory/lib/lookups";
import { countrySlug, universitySlug } from "@/modules/directory/lib/slugs";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { countryViewText, rosterText } from "@/data/text/directory";

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const VIEWS = ["universities", "professors", "funding"] as const;
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

  return (
    <PageShell
      eyebrow={countryViewText.eyebrow(country.country, country.region)}
      title={TITLES[view as View]}
      media={<Flag country={country.country} className="h-10 w-14" />}
      back={{ href: `/directory/countries/${slug}`, label: country.country }}
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
    <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 text-slate-400">Loading…</div>}>
      <CountryViewPageContent params={params} />
    </Suspense>
  );
}
