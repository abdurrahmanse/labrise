import type { GuideDetail } from "../../types";

export const githubPortfolioGuide: GuideDetail = {
  id: "github-portfolio",
  summary: "A tidy GitHub profile and a one-page personal site let professors verify your skills in minutes.",
  why: "Professors rarely have time to ask for proof. A link they can open shows your code quality and research interests.",
  timeline: "Spend a weekend cleaning up, then update after each project.",
  sections: [
    {
      heading: "GitHub",
      items: [
        { title: "Pin 3–4 best repositories", detail: "Choose research-style projects: a reproduction, a thesis project, a tool you built." },
        { title: "Write a real README", detail: "Problem, method, results table, how to run, and a short conclusion." },
        { title: "Make it reproducible", detail: "Include requirements, seeds and a script that recreates the main result." },
        { title: "Clean the profile", detail: "Real name, photo, short bio with your research area." }
      ]
    },
    {
      heading: "Personal page",
      items: [
        { title: "One page is enough", detail: "Short bio, research interests, projects with links, CV PDF and contact email." },
        { title: "Link everywhere", detail: "Add it to your CV, emails and SOP." }
      ]
    }
  ],
  mistakes: ["Empty or forked-only repositories.", "No README or results.", "Hard-coded local paths."],
  checklist: ["3 pinned projects", "READMEs with results", "Personal page live", "Links in CV"],
  related: ["publications", "cv", "cold-email"]
};
