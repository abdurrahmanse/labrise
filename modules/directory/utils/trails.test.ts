import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { labs } from "../data/labs";
import { universities } from "../data/universities";
import { labTrail, universityTrail, withStep } from "./trails";

describe("trails", () => {
  it("shows country, university and lab in order for a lab under a university", () => {
    const lab = labs.find((l) => l.university)!;
    const labels = labTrail(lab).map((s) => s.label);
    assert.deepEqual(labels.slice(0, 3), ["Home", "Directory", "Countries"]);
    assert.equal(labels.at(-1), lab.name);
    assert.ok(labels.includes(lab.university!));
    assert.ok(labels.includes(lab.country));
  });
  it("routes an independent lab through its country's labs page", () => {
    const lab = labs.find((l) => !l.university)!;
    assert.ok(labTrail(lab).some((s) => s.href.endsWith("/labs")));
  });
  it("adds a step to the end of a trail", () => {
    const trail = withStep(universityTrail(universities[0]), "Labs", "/x");
    assert.deepEqual(trail.at(-1), { label: "Labs", href: "/x" });
  });
  it("gives every trail step an address", () => {
    for (const lab of labs) for (const step of labTrail(lab)) assert.match(step.href, /^\//);
  });
});
