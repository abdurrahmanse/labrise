import type { BreadcrumbList, CollegeOrUniversity, HowTo, Person, WebSite, WithContext } from "schema-dts";
import { absoluteUrl, site } from "./site";

export const websiteSchema = (): WithContext<WebSite> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description
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
