import type { BreadcrumbList, Organization, CollegeOrUniversity, HowTo, MonetaryGrant, Person, WebSite, WithContext } from "schema-dts";
import { absoluteUrl, site } from "./site";
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

export const howToSchema = (name: string, description: string, steps: string[]): WithContext<HowTo> => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, text }))
});

export const universitySchema = (name: string, url: string, country: string): WithContext<CollegeOrUniversity> => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name,
  url,
  address: { "@type": "PostalAddress", addressCountry: country }
});

export const personSchema = (name: string, affiliation: string, field: string): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: "Professor",
  affiliation: { "@type": "Organization", name: affiliation },
  knowsAbout: field
});

/** A scholarship as a grant. `funder` is the organisation that awards it, when the directory lists one. */
export const scholarshipGrantSchema = (name: string, description: string, url: string, funder?: string): WithContext<MonetaryGrant> => ({
  "@context": "https://schema.org",
  "@type": "MonetaryGrant",
  name,
  description,
  url,
  ...(funder ? { funder: { "@type": "Organization", name: funder } } : {})
});
