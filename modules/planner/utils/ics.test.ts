import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applicationsToIcs } from "./ics";

const item = { id: "1", name: "DAAD, Master's", kind: "scholarship" as const, deadline: "2026-12-31", status: "planning" as const, note: "Ask referee" };

describe("applicationsToIcs", () => {
  const ics = applicationsToIcs([item], new Date(Date.UTC(2026, 0, 1, 12)));
  it("wraps events in a calendar", () => assert.ok(ics.startsWith("BEGIN:VCALENDAR") && ics.endsWith("END:VCALENDAR")));
  it("uses an all-day event ending the next day", () => assert.ok(ics.includes("DTSTART;VALUE=DATE:20261231") && ics.includes("DTEND;VALUE=DATE:20270101")));
  it("escapes commas in text", () => assert.ok(ics.includes("SUMMARY:Deadline: DAAD\\, Master's")));
  it("adds two reminders", () => assert.equal(ics.split("BEGIN:VALARM").length - 1, 2));
});
