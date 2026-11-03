import { SubNav } from "@/shared/components/SubNav";

export function countryViewItems(slug: string) {
  return [
    { href: `/directory/countries/${slug}`, label: "Overview" },
    { href: `/directory/countries/${slug}/universities`, label: "Universities" },
    { href: `/directory/countries/${slug}/professors`, label: "Professors" },
    { href: `/directory/countries/${slug}/funding`, label: "Funding organisations" }
  ];
}

export function CountryViewTabs({ slug }: { slug: string }) {
  return <SubNav label="Country sections" items={countryViewItems(slug)} />;
}
