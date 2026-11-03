import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { SearchResult } from "@/modules/search/client";
import { findSuggestion, kindOfSuggestion, plannableResults } from "./suggestions";

const r = (kind: SearchResult["kind"], title: string): SearchResult => ({ kind, title, subtitle: "", href: `/x/${title}` });
const results = [r("University", "ETH Zurich"), r("Professor", "Ada"), r("Funder", "DAAD"), r("Scholarship", "Chevening")];

describe("suggestions", () => {
  it("keeps only universities, scholarships and funders", () => assert.deepEqual(plannableResults(results).map((x) => x.title), ["ETH Zurich", "DAAD", "Chevening"]));
  it("matches a typed name ignoring case and spaces", () => assert.equal(findSuggestion(results, "  eth zurich ")?.href, "/x/ETH Zurich"));
  it("returns nothing for a partial name", () => assert.equal(findSuggestion(results, "ETH"), undefined));
  it("maps a funder to a scholarship application", () => assert.equal(kindOfSuggestion(r("Funder", "DAAD")), "scholarship"));
});
