import type { Table } from "../types";

/** Indicative numbers: fees and times change every year, so check each official page. */
export const effort = {
  costs: {
    head: ["Item", "Indicative amount", "Notes"],
    rows: [
      { cells: ["IELTS Academic", "USD 200–260", "One attempt, score sent to each university"], href: "/guides/ielts" },
      { cells: ["Application fees", "USD 0", "She asked for waivers and chose programmes with no fee"], href: "/guides/application-fee" },
      { cells: ["Certified transcripts and attestation", "USD 40–90", "Copies, certification and courier"], href: "/guides/document-attestation" },
      { cells: ["Translation and scans", "USD 20–40", "Only where required"] },
      { cells: ["Visa fee and medical", "Check embassy page", "Varies by country and year"], href: "/guides/visa-interview" },
      { cells: ["Flight", "Check current prices", "Booked after the visa decision"] },
      { cells: ["First-month buffer", "About one month of costs", "Covers rent deposit before the first salary"], href: "/guides/budget-planning" }
    ],
    note: "She paid nothing to anyone for a place or a promise. Real funders and universities do not sell places."
  } satisfies Table,
  hours: {
    head: ["Phase", "Hours", "Where the time went"],
    rows: [
      { cells: ["Plan", "20", "Route, proof of skill, budget"] },
      { cells: ["Shortlist", "40", "Reading papers and group pages"] },
      { cells: ["Reach out", "25", "Emails, follow-ups, calls"] },
      { cells: ["Prepare", "90", "Documents, SOP, proposal, three drafts"] },
      { cells: ["Apply", "30", "Portals, receipts, interview practice"] },
      { cells: ["Decide and move", "25", "Comparison, acceptance, visa"] }
    ],
    note: "About 230 hours over 14 months, or roughly 4 hours a week. It is steady work, not a rush."
  } satisfies Table
};
