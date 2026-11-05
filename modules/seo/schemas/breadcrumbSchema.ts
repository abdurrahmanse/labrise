import type { WithContext, BreadcrumbList } from "schema-dts";
import { absoluteUrl } from "../site";

export const breadcrumbSchema = (items: { name: string; path: string }[]): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});
