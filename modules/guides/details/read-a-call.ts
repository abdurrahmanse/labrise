import type { GuideDetail } from "../types";

export const readACallGuide: GuideDetail = {
  id: "read-a-call",
  summary: "A scholarship announcement hides the rules that decide whether you can apply. Read it in a fixed order and save the answers.",
  why: "Most rejected applications fail on eligibility or missing documents, not on quality. Reading the call carefully prevents that.",
  timeline: "Do this the day you find a scholarship, before any writing.",
  sections: [
    {
      heading: "Confirm the source",
      items: [
        { title: "Official page only", detail: "Open the funder or university page. Treat posts, videos and agents as pointers, not proof." },
        { title: "Check the cycle", detail: "Make sure the call is for the intake you want and not an old year." }
      ]
    },
    {
      heading: "Extract the rules",
      items: [
        { title: "Eligibility", detail: "Citizenship, degree level, grade, work experience, age or language rules. Tick each one honestly." },
        { title: "Coverage", detail: "Tuition, stipend, travel, insurance, family support. Write what is and is not covered." },
        { title: "Selection and dates", detail: "Stages, interviews, decision date and the exact deadline with its time zone." }
      ]
    },
    {
      heading: "Plan the submission",
      items: [
        { title: "Documents", detail: "List each document, who issues it and how long it takes." },
        { title: "Process", detail: "Online portal, university route or email to a supervisor first. Write the order of steps." }
      ]
    }
  ],
  mistakes: ["Trusting a summary instead of the official call.", "Missing the time zone of the deadline.", "Starting writing before checking eligibility."],
  checklist: ["Official page opened", "Eligibility ticked", "Coverage and dates noted", "Document list made"],
  related: ["application-portals", "deadlines-timeline", "scholarship-scams"]
};
