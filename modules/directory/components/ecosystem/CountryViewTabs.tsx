import { ecosystemText, countryViewText } from "@/data/text/directory";
import { SubNav } from "@/shared/components/SubNav";

export function countryViewItems(slug: string) {
  return [
    { href: `/directory/countries/${slug}`, label: countryViewText.overview },
    { href: `/directory/countries/${slug}/universities`, label: ecosystemText.universities },
    { href: `/directory/countries/${slug}/professors`, label: ecosystemText.professors },
    { href: `/directory/countries/${slug}/funding`, label: ecosystemText.funding }
  ];
}

export function CountryViewTabs({ slug }: { slug: string }) {
  return <SubNav label={ecosystemText.sections} items={countryViewItems(slug)} />;
}
