import { findUniversity, universities } from "@/modules/directory/catalog";
import { universitySlug } from "@/modules/directory/contracts";
import { UNIVERSITY_VIEWS, UniversitySectionView } from "@/modules/directory/detail/UniversitySectionView";
import { defineSectionRoute } from "@/modules/directory/sections/defineSectionRoute";
import { sectionText } from "@/content/text/directory";

const route = defineSectionRoute({
  entries: universities,
  slugOf: universitySlug,
  find: findUniversity,
  views: UNIVERSITY_VIEWS,
  basePath: "/directory/universities",
  meta: (u, view) => ({ title: `${sectionText.university.titles[view]}: ${u.name}`, description: `${sectionText.university.hints[view]} at ${u.name}, ${u.country}.` }),
  render: (university, view) => <UniversitySectionView university={university} view={view} />
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
