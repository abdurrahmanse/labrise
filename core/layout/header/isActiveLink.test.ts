import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isActiveLink } from "./isActiveLink";

const roadmap = { href: "/steps", matches: ["/roadmap"] };

describe("isActiveLink", () => {
  it("is active on the link's own page and below it", () => {
    assert.ok(isActiveLink("/steps", roadmap));
    assert.ok(isActiveLink("/steps/1", roadmap));
  });
  it("is active on pages the link lists as its own section", () => assert.ok(isActiveLink("/roadmap/phases/choose-countries", roadmap)));
  it("does not match a path that only starts with the same letters", () => {
    assert.equal(isActiveLink("/stepsister", roadmap), false);
    assert.equal(isActiveLink("/roadmaps", roadmap), false);
  });
  it("is inactive elsewhere", () => assert.equal(isActiveLink("/guides", roadmap), false));
});
