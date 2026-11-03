import type { GuideDetail } from "../../types";

export const publicationsGuide: GuideDetail = {
  id: "publications",
  summary: "A first publication or preprint is not required, but it is one of the strongest signals in a funded PhD application.",
  why: "It proves you can finish research and write it up. Committees often treat even a workshop paper as strong evidence.",
  timeline: "Plan 6–12 months. Start as soon as you have a project with results.",
  sections: [
    {
      heading: "Ways to get a first output",
      items: [
        { title: "Workshop paper", detail: "Workshops at major conferences accept shorter papers and early results. Check calls on the conference sites." },
        { title: "arXiv preprint", detail: "Post a clear write-up with code. Anyone can read it, and professors can see your work before emailing." },
        { title: "Reproducibility report", detail: "Reproduce a published paper and document differences. Some venues and challenges accept these." },
        { title: "Co-authorship", detail: "Join a lab project as a junior author. Ask your thesis supervisor." }
      ]
    },
    {
      heading: "Make it solid",
      items: [
        { title: "One clear claim", detail: "State what is new, compare with strong baselines and report variance across runs." },
        { title: "Release code", detail: "Share a clean repository with instructions to reproduce your tables." },
        { title: "Get feedback early", detail: "Ask a supervisor or senior student to review before submission." }
      ]
    }
  ],
  mistakes: ["Listing papers that are only planned.", "Paying predatory venues.", "Weak baselines or missing details."],
  checklist: ["Project with results", "Target workshop identified", "Preprint draft", "Code repository public"],
  related: ["github-portfolio", "cv", "research-proposal"]
};
