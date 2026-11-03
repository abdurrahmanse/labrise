import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { countries, ecosystemOfCountry, findCountry } from "@/modules/directory/catalog";
import { countrySlug, universitySlug } from "@/modules/directory/contracts";
import { CountryViewTabs, FunderList, ProfessorRoster, UniversityRoster } from "@/modules/directory";
import { Flag } from "@/shared/components/Flag";
import { buildMetadata } from "@/modules/seo";
import { countryViewText, rosterText } from "@/data/text/directory";
import { PageFallback } from "@/shared/components/PageFallback";

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
    <Suspense fallback={<PageFallback />}>
      <CountryViewPageContent params={params} />
    </Suspense>
  );
}
