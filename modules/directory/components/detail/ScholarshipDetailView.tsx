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

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

const STEPS = [
  { label: "Read the official page" },
  { label: "Check eligibility" },
  { label: "Prepare CV and SOP", href: "/guides/sop" },
  { label: "Arrange referees", href: "/guides/reference-letter" },
  { label: "Submit before the deadline", href: "/guides/application-portals" }
];

export function ScholarshipDetailView({ scholarship }: { scholarship: ScholarshipEntry }) {
  const country = countryByName(scholarship.host);
  const provider = providerOfScholarship(scholarship.name);
  const similar = scholarships.filter((s) => s.host === scholarship.host && s.name !== scholarship.name);

  return (
    <PageShell
      eyebrow={`Scholarship · ${scholarship.level}`}
      title={scholarship.name}
      notice={{ subject: scholarship.name, source: scholarship.site }}
      media={<Flag country={scholarship.host} className="h-10 w-14" />}
      lead={`Hosted in ${scholarship.host}. Covers: ${scholarship.covers}.`}
      back={{ href: "/directory/scholarships", label: "All scholarships" }}
    >
      <Facts
        rows={[
          ["Level", scholarship.level],
          ["Host", country ? <Link key="h" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{scholarship.host}</Link> : scholarship.host],
          ...(provider ? ([["Awarded by", <Link key="p" href={`/directory/providers/${providerSlug(provider)}`} className={linkClass}>{provider.name}</Link>]] as [string, React.ReactNode][]) : []),
          ["Covers", scholarship.covers],
          ["Typical deadline", scholarship.deadline],
          ["Who can apply", scholarship.eligibility],
          [
            "Official page",
            <a key="s" href={scholarship.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {scholarship.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ]
        ]}
      />
      <p className="text-sm text-slate-400">Amounts, eligibility and deadlines change every cycle. Confirm on the official page.</p>

      <Block title="How to apply">
        <StepGrid steps={STEPS} />
      </Block>
      <Block title="Read next">
        <Chips
          items={[
            { href: "/guides/funding-types", label: "Types of funding" },
            { href: "/guides/scholarship-scams", label: "Avoid scams" },
            { href: "/guides/deadlines-timeline", label: "12-month timeline" }
          ]}
        />
      </Block>
      {similar.length > 0 && (
        <Block title={`More hosted in ${scholarship.host}`}>
          <Chips items={similar.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name }))} />
        </Block>
      )}
    </PageShell>
  );
}
