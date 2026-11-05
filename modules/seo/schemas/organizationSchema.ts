import type { WithContext, Organization } from "schema-dts";
import { absoluteUrl, site } from "../site";
import { brand } from "@/content/site/brand";

/** Tells search engines who runs the site and which logo to show. */
export const organizationSchema = (): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  alternateName: [...brand.alternateNames],
  url: site.url,
  logo: absoluteUrl("/logo.svg"),
  description: brand.tagline,
  email: brand.contactEmail,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" }
});
