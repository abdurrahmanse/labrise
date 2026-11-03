import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { collections } from "@/modules/content/registry";
import { mockContentRepository as repo } from "./mockContentRepository";

describe("mockContentRepository", () => {
  it("every bundled collection passes its own schema", async () => {
    for (const name of Object.keys(collections) as (keyof typeof collections)[]) {
      const collection = collections[name];
      const rows = await repo.list(name);
      assert.ok(rows.length > 0, `${name} is empty`);
      for (const row of rows) assert.ok(collection.schema.safeParse(row).success, `${name}: invalid row ${collection.idOf(row as never)}`);
    }
  });

  it("gets an item by id ignoring case, and returns null when missing", async () => {
    assert.equal((await repo.get("country-guides", "GERMANY"))?.name, "Germany");
    assert.equal(await repo.get("documents", "nope"), null);
  });
});
