import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { plannerAddress, readPrefill } from "./prefill";

describe("prefill", () => {
  it("round-trips a name, kind and page", () => {
    const url = plannerAddress({ name: "DAAD & Co", kind: "scholarship", href: "/directory/scholarships/daad" });
    assert.deepEqual(readPrefill(url.slice(url.indexOf("?"), url.indexOf("#"))), { name: "DAAD & Co", kind: "scholarship", href: "/directory/scholarships/daad" });
  });
  it("ignores a missing name", () => assert.equal(readPrefill("?kind=university"), undefined));
  it("drops addresses that leave the site", () => assert.equal(readPrefill("?name=x&href=//evil.example")?.href, undefined));
  it("falls back to other for an unknown kind", () => assert.equal(readPrefill("?name=x&kind=zzz")?.kind, "other"));
});
