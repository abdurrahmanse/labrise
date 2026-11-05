import type { ProfileItem } from "../types/overview";

export const profileChecklist: ProfileItem[] = [
  { title: "Strong grades", detail: "Top of your class helps; a clear upward trend also works.", priority: "Must have" },
  { title: "Math and core engineering foundation", detail: "Calculus, linear algebra, differential equations, probability and the core courses of your field.", priority: "Must have" },
  { title: "Research experience", detail: "A thesis, project or internship with real results.", priority: "Must have" },
  { title: "Clear research direction", detail: "One topic you can explain in two sentences.", priority: "Must have" },
  { title: "Publication or preprint", detail: "A conference or journal paper, or a public preprint; not required, but it stands out.", priority: "Strong plus" },
  { title: "Open, repeatable work", detail: "Public code, data or design files with clear notes and reproducible results.", priority: "Strong plus" },
  { title: "Academic recommenders", detail: "2–3 people who know your research work.", priority: "Must have" },
  { title: "English test", detail: "IELTS or TOEFL; some universities waive it.", priority: "Must have" },
  { title: "Statement of purpose", detail: "Specific to each lab, never a generic copy.", priority: "Must have" },
  { title: "Awards, TA or teaching", detail: "Supports your story, never replaces research.", priority: "Bonus" }
];
