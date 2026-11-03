import { collectionOf, type CollectionDto, type CollectionName } from "@/modules/content/registry";
import { mockContentRepository } from "./mockContentRepository";

/**
 * What the built-in /api/content routes send: the bundled entities converted to the wire format,
 * which is the same JSON a real backend must return for these paths.
 */
export async function listContentDtos<N extends CollectionName>(name: N): Promise<CollectionDto<N>[]> {
  const items = await mockContentRepository.list(name);
  return items.map(collectionOf(name).toDto);
}

/** One item in wire format, or null when it does not exist. */
export async function getContentDto<N extends CollectionName>(name: N, id: string): Promise<CollectionDto<N> | null> {
  const item = await mockContentRepository.get(name, id);
  return item ? collectionOf(name).toDto(item) : null;
}
