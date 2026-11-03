import type { GuideDetail } from "../../types";

export const ieltsGuide: GuideDetail = {
  id: "ielts",
  summary: "IELTS Academic is one of the main English tests accepted by universities worldwide. Many require an overall band of about 6.5–7.0.",
  why: "Without a valid score you cannot complete many applications or visas. Some universities waive it if your degree was taught in English, so check first.",
  timeline: "Book 2–3 months ahead. Study 6–8 weeks. Results arrive in about 3–13 days. Scores are valid for 2 years.",
  sections: [
    {
      heading: "Before you book",
      items: [
        { title: "Check requirements", detail: "Find the minimum overall and per-band score on each program page." },
        { title: "Check waivers", detail: "A medium-of-instruction letter or a degree taught in English can replace the test at some universities." },
        { title: "Choose Academic", detail: "IELTS Academic is the right version for university study." }
      ]
    },
    {
      heading: "Preparing",
      items: [
        { title: "Take a mock test", detail: "Use official practice material to see your weakest section." },
        { title: "Writing", detail: "Practise Task 1 (graph description) and Task 2 (essay) with feedback. Writing is where most applicants lose points." },
        { title: "Speaking", detail: "Record yourself, speak daily for 10–15 minutes and learn to extend answers." },
        { title: "Reading and Listening", detail: "Time yourself. Practise skimming and note-taking." }
      ]
    },
    {
      heading: "After the test",
      items: [
        { title: "Send scores", detail: "Order electronic score reports to your universities. Use correct institution names." },
        { title: "Retake if needed", detail: "Single-skill retakes may be available. Check current rules." }
      ]
    }
  ],
  mistakes: ["Booking too close to the deadline.", "Ignoring the per-band minimum.", "Practising only reading and listening.", "Memorised essay templates."],
  checklist: ["Required score confirmed", "Test date booked", "Mock test taken", "Score reports sent", "Validity covers the deadline"],
  links: [{ label: "IELTS official site", href: "https://ielts.org" }],
  related: ["toefl", "application-fee", "proof-letters"]
};
