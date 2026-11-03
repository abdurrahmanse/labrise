import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { scholarships } from "../../data/scholarships";
import { countryByName, providerOfScholarship } from "../../lib/lookups";
import { countrySlug, providerSlug, scholarshipSlug } from "../../lib/slugs";
import type { ScholarshipEntry } from "../../types";

import { Flag } from "../Flag";
import { detailText } from "@/data/text/directory";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

const STEPS = [
  { label: detailText.scholarshipSteps.official },
  { label: detailText.scholarshipSteps.eligibility },
  { label: detailText.scholarshipSteps.documents, href: "/guides/sop" },
  { label: detailText.scholarshipSteps.referees, href: "/guides/reference-letter" },
  { label: detailText.scholarshipSteps.submit, href: "/guides/application-portals" }
];

export function ScholarshipDetailView({ scholarship }: { scholarship: ScholarshipEntry }) {
  const country = countryByName(scholarship.host);
  const provider = providerOfScholarship(scholarship.name);
  const similar = scholarships.filter((s) => s.host === scholarship.host && s.name !== scholarship.name);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.scholarship(scholarship.level)}
      title={scholarship.name}
      notice={{ subject: scholarship.name, source: scholarship.site }}
      media={<Flag country={scholarship.host} className="h-10 w-14" />}
      lead={detailText.lead.scholarship(scholarship.host, scholarship.covers)}
      back={{ href: "/directory/scholarships", label: detailText.back.scholarships }}
    >
      <Facts
        rows={[
          [detailText.facts.level, scholarship.level],
          [detailText.facts.host, country ? <Link key="h" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{scholarship.host}</Link> : scholarship.host],
          ...(provider ? ([[detailText.facts.awardedBy, <Link key="p" href={`/directory/providers/${providerSlug(provider)}`} className={linkClass}>{provider.name}</Link>]] as [string, React.ReactNode][]) : []),
          [detailText.facts.covers, scholarship.covers],
          [detailText.facts.typicalDeadline, scholarship.deadline],
          [detailText.facts.whoCanApply, scholarship.eligibility],
          [
            detailText.facts.officialPage,
            <a key="s" href={scholarship.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {scholarship.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ]
        ]}
      />
      <p className="text-sm text-slate-400">{detailText.hints.amounts}</p>

      <Block title={detailText.blocks.howToApply}>
        <StepGrid steps={STEPS} />
      </Block>
      <Block title={detailText.blocks.readNext}>
        <Chips
          items={[
            { href: "/guides/funding-types", label: detailText.readNext.fundingTypes },
            { href: "/guides/scholarship-scams", label: detailText.readNext.scams },
            { href: "/guides/deadlines-timeline", label: detailText.readNext.timeline }
          ]}
        />
      </Block>
      {similar.length > 0 && (
        <Block title={detailText.blocks.moreHostedIn(scholarship.host)}>
          <Chips items={similar.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name }))} />
        </Block>
      )}
    </PageShell>
  );
}
