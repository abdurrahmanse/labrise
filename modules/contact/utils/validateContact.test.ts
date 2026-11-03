import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MIN_MESSAGE, type ContactValues } from "./contactSchema";
import { validateContact } from "./validateContact";

const valid: ContactValues = { topic: "correction", name: "Ada", email: "ada@example.org", page: "", message: "x".repeat(MIN_MESSAGE) };

describe("validateContact", () => {
  it("accepts valid values and trims them", () => {
    const result = validateContact({ ...valid, name: "  Ada  " });
    assert.ok(result.success && result.data.name === "Ada");
  });

  it("reports each invalid field", () => {
    const result = validateContact({ ...valid, name: " ", email: "nope", message: "short" });
    assert.ok(!result.success);
    assert.deepEqual(result.errors, { name: true, email: true, message: true });
  });
});
