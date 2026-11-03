import "server-only";
import { directoryData } from "../data";
import type { DtoOf, EntryResponseDto } from "../dto/directoryDto";
import { toEntryResponseDto } from "../mappers/entryResponseMapper";
import type { DirectoryType, EntryOf } from "../types";
import { getEntry } from "./entryServer";
import { listResourceOf } from "./resources";

/**
 * What the built-in /api/directory routes send: the bundled entities converted to the wire format,
 * the same JSON a real backend must return for these paths.
 */
export function listDirectoryDtos<T extends DirectoryType>(type: T): DtoOf[T][] {
  const entries: EntryOf[T][] = directoryData[type];
  return entries.map(listResourceOf(type).toDto);
}

/** One entry and its related links in wire format, or null for an unknown slug. */
export function getEntryResponseDto(type: DirectoryType, slug: string): EntryResponseDto | null {
  const result = getEntry(type, slug);
  return result ? toEntryResponseDto(result) : null;
}
