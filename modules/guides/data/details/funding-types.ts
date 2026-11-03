import type { GuideDetail } from "../../types";

export const fundingTypesGuide: GuideDetail = {
  id: "funding-types",
  summary: "Not every 'funded' offer is the same. Understand the main funding models so you can compare offers and avoid surprises.",
  why: "Funding decides your income, working rights, taxes and security. Knowing the types helps you choose realistic targets.",
  timeline: "Read this before shortlisting countries, around 8–12 months before applying.",
  sections: [
    {
      heading: "Main models",
      items: [
        { title: "Salaried PhD (employment)", detail: "Common in Germany, Switzerland, the Nordics and the Netherlands. You are an employee with salary, benefits and pension." },
        { title: "Stipend and tuition waiver", detail: "Common in the US and Canada through research or teaching assistantships. Often guaranteed for 4–5 years." },
        { title: "Government scholarships", detail: "MEXT, GKS, CSC, DAAD, Chevening and similar. Usually cover tuition, living allowance and sometimes travel." },
        { title: "Fellowships", detail: "University or external awards such as Vanier or Marie Curie. Prestigious and often more flexible." }
      ]
    },
    {
      heading: "Check these details",
      items: [
        { title: "Duration", detail: "How many years are guaranteed? What happens after?" },
        { title: "What is covered", detail: "Tuition, health insurance, housing, travel and visa costs." },
        { title: "Duties", detail: "Teaching or research assistant hours per week." },
        { title: "Cost of living", detail: "Compare the stipend to rent and food in the city." }
      ]
    }
  ],
  mistakes: ["Confusing 'partial scholarship' with full funding.", "Ignoring living costs.", "Accepting without written confirmation."],
  checklist: ["Funding model understood", "Duration confirmed in writing", "Insurance and fees checked", "Living costs estimated"],
  related: ["offer-comparison", "scholarship-scams", "visa-interview"]
};
