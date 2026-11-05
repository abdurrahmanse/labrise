import type { WithContext, WebSite } from "schema-dts";
import { site } from "../site";
import { brand } from "@/content/site/brand";

export const websiteSchema = (): WithContext<WebSite> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: [...brand.alternateNames],
  url: site.url,
  description: site.description,
  inLanguage: "en"
});
