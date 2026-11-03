import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateApplication } from "./validateApplication";

describe("validateApplication", () => {
  it("accepts a name and a deadline", () => assert.equal(validateApplication({ name: "ETH", deadline: "2027-01-15" }).valid, true));
  it("flags a blank name and a missing deadline", () => {
    const { errors, valid } = validateApplication({ name: "   ", deadline: "" });
    assert.deepEqual({ valid, errors }, { valid: false, errors: { name: true, deadline: true } });
  });
});
