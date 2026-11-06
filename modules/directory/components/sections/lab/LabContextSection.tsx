import Link from "next/link";
import { Block } from "@/shared/components/Block";
import { Facts } from "@/shared/components/Facts";
import { detailText, labText } from "@/content/text/directory";
import { countries } from "../../../data/countries";
import { countryDetails } from "../../../data/countryDetails";
import { universities } from "../../../data/universities";
import type { LabEntry } from "../../../types";
import { countrySlug, universitySlug } from "../../../utils/slugs";
import { CountryFacts } from "../../detail/CountryFacts";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function LabContextSection({ lab }: { lab: LabEntry }) {
  const country = countries.find((c) => c.country === lab.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;

  return (
    <>
      {university && (
        <Block title={labText.blocks.university}>
          <Facts
            rows={[
              [labText.facts.affiliation, <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{university.name}</Link>],
              [labText.facts.funding, university.funding],
              [labText.facts.deadline, university.deadline]
            ]}
          />
        </Block>
      )}
      {country && (
        <Block title={labText.blocks.country}>
          <Facts
            rows={[
              [detailText.facts.fundedRoutes, country.routes],
              [detailText.facts.whatYouGet, country.funding],
              [detailText.facts.professorFirst, country.supervisor],
              [detailText.facts.applicationFee, country.fee]
            ]}
          />
          {detail && <CountryFacts detail={detail} />}
          <Link href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{detailText.hints.dossier(country.country)}</Link>
        </Block>
      )}
    </>
  );
}
