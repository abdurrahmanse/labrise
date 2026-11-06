import type { GuideDetail } from "../types";

export const githubPortfolioGuide: GuideDetail = {
  id: "github-portfolio",
  summary: "A short project portfolio and a one-page personal site let professors check your work in minutes.",
  why: "Professors rarely have time to ask for proof. A link they can open shows the quality of your work and your research interests.",
  timeline: "Spend a weekend cleaning up, then update after each project.",
  sections: [
    {
      heading: "Project portfolio",
      items: [
        { title: "Pick 3–4 best projects", detail: "Choose research-style projects: a thesis, a reproduction of a published result, a prototype or a design you tested." },
        { title: "Write a short project page", detail: "Problem, method, key figure or results table, your own contribution and what you would do next." },
        { title: "Make it repeatable", detail: "Share the data, code or design files, the settings you used and a note on how to recreate the main result." },
        { title: "Use a permanent home", detail: "Put code on GitHub and data or design files on a repository such as Zenodo that gives a permanent link." }
      ]
    },
    {
      heading: "Personal page",
      items: [
        { title: "One page is enough", detail: "Short bio, research interests, projects with links, CV PDF, ORCID and contact email." },
        { title: "Link everywhere", detail: "Add it to your CV, emails and statement of purpose." }
      ]
    }
  ],
  mistakes: ["Empty projects with no results.", "Broken or login-only links.", "Hard-coded local paths in shared code."],
  checklist: ["3 documented projects", "Results on every page", "Personal page live", "Links in CV"],
  related: ["publications", "cv", "cold-email"]
};
