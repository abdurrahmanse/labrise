import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { stepState } from "./timeline";

const step = { monthsBeforeStart: 6, monthsBeforeEnd: 4 };

describe("stepState", () => {
  it("is upcoming before the window", () => assert.equal(stepState("2027-09", step, new Date(2027, 0, 15)), "upcoming"));
  it("is now inside the window", () => assert.equal(stepState("2027-09", step, new Date(2027, 4, 10)), "now"));
  it("is past after the window", () => assert.equal(stepState("2027-09", step, new Date(2027, 6, 1)), "past"));
});
