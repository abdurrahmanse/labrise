import type { GuideDetail } from "../../types";

export const budgetPlanningGuide: GuideDetail = {
  id: "budget-planning",
  summary: "Even a fully funded offer has first-month and hidden costs. Plan the numbers before you accept.",
  why: "Stipends arrive after you start, and setup costs come first. A simple budget prevents stress and bad decisions.",
  timeline: "Draft the budget when you compare offers, then update it before you travel.",
  sections: [
    {
      heading: "Costs before you arrive",
      items: [
        { title: "Application costs", detail: "Fees, tests, score reports, transcripts, translations and courier." },
        { title: "Visa and travel", detail: "Visa fee, medical checks if required, flights and first accommodation deposit." },
        { title: "Insurance", detail: "Check whether the contract includes health cover. If not, price the required plan." }
      ]
    },
    {
      heading: "Compare offers with real numbers",
      items: [
        { title: "Monthly income", detail: "Use the amount after tax and social contributions, from the offer letter." },
        { title: "Monthly costs", detail: "Rent, food, transport, phone and insurance for the city, from official or university housing pages." },
        { title: "First-month buffer", detail: "Plan to cover about one month of costs before the first payment arrives." }
      ]
    }
  ],
  mistakes: ["Comparing gross salary with a tax-free stipend.", "Ignoring rent in expensive cities.", "Arriving without money for the first month."],
  checklist: ["Pre-arrival costs listed", "Net income confirmed", "Monthly costs estimated", "First-month buffer ready"],
  related: ["funding-types", "offer-comparison", "arrival-checklist"]
};
