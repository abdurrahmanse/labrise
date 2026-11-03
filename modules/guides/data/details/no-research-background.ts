import type { GuideDetail } from "../../types";

export const noResearchBackgroundGuide: GuideDetail = {
  id: "no-research-background",
  summary: "If you have no research experience yet, you can still build a credible profile in 6–12 months.",
  why: "Many applicants start without a lab. Committees respond to clear evidence of research ability, however it was gained.",
  timeline: "Give yourself 6–12 months before you start applying.",
  sections: [
    {
      heading: "Build evidence",
      items: [
        { title: "Reproduce papers", detail: "Pick 2 papers in your area, re-run them and write a short report with your results." },
        { title: "Do a small original project", detail: "Test one question on public data. Document the question, method and result." },
        { title: "Ask for a thesis or project with a professor", detail: "Offer to help a lab with data work, experiments or writing. Even volunteer work counts." },
        { title: "Apply for research internships", detail: "Look for remote and summer research programs at universities and institutes." }
      ]
    },
    {
      heading: "Strengthen the rest",
      items: [
        { title: "Earn a reference", detail: "A professor who watched you work is worth more than a stronger name who barely knows you." },
        { title: "Take a research master's", detail: "If time allows, a funded research master's builds the profile for a PhD." },
        { title: "Be honest in your SOP", detail: "Explain what you did, what you learned and why you want to research." }
      ]
    }
  ],
  mistakes: ["Waiting for a perfect opportunity.", "Claiming research you did not do.", "Applying to top labs only."],
  checklist: ["Two reproduced papers", "One small project", "Supervisor or mentor found", "Writing sample ready"],
  related: ["publications", "github-portfolio", "master-vs-phd"]
};
