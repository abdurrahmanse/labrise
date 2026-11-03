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
import { professorsAtUniversity } from "../../lib/lookups";
import { countrySlug, professorSlug, universitySlug } from "../../lib/slugs";
import type { UniversityEntry } from "../../types";
import { universities } from "../../data/universities";
import { Avatar } from "@/shared/components/Avatar";
import { APPLY_STEPS } from "./applySteps";
import { CountryFacts } from "./CountryFacts";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function UniversityDetailView({ university }: { university: UniversityEntry }) {
  const country = countries.find((c) => c.country === university.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const profs = professorsAtUniversity(university);
  const others = universities.filter((u) => u.country === university.country && u.name !== university.name);

  return (
    <PageShell
      eyebrow={`University · ${university.country}`}
      title={university.name}
      media={<Avatar name={university.name.replace(/^(University of|The) /, "")} size={64} square />}
      lead={`${university.funding}. Typical application window: ${university.deadline}.`}
      back={{ href: "/directory/universities", label: "All universities" }}
    >
      <Facts
        rows={[
          ["Country", country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{university.country}</Link> : university.country],
          ["Region", university.region],
          ["Funding", university.funding],
          ["Typical deadline", university.deadline],
          [
            "Official site",
            <a key="s" href={university.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {university.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ],
          ...(country ? ([["Professor first?", country.supervisor], ["Application fee", country.fee]] as [string, React.ReactNode][]) : [])
        ]}
      />
      <p className="text-sm text-slate-400">Deadlines and funding change every cycle. Confirm on the official site.</p>

      {detail && (
        <>
          <Block title={`Studying in ${university.country}`}>
            <CountryFacts detail={detail} />
          </Block>
          <Block title="Funding programs to check">
            <BulletList items={detail.scholarships} />
          </Block>
          <Block title="Where to find open positions">
            <ExternalLinks items={[{ label: `${university.name} website`, href: university.site }, ...detail.find]} />
          </Block>
          <Block title="Tips">
            <BulletList items={detail.tips} />
          </Block>
        </>
      )}

      <Block title={`Professors listed (${profs.length})`}>
        <Chips items={profs.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.group }))} />
      </Block>
      {others.length > 0 && (
        <Block title={`More in ${university.country}`}>
          <Chips items={others.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name }))} />
        </Block>
      )}
      <Block title="How to apply">
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </PageShell>
  );
}
