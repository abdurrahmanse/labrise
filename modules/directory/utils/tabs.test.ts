import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { tabNeighbours } from "./tabs";

const tabs = [{ view: null, label: "Overview" }, { view: "people", label: "People" }, { view: "funding", label: "Funding" }];

describe("tabNeighbours", () => {
  it("links to the page before and after", () => {
    const n = tabNeighbours("/directory/labs/x", tabs, "people");
    assert.deepEqual(n.prev, { href: "/directory/labs/x", label: "Overview" });
    assert.deepEqual(n.next, { href: "/directory/labs/x/funding", label: "Funding" });
  });
  it("has no next link on the last page and no previous on the first", () => {
    assert.equal(tabNeighbours("/b", tabs, "funding").next, undefined);
    assert.equal(tabNeighbours("/b", tabs, "overview").prev, undefined);
  });
});
