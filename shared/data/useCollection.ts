"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { queryKeys } from "@/shared/query/queryKeys";
import type { Collection } from "./collection";
import { remoteRepository } from "./repository";

/**
 * All items of a collection. Server-rendered rows are shown first (good for SEO),
 * then TanStack Query keeps them fresh from the API.
 */
export function useCollection<Item>(collection: Collection<Item>, initialData?: Item[]) {
  const query = useQuery({
    queryKey: queryKeys.collection(collection.name).list(),
    queryFn: ({ signal }) => remoteRepository(collection).list(signal),
    initialData,
    staleTime: collection.staleTime
  });
  return { ...query, data: query.data ?? initialData ?? [] };
}

/** One item by id. Seeded from the server when the page already has it. */
export function useCollectionItem<Item>(collection: Collection<Item>, id: string, initialData?: Item) {
  return useQuery({
    queryKey: queryKeys.collection(collection.name).item(id),
    queryFn: ({ signal }) => remoteRepository(collection).get(id, signal),
    initialData,
    staleTime: collection.staleTime
  });
}

/** Warms the cache when the pointer reaches a link, so the next page opens without waiting. */
export function usePrefetchCollectionItem<Item>(collection: Collection<Item>, id: string) {
  const client = useQueryClient();
  return useCallback(() => {
    void client.prefetchQuery({
      queryKey: queryKeys.collection(collection.name).item(id),
      queryFn: ({ signal }) => remoteRepository(collection).get(id, signal),
      staleTime: collection.staleTime
    });
  }, [client, collection, id]);
}
