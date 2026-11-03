import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ApiError, errorMessage } from "./errors";

describe("ApiError", () => {
  it("is retryable for network, 5xx, 408 and 429 but not for other 4xx or parse errors", () => {
    assert.ok(new ApiError("network", "x").retryable);
    assert.ok(new ApiError("http", "x", 503).retryable);
    assert.ok(new ApiError("http", "x", 429).retryable);
    assert.ok(!new ApiError("http", "x", 404).retryable);
    assert.ok(!new ApiError("parse", "x").retryable);
    assert.ok(!new ApiError("aborted", "x").retryable);
  });

  it("gives a readable message for every kind of failure", () => {
    assert.match(errorMessage(new ApiError("network", "x")), /offline/);
    assert.match(errorMessage(new ApiError("http", "x", 404)), /could not find/);
    assert.match(errorMessage(new ApiError("http", "x", 500)), /server had a problem/);
    assert.match(errorMessage(new Error("boom")), /Something went wrong/);
  });
});
