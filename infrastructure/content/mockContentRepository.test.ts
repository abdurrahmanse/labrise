import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { collectionOf, collections, type CollectionName } from "@/modules/content/registry";
import { mockContentRepository as repo } from "./mockContentRepository";

const names = Object.keys(collections) as CollectionName[];

/** Sends every row of one collection entity -> DTO -> schema -> entity and returns how many rows it checked. */
async function roundTrip<N extends CollectionName>(name: N) {
  const collection = collectionOf(name);
  const rows = await repo.list(name);
  for (const entity of rows) {
    const parsed = collection.schema.safeParse(collection.toDto(entity));
    assert.ok(parsed.success, `${name}: the DTO of ${collection.idOf(entity)} fails its own schema`);
    assert.deepEqual(collection.fromDto(parsed.data), entity, `${name}: ${collection.idOf(entity)} changed in the round trip`);
  }
  return rows.length;
}

describe("content collections", () => {
  it("every bundled row survives entity -> DTO -> schema -> entity unchanged", async () => {
    for (const name of names) assert.ok((await roundTrip(name)) > 0, `${name} is empty`);
  });

  it("gets an item by id ignoring case, and returns null when missing", async () => {
    assert.equal((await repo.get("country-guides", "GERMANY"))?.name, "Germany");
    assert.equal(await repo.get("documents", "nope"), null);
  });
});
