import type { GuideDetail } from "../../types";

export const coldEmailGuide: GuideDetail = {
  id: "cold-email",
  summary: "A cold email is a short, specific message to a professor to ask about a PhD or research position. It is often the first and most important step in many countries.",
  why: "Professors often decide on funded positions themselves. A good email gets you a reply, an interview or an internal recommendation.",
  timeline: "Start 6–10 months before the deadline. Send in batches of 5–10 and track replies.",
  sections: [
    {
      heading: "Before writing",
      items: [
        { title: "Check they are hiring", detail: "Look at the lab page for open positions, funding notes and recent student intake." },
        { title: "Read two recent papers", detail: "Be able to state one specific idea or question." },
        { title: "Find the official email", detail: "Copy it from the university page. Avoid guessed addresses." }
      ]
    },
    {
      heading: "Email structure (150–200 words)",
      items: [
        { title: "Subject", detail: "Specific: 'PhD application: sparse attention for medical text'." },
        { title: "Paragraph 1", detail: "Who you are and why you write, in one or two lines." },
        { title: "Paragraph 2", detail: "Your fit: a paper of theirs and your related work with one number." },
        { title: "Paragraph 3", detail: "What you ask: whether they have funded openings and if a short call is possible." },
        { title: "Attachments", detail: "CV as PDF. Optionally a 1-page research idea. Keep file size small." }
      ]
    },
    {
      heading: "After sending",
      items: [
        { title: "Follow up once", detail: "After 7–10 days reply on the same thread with two short lines." },
        { title: "Track everything", detail: "Date, reply, next step in a sheet. Use the tracker on the directory page." },
        { title: "Respond fast", detail: "If a professor replies, answer within a day." }
      ]
    }
  ],
  example: {
    label: "Short template",
    text: "Subject: PhD inquiry: efficient adaptation of vision models\n\nDear Professor [Name],\n\nI am [Name], a final-year BSc student at [University] working on [topic]. I read your paper \"[Title]\" and was interested in [specific point].\n\nIn my thesis I [one sentence with a result]. I believe this connects to your work on [topic].\n\nDo you expect funded PhD openings for [year]? If so, may I send more details or schedule a 15-minute call? My CV is attached.\n\nThank you for your time.\n[Name] | [Links]"
  },
  mistakes: ["Mass emails with 'Dear Sir/Madam'.", "Long autobiographies.", "Asking for a scholarship without any fit.", "Many follow-ups."],
  checklist: ["Lab hiring checked", "Two papers read", "Official email copied", "CV attached", "Tracker updated"],
  links: [{ label: "Email templates", href: "/professors" }],
  related: ["research-area", "cv", "interview-prep"]
};
