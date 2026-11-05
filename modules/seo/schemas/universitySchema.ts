import type { WithContext, CollegeOrUniversity } from "schema-dts";

export const universitySchema = (name: string, url: string, country: string): WithContext<CollegeOrUniversity> => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name,
  url,
  address: { "@type": "PostalAddress", addressCountry: country }
});
