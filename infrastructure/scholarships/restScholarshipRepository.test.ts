import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { createRestScholarshipRepository } from "./restScholarshipRepository";

const realFetch = globalThis.fetch;
afterEach(() => void (globalThis.fetch = realFetch));
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

const sample = { name: "X", host: "Germany", region: "Europe", level: "PhD", covers: "c", eligibility: "e", deadline: "d", site: "https://x.org" };
const repo = createRestScholarshipRepository({ baseUrl: "http://api.test", headers: { Authorization: "Bearer t" } });

describe("restScholarshipRepository", () => {
  it("sends filters as query params and the auth header, and parses the page", async () => {
    let url = "";
    let auth = "";
    globalThis.fetch = async (input, init) => {
      url = String(input);
      auth = (init?.headers as Record<string, string>).Authorization;
      return json({ items: [sample], total: 1, page: 1, pageSize: 12, pageCount: 1 });
    };
    const page = await repo.search({ q: "x", level: "PhD", page: 1 });
    assert.equal(url, "http://api.test/api/scholarships?q=x&level=PhD&page=1");
    assert.equal(auth, "Bearer t");
    assert.equal(page.items[0].name, "X");
  });

  it("turns a 404 into null for getBySlug", async () => {
    globalThis.fetch = async () => json({ error: { status: 404, message: "no" } }, 404);
    assert.equal(await repo.getBySlug("missing"), null);
  });

  it("fails loudly when the backend returns the wrong shape", async () => {
    globalThis.fetch = async () => json({ items: [{ name: 1 }] });
    await assert.rejects(repo.search({}), { code: "parse" });
  });
});
