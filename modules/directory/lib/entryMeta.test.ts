import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { entryMeta } from "./entryMeta";

describe("entryMeta", () => {
  it("describes a known entry of every type", () => {
    assert.match(entryMeta("countries", "germany")?.title ?? "", /Germany/);
    assert.match(entryMeta("universities", "eth-zurich")?.title ?? "", /ETH Zurich/);
    assert.match(entryMeta("scholarships", "chevening-scholarships")?.title ?? "", /Chevening/);
  });
  it("returns null for an unknown slug or type", () => {
    assert.equal(entryMeta("countries", "atlantis"), null);
    assert.equal(entryMeta("bogus", "x"), null);
  });
});
