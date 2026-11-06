import { findLab, labs } from "@/modules/directory/catalog";
import { labSlug } from "@/modules/directory/contracts";
import { LAB_VIEWS, LabSectionView } from "@/modules/directory/detail/LabSectionView";
import { defineSectionRoute } from "@/modules/directory/sections/defineSectionRoute";
import { sectionText } from "@/content/text/directory";

const route = defineSectionRoute({
  entries: labs,
  slugOf: labSlug,
  find: findLab,
  views: LAB_VIEWS,
  basePath: "/directory/labs",
  meta: (lab, view) => ({ title: `${sectionText.lab.titles[view]}: ${lab.name}`, description: `${sectionText.lab.hints[view]}. ${lab.focus}.` }),
  render: (lab, view) => <LabSectionView lab={lab} view={view} />
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
