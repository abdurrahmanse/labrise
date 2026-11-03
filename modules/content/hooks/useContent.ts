"use client";

import type { CountryGuide } from "../types/countryGuide";
import type { DocumentGuideline } from "../types/document";
import type { FAQItem } from "../types/faq";
import { useCollection, useCollectionItem } from "@/shared/data/useCollection";
import { countryGuides } from "../collections/countryGuides";
import { documents } from "../collections/documents";
import { faqs } from "../collections/faqs";

/** Pass the rows the server already rendered as `initial`; the hook keeps them fresh from the API. */
export const useCountryGuides = (initial?: CountryGuide[]) => useCollection(countryGuides, initial);
export const useCountryGuide = (id: string, initial?: CountryGuide) => useCollectionItem(countryGuides, id, initial);
export const useDocuments = (initial?: DocumentGuideline[]) => useCollection(documents, initial);
export const useDocument = (id: string, initial?: DocumentGuideline) => useCollectionItem(documents, id, initial);
export const useFaqs = (initial?: FAQItem[]) => useCollection(faqs, initial);
