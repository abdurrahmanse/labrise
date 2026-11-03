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
import { detailText } from "@/data/text/directory";
import { EntryActions } from "@/modules/library/components/EntryActions";

export function CountryDetailView({ country }: { country: CountryEntry }) {
  const slug = countrySlug(country);
  const detail = countryDetails[slug];
  const dossier = getCountryById(slug);
  const { summaries, professors, funders } = ecosystemOfCountry(country);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.country(country.region)}
      title={country.country}
      notice={{ subject: country.country }}
      actions={<EntryActions type="countries" slug={slug} />}
      media={<Flag country={country.country} className="h-10 w-14" />}
      lead={detail?.overview}
      back={{ href: "/directory/countries", label: detailText.back.countries }}
    >
      <CountryViewTabs slug={slug} />

      <EcosystemTiles slug={slug} universities={summaries.length} professors={professors.length} funders={funders.length} />

      <Facts
        rows={[
          [detailText.facts.fundedRoutes, country.routes],
          [detailText.facts.whatYouGet, country.funding],
          [detailText.facts.professorFirst, country.supervisor],
          [detailText.facts.applicationFee, country.fee]
        ]}
      />

      {detail && (
        <>
          <Block title={detailText.blocks.studyAndLife}>
            <CountryFacts detail={detail} />
            <p className="text-sm text-slate-400">{detailText.hints.figures}</p>
          </Block>
          <Block title={detailText.blocks.scholarshipsPrograms}>
            <BulletList items={detail.scholarships} />
          </Block>
          <Block title={detailText.blocks.findPositions}>
            <ExternalLinks items={detail.find} />
          </Block>
          <Block title={detailText.blocks.tips}>
            <BulletList items={detail.tips} />
          </Block>
        </>
      )}

      {dossier && (
        <p>
          <Link href={`/countries/${dossier.id}`} className="text-indigo-400 hover:text-indigo-200 underline underline-offset-4">
            {detailText.hints.dossier(country.country)}
          </Link>
        </p>
      )}

      <Block title={detailText.blocks.universities}>
        <UniversityRoster summaries={summaries.slice(0, 4)} />
      </Block>
      <Block title={detailText.blocks.whoFunds}>
        <FunderList funders={funders.slice(0, 4)} empty={detailText.hints.noFunders} />
      </Block>
      <Block title={detailText.blocks.howToApply}>
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </PageShell>
  );
}
