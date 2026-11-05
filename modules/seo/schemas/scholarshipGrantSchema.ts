import type { WithContext, MonetaryGrant } from "schema-dts";

/** A scholarship as a grant. `funder` is the organisation that awards it, when the directory lists one. */
export const scholarshipGrantSchema = (name: string, description: string, url: string, funder?: string): WithContext<MonetaryGrant> => ({
  "@context": "https://schema.org",
  "@type": "MonetaryGrant",
  name,
  description,
  url,
  ...(funder ? { funder: { "@type": "Organization", name: funder } } : {})
});
