import Link from "next/link";
import { Block } from "@/shared/components/Block";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import type { CountryGuide } from "@/modules/content";
import { ecosystemOfCountry } from "../connections";
import { labsInCountry } from "../lookups";
import { countrySlug } from "../utils/slugs";
import { countryTrail } from "../utils/trails";
import { countryDetails } from "../data/countryDetails";
import type { CountryEntry } from "../types";
import { Flag } from "@/shared/components/Flag";
import { CountryViewTabs } from "../ecosystem/CountryViewTabs";
import { EcosystemTiles } from "../ecosystem/EcosystemTiles";
import { FunderList } from "../ecosystem/FunderList";
import { LabRoster } from "../ecosystem/LabRoster";
import { UniversityRoster } from "../ecosystem/UniversityRoster";
import { detailText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";

export function CountryDetailView({ country, dossier }: { country: CountryEntry; dossier?: CountryGuide | null }) {
  const slug = countrySlug(country);
  const { summaries, professors, funders } = ecosystemOfCountry(country);
  const labs = labsInCountry(country.country);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.country(country.region)}
      title={country.country}
      notice={{ subject: country.country }}
      actions={<EntryActions type="countries" slug={slug} />}
      media={<Flag country={country.country} className="h-10 w-14" />}
      lead={countryDetails[slug]?.overview}
      trail={countryTrail(country)}
    >
      <CountryViewTabs slug={slug} />

      <EcosystemTiles slug={slug} universities={summaries.length} professors={professors.length} labs={labs.length} funders={funders.length} />

      <Facts
        rows={[
          [detailText.facts.fundedRoutes, country.routes],
          [detailText.facts.whatYouGet, country.funding],
          [detailText.facts.professorFirst, country.supervisor],
          [detailText.facts.applicationFee, country.fee]
        ]}
      />

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
      {labs.length > 0 && (
        <Block title={detailText.blocks.labsHere(labs.length)}>
          <LabRoster labs={labs.slice(0, 4)} />
          {labs.length > 4 && <Link href={`/directory/countries/${slug}/labs`} className="text-sm font-bold text-indigo-400 hover:text-indigo-200">{detailText.hints.allLabs(labs.length)} →</Link>}
        </Block>
      )}
      <Block title={detailText.blocks.whoFunds}>
        <FunderList funders={funders.slice(0, 4)} empty={detailText.hints.noFunders} />
      </Block>
      <p className="text-sm text-slate-400">{detailText.hints.moreDetail}</p>
    </PageShell>
  );
}
