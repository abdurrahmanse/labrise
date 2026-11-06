import { countries, findCountry } from "@/modules/directory/catalog";
import { countrySlug } from "@/modules/directory/contracts";
import { COUNTRY_VIEWS, COUNTRY_VIEW_TITLES, CountrySectionView } from "@/modules/directory/detail/CountrySectionView";
import { defineSectionRoute } from "@/modules/directory/sections/defineSectionRoute";
import { countryViewText } from "@/content/text/directory";

const route = defineSectionRoute({
  entries: countries,
  slugOf: countrySlug,
  find: findCountry,
  views: COUNTRY_VIEWS,
  basePath: "/directory/countries",
  meta: (c, view) => ({ title: countryViewText.metaTitle(COUNTRY_VIEW_TITLES[view], c.country), description: countryViewText.metaDescription(COUNTRY_VIEW_TITLES[view], c.country) }),
  render: (country, view) => <CountrySectionView country={country} view={view} />
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
