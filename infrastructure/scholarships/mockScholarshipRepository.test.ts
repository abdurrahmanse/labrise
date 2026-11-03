import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { mockScholarshipRepository as repo } from "./mockScholarshipRepository";

describe("mockScholarshipRepository", () => {
  it("finds a scholarship by slug and returns null for an unknown one", async () => {
    assert.equal((await repo.getBySlug("chevening-scholarships"))?.name, "Chevening Scholarships");
    assert.equal(await repo.getBySlug("does-not-exist"), null);
  });

  it("returns the featured programmes in the configured order, limited", async () => {
    const featured = await repo.getFeatured(3);
    assert.equal(featured.length, 3);
    assert.equal(featured[0].name, "Chevening Scholarships");
  });

  it("searches with filters and pagination", async () => {
    const page = await repo.search({ level: "PhD", pageSize: 5 });
    assert.ok(page.items.length <= 5 && page.items.every((s) => s.level === "PhD"));
  });
});
