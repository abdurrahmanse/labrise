import type { Collection } from "@/shared/data/collection";
import { countryGuides } from "./collections/countryGuides";
import { documents } from "./collections/documents";
import { faqs } from "./collections/faqs";
import type { CountryGuideDto } from "./dto/countryGuideDto";
import type { DocumentDto } from "./dto/documentDto";
import type { FaqDto } from "./dto/faqDto";
import type { CountryGuide } from "./types/countryGuide";
import type { DocumentGuideline } from "./types/document";
import type { FAQItem } from "./types/faq";

/** Entity each collection serves, by the slug used in /api/content/{slug}. */
interface ItemOf {
  "country-guides": CountryGuide;
  documents: DocumentGuideline;
  faqs: FAQItem;
}

/** Wire format of each collection. */
interface DtoOf {
  "country-guides": CountryGuideDto;
  documents: DocumentDto;
  faqs: FaqDto;
}

export type CollectionName = keyof ItemOf;
export type CollectionItem<N extends CollectionName> = ItemOf[N];
export type CollectionDto<N extends CollectionName> = DtoOf[N];
type Collections = { [N in CollectionName]: Collection<ItemOf[N], DtoOf[N]> };

/**
 * Every collection the site serves. To add a dataset: write its collection in ./collections,
 * add its entity and DTO to the two interfaces above, then list it here. The compiler checks each entry.
 */
export const collections: Collections = {
  "country-guides": countryGuides,
  documents,
  faqs
};

export const isCollectionName = (name: string): name is CollectionName => Object.hasOwn(collections, name);

/** The collection for a name, typed by that name's entity and DTO. */
export const collectionOf = <N extends CollectionName>(name: N): Collections[N] => collections[name];
