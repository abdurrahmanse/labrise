import type { z } from "zod";

/**
 * One dataset the site reads: its name, backend path, shape, and where the bundled copy lives.
 * Adding a dataset means one `defineCollection` call. Pages and hooks never change when the source moves to a database.
 */
export interface Collection<Item, Dto = Item> {
  name: string;
  /** Backend path from shared/data/endpoints.ts. The same path serves bundled data and a real backend. */
  path: string;
  /** Validates the wire format of every response, so a changed backend fails loudly instead of rendering garbage. */
  schema: z.ZodType<Dto>;
  /** Wire format to the entity the site works with. Where a backend's field names are translated. */
  fromDto: (dto: Dto) => Item;
  /** Entity to wire format. The built-in /api routes send this, so they match what a real backend returns. */
  toDto: (item: Item) => Dto;
  idOf: (item: Item) => string;
  /** How long the browser counts the data as fresh. */
  staleTime: number;
  /** Bundled data, used when no backend is configured and by the built-in /api routes. */
  local: () => Promise<Item[]>;
}

export const defineCollection = <Item, Dto = Item>(collection: Collection<Item, Dto>): Collection<Item, Dto> => collection;
