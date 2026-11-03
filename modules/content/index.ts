/**
 * Public API of the content module (country guides, documents, FAQs).
 * Other modules and pages import from here, never from the module's inner folders.
 * Server-only reads live in "@/modules/content/server" so this file stays safe for client components.
 */
export { useCountryGuide, useCountryGuides, useDocument, useDocuments, useFaqs } from "./hooks/useContent";
export type { CountryGuide } from "@/data/countryGuidesData";
export type { DocumentGuideline } from "@/data/documentsData";
export type { FAQItem } from "@/data/types";
