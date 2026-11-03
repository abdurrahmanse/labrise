import type { GuideDetail } from "../../types";

export const gradeConversionGuide: GuideDetail = {
  id: "grade-conversion",
  summary: "Different countries grade differently. Present your grades with context so evaluators read them correctly.",
  why: "A 3.2 or a 70% may be excellent in your system. Without context, evaluators may misread it.",
  timeline: "Prepare when you request transcripts, 2–3 months before deadlines.",
  sections: [
    {
      heading: "Give context",
      items: [
        { title: "State the scale", detail: "Write grades as 'CGPA 3.6/4.0' or '78%'. Never give a number without its scale." },
        { title: "Add rank or percentile", detail: "For example 'top 5% of 120 students'. Ask your department for an official statement." },
        { title: "Attach the grading key", detail: "Many universities provide a page explaining their scale and pass marks." }
      ]
    },
    {
      heading: "Conversion tools",
      items: [
        { title: "Use official guidance", detail: "Many European programs publish conversion rules, for example for the German system. Follow their method." },
        { title: "Evaluation services", detail: "Some US programs ask for WES or ECE evaluation. Do it only when the program requires it." },
        { title: "Do not invent equivalents", detail: "Do not convert yourself unless the application asks. Give the original with context." }
      ]
    }
  ],
  mistakes: ["Converting grades yourself to a higher number.", "Omitting the scale.", "Paying for evaluation when it is not required."],
  checklist: ["Scale stated", "Rank letter requested", "Grading key attached", "Evaluation only if required"],
  related: ["proof-letters", "cv", "application-fee"]
};
