import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { percentOf } from "./percent";

describe("percentOf", () => {
  it("rounds to a whole number", () => assert.equal(percentOf(1, 3), 33));
  it("reaches 100 when everything is done", () => assert.equal(percentOf(4, 4), 100));
  it("is 0 when there is nothing to count, not NaN", () => assert.equal(percentOf(0, 0), 0));
});
