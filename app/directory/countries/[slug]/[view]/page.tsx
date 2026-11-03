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

interface Props {
  params: Promise<{ slug: string; view: string }>;
}

const VIEWS = ["universities", "professors", "funding"] as const;
type View = (typeof VIEWS)[number];

const TITLES: Record<View, string> = {
  universities: "Universities",
  professors: "Professors",
  funding: "Funding organisations"
};

export function generateStaticParams() {
  return countries.flatMap((c) => VIEWS.map((view) => ({ slug: countrySlug(c), view })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !VIEWS.includes(view as View)) return { title: "Not found" };
  return buildMetadata({
    title: `${TITLES[view as View]} in ${country.country}`,
    description: `${TITLES[view as View]} connected to fully funded study in ${country.country}.`,
    path: `/directory/countries/${slug}/${view}`
  });
}

export default async function CountryViewPage({ params }: Props) {
  const { slug, view } = await params;
  const country = findCountry(slug);
  if (!country || !VIEWS.includes(view as View)) notFound();

  const { summaries, professors, funders } = ecosystemOfCountry(country);

  return (
    <PageShell
      eyebrow={`${country.country} · ${country.region}`}
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
                  University details and funding →
                </a>
              </Block>
            ))
        ) : (
          <ProfessorRoster professors={professors} />
        ))}

      {view === "funding" && (
        <Block title="Who funds study here">
          <FunderList funders={funders} empty="No national organisation is listed. Look at the university&apos;s own funding pages and the funding types guide." />
          <p className="text-sm text-slate-400">Many PhD posts in this country are paid directly by the university or a professor&apos;s grant. See the country overview for the usual routes.</p>
        </Block>
      )}
    </PageShell>
  );
}
