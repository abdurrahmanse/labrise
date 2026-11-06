import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { labs } from "../data/labs";
import { professors } from "../data/professors";
import { expansionProfessors } from "../data/professorsExpansion";
import { isUnverified } from "./review";

describe("isUnverified", () => {
  it("flags every lab and every hand-added professor", () => {
    assert.ok(labs.every((l) => isUnverified("labs", l.name)));
    assert.ok(expansionProfessors.every((p) => isUnverified("professors", p.name)));
  });
  it("does not flag entries from the original reviewed lists", () => {
    const original = professors.find((p) => p.name === "Bernhard Schölkopf")!;
    assert.equal(isUnverified("professors", original.name), false);
  });
  it("never flags a type that has no unverified list", () => {
    assert.equal(isUnverified("countries", "Germany"), false);
  });
});
