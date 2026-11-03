import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Scholarship } from "../types/scholarship";
import { searchScholarships } from "./searchScholarships";

const make = (name: string, host: string, level: Scholarship["level"], region: Scholarship["region"] = "Europe"): Scholarship => ({
  name, host, level, region, covers: `${name} covers tuition`, eligibility: "Open", deadline: "Jan", site: "https://example.org"
});
const all = [make("Alpha", "Germany", "PhD"), make("Beta", "Japan", "Master's", "Asia"), make("Gamma", "Germany", "Master's & PhD"), make("Delta", "Canada", "PhD", "North America")];

describe("searchScholarships", () => {
  it("filters by country, level and region together", () => {
    assert.deepEqual(searchScholarships(all, { country: "Germany", level: "PhD" }).items.map((s) => s.name), ["Alpha"]);
    assert.deepEqual(searchScholarships(all, { region: "Asia" }).items.map((s) => s.name), ["Beta"]);
  });

  it("searches name, country and coverage text case-insensitively", () => {
    assert.equal(searchScholarships(all, { q: "ALPHA" }).total, 1);
    assert.equal(searchScholarships(all, { q: "japan" }).total, 1);
    assert.equal(searchScholarships(all, { q: "tuition" }).total, 4);
    assert.equal(searchScholarships(all, { q: "nothing-matches" }).total, 0);
  });

  it("sorts without changing the source list", () => {
    const names = searchScholarships(all, { sort: "country" }).items.map((s) => s.host);
    assert.deepEqual(names, ["Canada", "Germany", "Germany", "Japan"]);
    assert.equal(all[0].name, "Alpha");
  });

  it("pages results and clamps an out-of-range page", () => {
    const first = searchScholarships(all, { pageSize: 3 });
    assert.equal(first.items.length, 3);
    assert.equal(first.pageCount, 2);
    const clamped = searchScholarships(all, { pageSize: 3, page: 99 });
    assert.equal(clamped.page, 2);
    assert.equal(clamped.items.length, 1);
  });

  it("returns one empty page when nothing matches", () => {
    const empty = searchScholarships(all, { q: "zzz" });
    assert.deepEqual({ items: empty.items.length, pageCount: empty.pageCount, page: empty.page }, { items: 0, pageCount: 1, page: 1 });
  });
});
