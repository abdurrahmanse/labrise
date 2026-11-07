import type { Table } from "../types";

export const choices = {
  criteria: [
    { name: "Research fit", weight: "35%", why: "Decides whether a supervisor wants you." },
    { name: "Funding certainty", weight: "25%", why: "A salaried post or confirmed scholarship, in writing." },
    { name: "Supervisor and lab culture", weight: "20%", why: "Student outcomes, recent papers and how the group works." },
    { name: "Country and visa route", weight: "10%", why: "Work rights, family rules and living costs." },
    { name: "Deadline and effort", weight: "10%", why: "Whether she could finish a strong application in time." }
  ],
  funnel: [
    { stage: "Long list", count: "30", rule: "Every group working on her topic in Germany, the Netherlands and Switzerland." },
    { stage: "After funding check", count: "12", rule: "Dropped groups with no funded post or unclear funding." },
    { stage: "After fit check", count: "6", rule: "Kept groups where she could write the one-sentence match honestly." },
    { stage: "Contacted", count: "4", rule: "Four supervisors who were hiring and replied to a first email." }
  ],
  scoring: {
    head: ["University", "Fit", "Funding", "Supervisor", "Visa and cost", "Deadline", "Total"],
    rows: [
      { cells: ["RWTH Aachen", "9", "9", "8", "8", "9", "8.8"], href: "/directory/universities/rwth-aachen" },
      { cells: ["University of Tübingen", "8", "9", "9", "8", "7", "8.4"], href: "/directory/universities/university-of-tubingen" },
      { cells: ["Heidelberg University", "7", "8", "8", "8", "8", "7.6"], href: "/directory/universities/heidelberg-university" },
      { cells: ["ETH Zurich", "9", "9", "9", "5", "6", "8.2"], href: "/directory/universities/eth-zurich" }
    ],
    note: "Scores are out of 10. Total = weighted by the criteria above. The numbers are invented; the method is what to copy."
  } satisfies Table,
  country: [
    "Germany: salaried PhD posts are common, so funding comes with the position.",
    "A researcher visa route exists after admission, and there is time to learn German.",
    "She kept two backups so one rejection did not end the plan."
  ]
};
