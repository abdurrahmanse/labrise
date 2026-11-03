import type { GuideDetail } from "../../types";

export const researchProposalGuide: GuideDetail = {
  id: "research-proposal",
  summary: "A research proposal outlines the problem you want to study and how. Many European PhD programs and some master's by research require one.",
  why: "It shows you can think independently, plan a project and judge what is feasible. It also lets a professor see if your idea matches their funding.",
  timeline: "Allow 4–6 weeks. Start with a 1-page version for emails, then expand to the full proposal.",
  sections: [
    {
      heading: "Sections to include",
      items: [
        { title: "Title and summary", detail: "A clear working title and a 150-word summary of the problem, approach and expected result." },
        { title: "Background and motivation", detail: "What is known, what is missing, why it matters. Cite 8–15 key papers." },
        { title: "Research questions", detail: "2–3 concrete, testable questions. Avoid broad aims." },
        { title: "Method", detail: "Data, models, experiments, evaluation metrics and baselines. Be realistic about compute." },
        { title: "Work plan", detail: "A timeline by semester or year with milestones and expected outputs such as papers." },
        { title: "Expected contribution and risks", detail: "What you will have shown at the end and your fallback if the main idea fails." },
        { title: "References", detail: "Consistent citation style." }
      ]
    },
    {
      heading: "Making it credible",
      items: [
        { title: "Fit the lab", detail: "Connect to the professor's work and available data or tools." },
        { title: "Show a pilot", detail: "A small experiment or prototype you already ran proves feasibility." },
        { title: "Stay flexible", detail: "State that you are open to adjusting the topic with your supervisor." }
      ]
    }
  ],
  example: { label: "Research question", text: "RQ1: Does test-time adaptation reduce accuracy loss of chest X-ray classifiers under hospital shift? RQ2: Which adaptation signal is most reliable without labels?" },
  mistakes: ["Topic too large for a PhD.", "No literature or outdated citations.", "No evaluation plan.", "Ignoring the lab's actual research."],
  checklist: ["Clear questions", "8–15 relevant references", "Timeline by semester", "Pilot result or plan", "Length matches the call"],
  related: ["research-area", "sop", "cold-email"]
};
