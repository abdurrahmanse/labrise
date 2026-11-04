/**
 * Public API of the seo module. Other code imports from "@/modules/seo", never from inner files.
 */
export { JsonLd } from "./JsonLd";
export { buildMetadata } from "./buildMetadata";
export { breadcrumbSchema, howToSchema, personSchema, scholarshipGrantSchema, universitySchema, websiteSchema, organizationSchema } from "./schemas";
export { absoluteUrl } from "./site";
