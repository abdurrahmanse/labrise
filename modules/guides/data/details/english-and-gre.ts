import type { GuideDetail } from "../../types";

export const englishAndGreGuide: GuideDetail = {
  id: "english-and-gre",
  summary: "Besides IELTS and TOEFL, some programs ask for GRE or accept Duolingo. Know which tests you actually need.",
  why: "Skipping an unneeded test saves money. Skipping a required one blocks your application.",
  timeline: "Check requirements 8–10 months ahead. Many programs have made the GRE optional.",
  sections: [
    {
      heading: "Which test, when",
      items: [
        { title: "GRE General", detail: "Needed by some US programs. Many computer science programs no longer require it. Check each page." },
        { title: "Duolingo English Test", detail: "Accepted by some universities as a cheaper option. Confirm before taking it." },
        { title: "Waivers", detail: "Degrees taught in English or studies in English-speaking countries can waive language tests." }
      ]
    },
    {
      heading: "Plan",
      items: [
        { title: "Make a table", detail: "List each program with required and optional tests." },
        { title: "Pick the fewest tests", detail: "Choose the test that satisfies most programs." }
      ]
    }
  ],
  mistakes: ["Taking the GRE for programs that do not need it.", "Assuming Duolingo is accepted everywhere."],
  checklist: ["Test requirement table", "One main test chosen", "Waiver rules checked"],
  related: ["ielts", "toefl", "application-fee"]
};
