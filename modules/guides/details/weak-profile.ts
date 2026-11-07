import type { GuideDetail } from "../types";

export const weakProfileGuide: GuideDetail = {
  id: "weak-profile",
  summary: "A low CGPA, a study gap or no publications does not close every door. Committees look for evidence that you can do the work now.",
  why: "Many funders weigh research potential, projects and references next to grades. Your job is to give them that evidence and apply where it counts.",
  timeline: "Start 9-12 months ahead so you have time to build proof.",
  sections: [
    {
      heading: "Own the weakness briefly",
      items: [
        { title: "One honest sentence", detail: "Explain a low grade or gap in one or two factual lines in the SOP or an optional statement. No excuses, no long story." },
        { title: "Show the upward trend", detail: "Point to later semesters, final-year project or master's results that are stronger than the average." }
      ]
    },
    {
      heading: "Build proof that grades cannot show",
      items: [
        { title: "Projects and code", detail: "Finish one or two serious projects and publish them with a short write-up." },
        { title: "Courses and certificates", detail: "Complete recognised advanced courses and attach results only if they are verifiable." },
        { title: "Research contact", detail: "Work with a mentor, even remotely, and ask for a letter that describes what you did." }
      ]
    },
    {
      heading: "Choose where to apply",
      items: [
        { title: "Read the real rules", detail: "Check the minimum grade on each official page. Skip programmes with a hard cut-off you do not meet." },
        { title: "Use fit over rank", detail: "Professors with open positions and a close topic match often matter more than a famous name." }
      ]
    }
  ],
  mistakes: ["Hiding a gap and being asked about it later.", "Applying only to the most competitive programmes.", "Using the SOP to argue about grading unfairness."],
  checklist: ["Weakness stated in 1-2 lines", "Proof project finished", "Referee who knows my work", "Shortlist matches real minimums"],
  related: ["no-research-background", "sop", "reference-letter"]
};
