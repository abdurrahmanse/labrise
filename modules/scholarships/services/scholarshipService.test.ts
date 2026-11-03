import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { DEFAULT_PAGE_SIZE } from "../constants";
import type { ScholarshipRepository } from "../repositories/ScholarshipRepository";
import type { ScholarshipSearchParams } from "../types/search";
import { createScholarshipService } from "./scholarshipService";

describe("scholarshipService", () => {
  it("fills in page and page size before calling the repository", async () => {
    let received: ScholarshipSearchParams | undefined;
    const repo: ScholarshipRepository = {
      getAll: async () => [],
      getBySlug: async () => null,
      getFeatured: async () => [],
      search: async (params) => ((received = params), { items: [], total: 0, page: 1, pageSize: DEFAULT_PAGE_SIZE, pageCount: 1 })
    };
    await createScholarshipService(repo).search({ q: "daad" });
    assert.deepEqual(received, { q: "daad", page: 1, pageSize: DEFAULT_PAGE_SIZE });
  });
});
