import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { FAQItem } from "@/data/types";
import { filterFaqs } from "./filterFaqs";

const faq = (id: string, category: FAQItem["category"], question: string, answer = "a", tags: string[] = []): FAQItem => ({ id, category, question, answer, tags });
const faqs = [
  faq("1", "Funding & Finance", "Is IELTS needed?", "Depends", ["language"]),
  faq("2", "Eligibility & Tests", "What GPA do I need?", "Usually 3.0"),
  faq("3", "Funding & Finance", "Can I get a stipend?", "Yes")
];

describe("filterFaqs", () => {
  it("returns everything for All and an empty search", () => assert.equal(filterFaqs(faqs, "All", "  ").length, 3));
  it("filters by category", () => assert.deepEqual(filterFaqs(faqs, "Funding & Finance", "").map((f) => f.id), ["1", "3"]));
  it("searches question, answer and tags, ignoring case", () => {
    assert.deepEqual(filterFaqs(faqs, "All", "ielts").map((f) => f.id), ["1"]);
    assert.deepEqual(filterFaqs(faqs, "All", "USUALLY").map((f) => f.id), ["2"]);
    assert.deepEqual(filterFaqs(faqs, "All", "language").map((f) => f.id), ["1"]);
  });
  it("combines category and search", () => assert.deepEqual(filterFaqs(faqs, "Funding & Finance", "stipend").map((f) => f.id), ["3"]));
});
