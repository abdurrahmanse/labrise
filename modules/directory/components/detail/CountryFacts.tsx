import { Facts } from "@/shared/components/Facts";
import type { CountryDetail } from "../../data/countryDetails";

/** Practical numbers for one country: PhD length, pay, language, intake and visa. */
export function CountryFacts({ detail }: { detail: CountryDetail }) {
  return (
    <Facts
      rows={[
        ["PhD length", detail.phd],
        ["Typical pay", detail.pay],
        ["Language", detail.language],
        ["Intake", detail.intake],
        ["Visa", detail.visa]
      ]}
    />
  );
}
