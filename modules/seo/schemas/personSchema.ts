import type { WithContext, Person } from "schema-dts";

export const personSchema = (name: string, affiliation: string, field: string): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: "Professor",
  affiliation: { "@type": "Organization", name: affiliation },
  knowsAbout: field
});
