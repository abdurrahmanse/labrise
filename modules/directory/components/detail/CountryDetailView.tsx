import Link from "next/link";
import { BulletList } from "@/shared/components/BulletList";
import { Block } from "@/shared/components/Block";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { getCountryById } from "@/data/countryGuidesData";
import { countryDetails } from "../../data/countryDetails";
import { ecosystemOfCountry } from "../../lib/connections";
import { countrySlug } from "../../lib/slugs";
import type { CountryEntry } from "../../types";
import { Flag } from "../Flag";
import { APPLY_STEPS } from "./applySteps";
import { CountryViewTabs } from "../ecosystem/CountryViewTabs";
import { EcosystemTiles } from "../ecosystem/EcosystemTiles";
import { FunderList } from "../ecosystem/FunderList";
import { UniversityRoster } from "../ecosystem/UniversityRoster";
import { CountryFacts } from "./CountryFacts";

export function CountryDetailView({ country }: { country: CountryEntry }) {
  const slug = countrySlug(country);
  const detail = countryDetails[slug];
  const dossier = getCountryById(slug);
  const { summaries, professors, funders } = ecosystemOfCountry(country);

  return (
    <PageShell
      eyebrow={`Country · ${country.region}`}
      title={country.country}
      media={<Flag country={country.country} className="h-10 w-14" />}
      lead={detail?.overview}
      back={{ href: "/directory/countries", label: "All countries" }}
    >
      <CountryViewTabs slug={slug} />

      <EcosystemTiles slug={slug} universities={summaries.length} professors={professors.length} funders={funders.length} />

      <Facts
        rows={[
          ["Funded routes", country.routes],
          ["What you get", country.funding],
          ["Contact a professor first?", country.supervisor],
          ["Application fee", country.fee]
        ]}
      />

      {detail && (
        <>
          <Block title="Study and life">
            <CountryFacts detail={detail} />
            <p className="text-sm text-slate-400">Figures are typical ranges. Confirm on the official pages below.</p>
          </Block>
          <Block title="Scholarships and funding programs">
            <BulletList items={detail.scholarships} />
          </Block>
          <Block title="Where to find positions">
            <ExternalLinks items={detail.find} />
          </Block>
          <Block title="Tips for applicants">
            <BulletList items={detail.tips} />
          </Block>
        </>
      )}

      {dossier && (
        <p>
          <Link href={`/countries/${dossier.id}`} className="text-indigo-400 hover:text-indigo-200 underline underline-offset-4">
            Open the full {country.country} dossier →
          </Link>
        </p>
      )}

      <Block title="Universities">
        <UniversityRoster summaries={summaries.slice(0, 4)} />
      </Block>
      <Block title="Who funds study here">
        <FunderList funders={funders.slice(0, 4)} empty="No national organisation is listed. See the funding organisations tab for details." />
      </Block>
      <Block title="How to apply">
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </PageShell>
  );
}
