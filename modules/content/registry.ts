import { countryGuides } from "./collections/countryGuides";
import { documents } from "./collections/documents";
import { faqs } from "./collections/faqs";
import type { Collection, ItemOf } from "@/shared/data/collection";

/**
 * Every collection the site serves. The key is the slug used in /api/content/{key}.
 * To add a dataset: write its collection in ./collections, then list it here.
 */
export const collections = {
  "country-guides": countryGuides,
  documents,
  faqs
} as const;

export type CollectionName = keyof typeof collections;
export type CollectionItem<N extends CollectionName> = ItemOf<(typeof collections)[N]>;

export const isCollectionName = (name: string): name is CollectionName => Object.hasOwn(collections, name);

/**
 * Typed access to a collection by name. The registry above is a plain object, so TypeScript cannot
 * connect the name to its item type by itself; this is the one place that states it.
 */
export const collectionOf = <N extends CollectionName>(name: N) => collections[name] as unknown as Collection<CollectionItem<N>>;
