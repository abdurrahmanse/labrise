import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { countries } from "../data/countries";
import { fieldKeys } from "../data/fields";
import { peopleInField, regionNames, regionOfSlug, regionSlug, statsOfRegion, summaryOfFields } from "./hubs";

describe("region hubs", () => {
  it("finds a region again from its address", () => {
    for (const r of regionNames) assert.equal(regionOfSlug(regionSlug(r)), r);
  });
  it("counts every country exactly once across regions", () => {
    const total = regionNames.reduce((n, r) => n + statsOfRegion(r).countries.length, 0);
    assert.equal(total, countries.length);
  });
});

describe("field hubs", () => {
  it("only lists fields that have people or labs", () => {
    for (const f of summaryOfFields()) assert.ok(f.professors + f.labs > 0);
    assert.ok(summaryOfFields().every((f) => fieldKeys.includes(f.key)));
  });
  it("returns professors that belong to the field", () => {
    const top = summaryOfFields()[0];
    assert.equal(peopleInField(top.key).professors.length, top.professors);
  });
});
