import type { GuideDetail } from "../types";

export const afterAcceptanceGuide: GuideDetail = {
  id: "after-acceptance",
  summary: "An offer is not the finish line. Deadlines for acceptance, enrolment and visa come quickly and each has its own papers.",
  why: "Missing the acceptance deadline or a visa document can cancel an offer. A short ordered plan keeps everything on time.",
  timeline: "Begin the day you receive the result.",
  sections: [
    {
      heading: "First week",
      items: [
        { title: "Confirm the offer", detail: "Read the letter for funding, start date and conditions. Reply by the stated date and keep the email." },
        { title: "Ask questions", detail: "Ask in writing about stipend start, contract type, housing and insurance if they are not clear." }
      ]
    },
    {
      heading: "Next weeks",
      items: [
        { title: "Enrolment papers", detail: "Send final degree, transcripts and any attested or translated documents the university lists." },
        { title: "Visa and permit", detail: "Check the embassy page for the current process and book the earliest slot." },
        { title: "Money and housing", detail: "Use the budget guide and housing guide to plan the first month." }
      ]
    },
    {
      heading: "Close the loop",
      items: [
        { title: "Decline politely", detail: "Inform other universities you will not join, so they can free the place." },
        { title: "Thank people", detail: "Update referees and professors who helped you." }
      ]
    }
  ],
  mistakes: ["Waiting for a better offer past the deadline without asking.", "Starting the visa after documents expire.", "Forgetting to decline other offers."],
  checklist: ["Offer confirmed in writing", "Enrolment documents sent", "Visa started", "Housing and money planned"],
  related: ["offer-comparison", "visa-interview", "housing-and-insurance", "budget-planning"]
};
