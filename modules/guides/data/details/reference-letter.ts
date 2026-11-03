import type { GuideDetail } from "../../types";

export const referenceLetterGuide: GuideDetail = {
  id: "reference-letter",
  summary: "Reference (recommendation) letters are written by people who know your work. Most programs ask for two or three.",
  why: "Letters give committees an outside view of your research ability. A strong letter from an active researcher often carries more weight than grades.",
  timeline: "Ask at least 6–8 weeks before the first deadline and send reminders one week before each one.",
  sections: [
    {
      heading: "Choosing referees",
      items: [
        { title: "Prefer research supervisors", detail: "Thesis supervisors, lab heads and internship mentors who saw your research are best." },
        { title: "Mix of voices", detail: "Two academics and, if useful, one industry or lab mentor. Avoid family friends or only a class teacher." },
        { title: "Ask directly", detail: "Ask: 'Can you write a strong letter for my PhD applications?' If they hesitate, choose someone else." }
      ]
    },
    {
      heading: "Making it easy for them",
      items: [
        { title: "Send a packet", detail: "CV, SOP draft, transcript, list of universities with deadlines and portal links, and a short note on what you worked on with them." },
        { title: "Register referees in portals", detail: "Enter correct names and institutional emails. Many portals email the referee a link." },
        { title: "Follow up politely", detail: "Remind one week before each deadline and thank them after." }
      ]
    }
  ],
  mistakes: ["Asking at the last minute.", "Using a personal email for the referee.", "Choosing a famous name who barely knows you.", "Forgetting to waive access rights when a portal asks."],
  checklist: ["2–3 referees confirmed", "Packet sent", "Deadlines in a shared sheet", "Reminders scheduled", "Thank-you notes sent"],
  related: ["cv", "sop", "application-fee"]
};
