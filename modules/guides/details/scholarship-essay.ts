import type { GuideDetail } from "../types";

export const scholarshipEssayGuide: GuideDetail = {
  id: "scholarship-essay",
  summary: "Many scholarships ask for an essay about goals, leadership or impact in addition to a research SOP. It answers a different question.",
  why: "Selectors read many essays. A clear prompt-focused story with results and a plan stands out more than general praise.",
  timeline: "Write the first draft 6-8 weeks before the deadline and leave time for feedback.",
  sections: [
    {
      heading: "Understand the prompt",
      items: [
        { title: "Underline the verbs", detail: "Words such as describe, explain or reflect set the structure. Answer each part." },
        { title: "Check limits", detail: "Respect word count and format exactly. Going over can disqualify the essay." }
      ]
    },
    {
      heading: "Build the essay",
      items: [
        { title: "One main story", detail: "Use one specific example with what you did, what changed and what you learned." },
        { title: "Link to the funder", detail: "Read the scholarship's mission and show honestly how your plan fits it." },
        { title: "Future plan", detail: "State what you will do after the award in concrete terms." }
      ]
    },
    {
      heading: "Finish well",
      items: [
        { title: "Cut and polish", detail: "Remove generic lines. Read aloud and ask someone to check clarity and grammar." },
        { title: "Keep it original", detail: "Write it yourself. Do not copy samples or use text you cannot defend in an interview." }
      ]
    }
  ],
  mistakes: ["Repeating the CV in paragraphs.", "Reusing one essay for every prompt without edits.", "Vague claims with no example."],
  checklist: ["Prompt answered part by part", "One strong story with results", "Funder mission referenced", "Word limit and format met"],
  related: ["sop", "interview-prep", "scholarship-scams"]
};
