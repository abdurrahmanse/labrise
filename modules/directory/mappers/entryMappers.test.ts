import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { listResourceOf } from "../api/resources";
import { directoryData } from "../data";
import type { DirectoryType, EntryOf } from "../types";

/** Sends every bundled entry of one type entity -> DTO -> schema -> entity and returns how many it checked. */
function roundTrip<T extends DirectoryType>(type: T) {
  const resource = listResourceOf(type);
  const entries: EntryOf[T][] = directoryData[type];
  const dtos = entries.map(resource.toDto);
  const parsed = resource.schema.safeParse(dtos);
  assert.ok(parsed.success, `${type}: the DTO list fails its own schema`);
  assert.deepEqual(parsed.data.map(resource.fromDto), entries, `${type} changed in the round trip`);
  return entries.length;
}

describe("directory mappers", () => {
  for (const type of ["countries", "universities", "professors", "scholarships", "providers"] as const) {
    it(`${type}: every bundled entry survives entity -> DTO -> schema -> entity unchanged`, () => assert.ok(roundTrip(type) > 0));
  }
});
