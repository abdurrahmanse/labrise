import type { GuideDetail } from "../../types";

export const applicationFeeGuide: GuideDetail = {
  id: "application-fee",
  summary: "Application fees add up quickly. Plan a budget, hunt for waivers and apply to a focused list of programs.",
  why: "Fees, test costs and document services can reach hundreds of dollars. A plan avoids wasted money on weak-fit programs.",
  timeline: "Build the budget when you shortlist programs, 6–8 months before deadlines.",
  sections: [
    {
      heading: "Know the typical costs",
      items: [
        { title: "Application fees", detail: "Roughly $0 for many European PhD posts and about $75–$120 for many US applications. Check each program." },
        { title: "Test and score reports", detail: "IELTS/TOEFL fees plus extra score reports. GRE only where required." },
        { title: "Documents", detail: "Transcript issue, translation, courier and notarisation." }
      ]
    },
    {
      heading: "Reduce the cost",
      items: [
        { title: "Fee waivers", detail: "Many US departments offer waivers on request or for attending info sessions. Ask the graduate office." },
        { title: "Prioritise no-fee posts", detail: "Salaried PhD posts in Germany, Sweden, the Netherlands and Norway often have no application fee." },
        { title: "Limit the list", detail: "10–15 well-matched applications beat 40 generic ones." },
        { title: "Avoid agents", detail: "Never pay a middleman for admission or a scholarship." }
      ]
    }
  ],
  mistakes: ["Paying for scholarships.", "Applying everywhere without fit.", "Missing waiver deadlines.", "Not keeping receipts."],
  checklist: ["Budget sheet", "Waivers requested", "Receipts saved", "Payment confirmation emails kept"],
  related: ["scholarship-scams", "ielts", "deadlines-timeline"]
};
