import type { GuideDetail } from "../types";

export const sopGuide: GuideDetail = {
  id: "sop",
  summary: "The Statement of Purpose explains who you are as a researcher, what you have done and why you want to work in this particular lab.",
  why: "It is the main place where a committee sees your thinking and fit. A specific, honest SOP often decides between similar candidates.",
  timeline: "Write a first draft 3 months before the deadline. Plan 4–6 revisions and one tailored version per university.",
  sections: [
    {
      heading: "Structure (about 1–2 pages)",
      items: [
        { title: "Opening: your question", detail: "Start with the research problem that drives you, not your childhood. One short paragraph." },
        { title: "Past work", detail: "Pick 2 projects. For each: the problem, what you did, what you learned. Link them to your future direction." },
        { title: "Why this lab", detail: "Name 1–2 professors and 1–2 papers. Say what you would add or extend. This paragraph changes for each university." },
        { title: "Plan and goals", detail: "What you plan to study in the first two years and what you want to do afterwards." },
        { title: "Closing", detail: "Short and confident. Mention funding or visa only if the application asks." }
      ]
    },
    {
      heading: "Quality checks",
      items: [
        { title: "Specificity", detail: "Every claim should be supported by a project, number or paper." },
        { title: "Tone", detail: "Plain, confident English. No flattery, no clichés about changing the world." },
        { title: "Fit", detail: "Replace the university name with another. If the SOP still works, it is too generic." },
        { title: "Length and format", detail: "Respect word limits and portal rules exactly." }
      ]
    }
  ],
  example: { label: "Strong paragraph", text: "Your 2024 paper on sparse attention for long documents raised a question I explored in my thesis: can the same idea cut memory for medical reports? I reproduced your results on two datasets and extended them to a clinical corpus, reaching 4x lower memory with a 1.2-point drop in ROUGE. I would like to study this trade-off systematically in your group." },
  mistakes: ["One generic SOP sent to every university.", "Retelling your CV as prose.", "Quoting famous people.", "Going over the word limit.", "Mentioning money as the main reason."],
  checklist: ["Tailored lab paragraph per application", "Two projects with results", "Read aloud once", "Checked by a professor or senior", "Within word limit"],
  related: ["research-proposal", "cv", "reference-letter"]
};
