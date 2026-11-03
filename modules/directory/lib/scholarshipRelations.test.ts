import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { findScholarship, findProvider } from "./lookups";
import { applicationChecklist, sameHostScholarships, sameLevelScholarships } from "./scholarshipRelations";

describe("scholarshipRelations", () => {
  const chevening = findScholarship("chevening-scholarships")!;

  it("lists other scholarships of the same host, never the scholarship itself", () => {
    const same = sameHostScholarships(chevening);
    assert.ok(same.length > 0 && same.every((s) => s.host === chevening.host && s.name !== chevening.name));
  });

  it("lists same-level scholarships from other countries, within the limit", () => {
    const same = sameLevelScholarships(chevening, 3);
    assert.ok(same.length <= 3 && same.every((s) => s.level === chevening.level && s.host !== chevening.host));
  });

  it("uses the provider's documents in the checklist when a provider is known", () => {
    const provider = findProvider("commonwealth-scholarship-commission")!;
    const withProvider = applicationChecklist(provider);
    assert.ok(provider.documents.every((d) => withProvider.includes(d)));
    assert.equal(applicationChecklist().length, 5);
  });
});
