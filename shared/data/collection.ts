import type { z } from "zod";

/**
 * One dataset the site reads: its name, backend path, shape, and where the bundled copy lives.
 * Adding a dataset means one `defineCollection` call. Pages and hooks never change when the source moves to a database.
 */
export interface Collection<Item> {
  name: string;
  /** Backend path from shared/data/endpoints.ts. The same path serves bundled data and a real backend. */
  path: string;
  /** Validates every response, so a changed backend fails loudly instead of rendering garbage. */
  schema: z.ZodType<Item>;
  idOf: (item: Item) => string;
  /** How long the browser counts the data as fresh. */
  staleTime: number;
  /** Bundled data, used when no backend is configured and by the built-in /api routes. */
  local: () => Promise<Item[]>;
}

export const defineCollection = <Item>(collection: Collection<Item>): Collection<Item> => collection;

export type ItemOf<C> = C extends Collection<infer Item> ? Item : never;
