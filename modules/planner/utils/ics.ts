import type { PlannedApplication } from "../store/usePlanner";

const escapeText = (text: string) => text.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
const compact = (iso: string) => iso.replace(/-/g, "");

/** The day after an ISO date, as YYYYMMDD. All-day events end on the next day. */
function nextDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + 1));
  return date.toISOString().slice(0, 10).replace(/-/g, "");
}

const alarm = (days: number) =>
  ["BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:Application deadline", `TRIGGER:-P${days}D`, "END:VALARM"];

/** An iCalendar file with one all-day event per application, with reminders 7 days and 1 day before. */
export function applicationsToIcs(items: PlannedApplication[], stamp = new Date()): string {
  const dtstamp = stamp.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const events = items.flatMap((a) => [
    "BEGIN:VEVENT",
    `UID:${a.id}@labrise`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;VALUE=DATE:${compact(a.deadline)}`,
    `DTEND;VALUE=DATE:${nextDay(a.deadline)}`,
    `SUMMARY:${escapeText(`Deadline: ${a.name}`)}`,
    ...(a.note ? [`DESCRIPTION:${escapeText(a.note)}`] : []),
    ...alarm(7),
    ...alarm(1),
    "END:VEVENT"
  ]);
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Labrise//Planner//EN", "CALSCALE:GREGORIAN", ...events, "END:VCALENDAR"].join("\r\n");
}
