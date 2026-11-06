import type { GuideDetail } from "../types";

export const deadlinesTimelineGuide: GuideDetail = {
  id: "deadlines-timeline",
  summary: "A simple 12-month plan that shows when to do each task. Dates vary, so always confirm on the official pages.",
  why: "Applications fail from lateness more than from weak profiles. A calendar prevents that.",
  timeline: "Build your personal calendar the day you decide to apply.",
  sections: [
    {
      heading: "12 to 9 months before",
      items: [
        { title: "Research area and shortlist", detail: "Decide your area and shortlist countries and programs." },
        { title: "Book tests", detail: "Take IELTS or TOEFL early so you can retake if needed." }
      ]
    },
    {
      heading: "9 to 6 months before",
      items: [
        { title: "Professors", detail: "Build your professor list and send first emails." },
        { title: "Documents", detail: "Start CV, SOP and proposal. Request transcripts." }
      ]
    },
    {
      heading: "6 to 3 months before",
      items: [
        { title: "Referees", detail: "Ask for letters and send your packet." },
        { title: "Apply to early deadlines", detail: "Rolling and early posts first, usually in Europe." }
      ]
    },
    {
      heading: "3 to 0 months before",
      items: [
        { title: "Submit early", detail: "Aim to submit one week before the deadline." },
        { title: "Prepare for interviews", detail: "Practise research and technical questions." }
      ]
    },
    {
      heading: "After deadlines",
      items: [
        { title: "Compare offers", detail: "Check funding, supervisor and location." },
        { title: "Visa and travel", detail: "Start the visa as soon as you accept." }
      ]
    }
  ],
  mistakes: ["Waiting for 'one more paper'.", "Forgetting time zones.", "Submitting at the last hour."],
  checklist: ["Shared calendar", "Deadline sheet with portal links", "Reminders at 4 weeks and 1 week"],
  related: ["application-fee", "reference-letter", "cold-email"]
};
