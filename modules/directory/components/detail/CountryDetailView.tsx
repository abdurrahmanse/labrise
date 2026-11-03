import Link from "next/link";
import { BulletList } from "@/shared/components/BulletList";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { getCountryById } from "@/data/countryGuidesData";
import { countryDetails } from "../../data/countryDetails";
import { professorsInCountry, universitiesInCountry } from "../../lib/lookups";
import { countrySlug, professorSlug, universitySlug } from "../../lib/slugs";
import type { CountryEntry } from "../../types";
import { APPLY_STEPS } from "./applySteps";
import { CountryFacts } from "./CountryFacts";

export function CountryDetailView({ country }: { country: CountryEntry }) {
  const slug = countrySlug(country);
  const detail = countryDetails[slug];
  const dossier = getCountryById(slug);
  const unis = universitiesInCountry(country.country);
  const profs = professorsInCountry(country.country);

  return (
    <PageShell
      eyebrow={`Country · ${country.region}`}
      title={country.country}
      lead={detail?.overview}
      back={{ href: "/directory/countries", label: "All countries" }}
    >
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

      <Block title={`Universities (${unis.length})`}>
        <Chips items={unis.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name }))} />
      </Block>
      <Block title={`Professors (${profs.length})`}>
        <Chips items={profs.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.group }))} />
      </Block>
      <Block title="How to apply">
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </PageShell>
  );
}
