import type { GuideDetail } from "../../types";

export const offerComparisonGuide: GuideDetail = {
  id: "offer-comparison",
  summary: "When offers arrive, compare them on facts, not on the university name alone.",
  why: "Your supervisor, funding and city shape your next 4–5 years. A structured comparison prevents regret.",
  timeline: "You usually have a few weeks to decide. Some regions have common reply dates.",
  sections: [
    {
      heading: "Compare",
      items: [
        { title: "Funding", detail: "Stipend or salary after tax versus local costs; length of guarantee." },
        { title: "Supervisor", detail: "Talk to current students about supervision style, authorship and time to graduation." },
        { title: "Research fit", detail: "Resources, compute, collaborators and publication record of the lab." },
        { title: "Location and life", detail: "Language, housing, family, safety and visa options." },
        { title: "Career outcomes", detail: "Where do graduates work after the PhD?" }
      ]
    },
    {
      heading: "Decide",
      items: [
        { title: "Ask questions in writing", detail: "Clarify any unclear funding or duties before accepting." },
        { title: "Reply on time", detail: "Decline other offers politely so others can use the slot." }
      ]
    }
  ],
  mistakes: ["Choosing only by ranking.", "Not speaking to current students.", "Accepting verbal promises."],
  checklist: ["Offer terms in writing", "Student contacts spoken to", "Pros and cons sheet", "Reply sent before deadline"],
  related: ["funding-types", "visa-interview", "interview-prep"]
};
