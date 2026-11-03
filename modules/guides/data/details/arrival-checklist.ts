import type { GuideDetail } from "../../types";

export const arrivalChecklistGuide: GuideDetail = {
  id: "arrival-checklist",
  summary: "After the offer and visa, plan your move: housing, insurance, money and registration.",
  why: "The first weeks decide how quickly you start research. A short checklist avoids costly mistakes.",
  timeline: "Start 6–8 weeks before travel and finish within your first month.",
  sections: [
    {
      heading: "Before you travel",
      items: [
        { title: "Housing", detail: "Apply to university housing early, because it fills fast. Beware of advance payments to unknown landlords." },
        { title: "Insurance", detail: "Check whether your contract includes health cover. If not, buy the required plan." },
        { title: "Money", detail: "Carry enough for the first month until your first stipend or salary." },
        { title: "Documents", detail: "Carry originals of your passport, visa, offer, certificates and vaccination records." }
      ]
    },
    {
      heading: "After arrival",
      items: [
        { title: "Register", detail: "Register your address and residence permit as the country requires." },
        { title: "Bank account", detail: "Open a local account so your salary or stipend can be paid." },
        { title: "Meet your supervisor", detail: "Agree on goals for the first term and weekly meetings." },
        { title: "Join the community", detail: "Connect with student groups and the international office." }
      ]
    }
  ],
  mistakes: ["Paying a deposit to an unverified landlord.", "Arriving without insurance.", "Missing registration deadlines."],
  checklist: ["Housing confirmed", "Insurance active", "First-month funds", "Registration plan"],
  related: ["visa-interview", "offer-comparison", "scholarship-scams"]
};
