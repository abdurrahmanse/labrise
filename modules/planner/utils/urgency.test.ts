import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { matchesFilter, plannerNumbers, urgencyOf } from "./urgency";
import type { PlannedApplication } from "../store/usePlanner";

const now = new Date(2026, 0, 10);
const app = (id: string, deadline: string, status: PlannedApplication["status"] = "planning"): PlannedApplication => ({ id, name: id, kind: "scholarship", deadline, status, note: "" });

describe("urgency", () => {
  it("marks past open deadlines overdue", () => assert.equal(urgencyOf(app("a", "2026-01-09"), now), "overdue"));
  it("marks deadlines within 14 days soon", () => assert.equal(urgencyOf(app("a", "2026-01-24"), now), "soon"));
  it("marks later deadlines later", () => assert.equal(urgencyOf(app("a", "2026-01-25"), now), "later"));
  it("treats submitted work as closed even when the date has passed", () => assert.equal(urgencyOf(app("a", "2025-12-01", "submitted"), now), "closed"));
  it("counts the numbers and finds the next open deadline", () => {
    const n = plannerNumbers([app("a", "2026-01-09"), app("b", "2026-02-01"), app("c", "2026-01-20"), app("d", "2026-01-12", "offer")], now);
    assert.deepEqual([n.total, n.overdue, n.soon, n.offers, n.next?.id], [4, 1, 1, 1, "c"]);
  });
  it("filters by status group", () => {
    assert.equal(matchesFilter(app("a", "2026-01-01", "preparing"), "open"), true);
    assert.equal(matchesFilter(app("a", "2026-01-01", "offer"), "open"), false);
    assert.equal(matchesFilter(app("a", "2026-01-01", "offer"), "offer"), true);
  });
});
