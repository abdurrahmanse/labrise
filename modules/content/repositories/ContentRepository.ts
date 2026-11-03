import type { CollectionItem, CollectionName } from "../registry";

/**
 * What the content module needs from a data source. The module owns this contract;
 * infrastructure/content provides the implementations (bundled data, REST backend).
 */
export interface ContentRepository {
  list<N extends CollectionName>(name: N, signal?: AbortSignal): Promise<CollectionItem<N>[]>;
  /** Resolves to null when the item does not exist. */
  get<N extends CollectionName>(name: N, id: string, signal?: AbortSignal): Promise<CollectionItem<N> | null>;
}
