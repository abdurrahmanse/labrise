import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { z } from "zod";
import { addRequestInterceptor, apiClient, setAuthTokenProvider } from "./client";
import { ApiError } from "./errors";

const realFetch = globalThis.fetch;
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
const schema = z.object({ ok: z.boolean() });
const noRetry = { schema, retries: 0, baseUrl: "http://api.test" };

afterEach(() => {
  globalThis.fetch = realFetch;
  setAuthTokenProvider(null);
});

describe("apiClient", () => {
  it("builds the URL from base, path and params, skipping empty params", async () => {
    let url = "";
    globalThis.fetch = async (input) => ((url = String(input)), json({ ok: true }));
    await apiClient.get("/x", { ...noRetry, params: { q: "a b", page: 2, empty: "", none: undefined } });
    assert.equal(url, "http://api.test/x?q=a+b&page=2");
  });

  it("sends a JSON body and method for POST", async () => {
    let init: RequestInit | undefined;
    globalThis.fetch = async (_url, i) => ((init = i), json({ ok: true }));
    await apiClient.post("/x", { a: 1 }, noRetry);
    assert.equal(init?.method, "POST");
    assert.equal(init?.body, '{"a":1}');
    assert.equal((init?.headers as Record<string, string>)["Content-Type"], "application/json");
  });

  it("injects the auth token and runs request interceptors", async () => {
    let headers: Record<string, string> = {};
    globalThis.fetch = async (_url, i) => ((headers = i?.headers as Record<string, string>), json({ ok: true }));
    setAuthTokenProvider(() => "abc");
    const remove = addRequestInterceptor((r) => ({ ...r, headers: { ...r.headers, "X-Trace": "1" } }));
    await apiClient.get("/x", noRetry);
    remove();
    assert.equal(headers.Authorization, "Bearer abc");
    assert.equal(headers["X-Trace"], "1");
  });

  it("maps HTTP errors to ApiError with the server message and status", async () => {
    globalThis.fetch = async () => json({ error: { status: 404, message: "Nope" } }, 404);
    await assert.rejects(apiClient.get("/x", noRetry), (e: unknown) => e instanceof ApiError && e.status === 404 && e.message === "Nope" && e.isNotFound);
  });

  it("rejects a response that does not match the schema", async () => {
    globalThis.fetch = async () => json({ wrong: 1 });
    await assert.rejects(apiClient.get("/x", noRetry), (e: unknown) => e instanceof ApiError && e.code === "parse");
  });

  it("maps a thrown fetch to a network error", async () => {
    globalThis.fetch = async () => {
      throw new TypeError("offline");
    };
    await assert.rejects(apiClient.get("/x", noRetry), (e: unknown) => e instanceof ApiError && e.code === "network");
  });

  it("retries GET on a 503 and then succeeds", async () => {
    let calls = 0;
    globalThis.fetch = async () => (++calls < 2 ? json({}, 503) : json({ ok: true }));
    const result = await apiClient.get("/x", { schema, baseUrl: "http://api.test", retries: 2 });
    assert.deepEqual(result, { ok: true });
    assert.equal(calls, 2);
  });

  it("does not retry a 404, and does not retry POST by default", async () => {
    let calls = 0;
    globalThis.fetch = async () => (calls++, json({}, 404));
    await assert.rejects(apiClient.get("/x", { schema, baseUrl: "http://api.test", retries: 3 }));
    assert.equal(calls, 1);

    calls = 0;
    globalThis.fetch = async () => (calls++, json({}, 503));
    await assert.rejects(apiClient.post("/x", {}, { schema, baseUrl: "http://api.test" }));
    assert.equal(calls, 1);
  });

  it("reports a cancelled request as aborted", async () => {
    const controller = new AbortController();
    globalThis.fetch = (_url, i) =>
      new Promise((_resolve, reject) => {
        const abort = () => reject(new DOMException("x", "AbortError"));
        if (i?.signal?.aborted) abort();
        else i?.signal?.addEventListener("abort", abort);
      });
    const pending = apiClient.get("/x", { ...noRetry, signal: controller.signal });
    controller.abort();
    await assert.rejects(pending, (e: unknown) => e instanceof ApiError && e.code === "aborted");
  });
});
