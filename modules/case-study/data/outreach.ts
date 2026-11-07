import type { EmailMessage, Table } from "../types";

/** Professors here are fictional. Real emails must be copied only from a person's official university page. */
export const outreach = {
  rules: [
    "Write only to groups that are hiring, with one email per professor.",
    "Keep it under 200 words, specific and honest, with the CV attached as a PDF.",
    "Follow up once after 10–14 days. Never send the same email to many people.",
    "Use the professor's official address from the university page."
  ],
  first: {
    subject: "PhD enquiry: self-supervised learning for retina images (Rahman)",
    to: "Prof. M. Keller (fictional), RWTH Aachen",
    sent: "Day 1",
    body: [
      "Dear Professor Keller,",
      "I am Tania Rahman, an MSc graduate in Computer Science from Dhaka. I am writing about a PhD position in your group, because your 2025 paper on self-supervised pre-training for small medical datasets matches my thesis.",
      "My thesis trained a segmentation model on 400 labelled retina images, reaching a Dice score of 0.86 using contrastive pre-training. Code and results are public at the link below, and a preprint with my mentor is online.",
      "I would like to extend this to robustness across scanners, which your paper lists as an open question. I have attached my CV and a one-page summary of a proposed project.",
      "Do you have a funded position for the September 2027 intake, and would you be open to a short call?",
      "Thank you for your time.",
      "Tania Rahman · Dhaka, Bangladesh · link to code and preprint"
    ],
    notes: [
      { part: "Subject line", why: "Names the topic and the sender, so it is easy to find later." },
      { part: "Opening", why: "Shows she read a specific paper, not just the lab's homepage." },
      { part: "Evidence", why: "One result with a number and a public link that can be checked." },
      { part: "Proposal", why: "Connects her work to a question the professor has already raised." },
      { part: "Ask", why: "A single clear question about funding and a short call." }
    ]
  } satisfies EmailMessage,
  followUp: {
    subject: "Re: PhD enquiry: self-supervised learning for retina images (Rahman)",
    to: "Prof. M. Keller (fictional)",
    sent: "Day 12",
    body: [
      "Dear Professor Keller,",
      "I am following up once on my email below. I have since added a robustness experiment to my repository, which may help when you decide whether a call is useful.",
      "I understand if you have no open position this year. Thank you for considering it.",
      "Best regards, Tania Rahman"
    ],
    notes: [{ part: "Tone", why: "Short, polite and adds something new instead of just asking again." }]
  } satisfies EmailMessage,
  reply: {
    summary: "Professor Keller replied on day 15: a funded post was open, and he asked for a 30-minute call and a two-page proposal.",
    next: "She sent the proposal the same week, then prepared for the call by rereading his last three papers."
  },
  accept: {
    subject: "Acceptance: doctoral position starting 1 September 2027",
    to: "Prof. M. Keller (fictional)",
    sent: "Two days after the offer",
    body: [
      "Dear Professor Keller,",
      "Thank you very much for the offer of the doctoral position. I am delighted to accept it.",
      "I confirm the start date of 1 September 2027 and the 36-month contract as described in your letter. I will send my certified degree documents this week and begin the visa process now.",
      "Could you let me know who in your group can help with housing and registration for new international students?",
      "With many thanks, Tania Rahman"
    ],
    notes: [
      { part: "In writing", why: "An acceptance by email creates a record before any call or contract." },
      { part: "Terms repeated", why: "Restating dates and contract length catches misunderstandings early." },
      { part: "Next steps", why: "Names her actions and asks one practical question." }
    ]
  } satisfies EmailMessage,
  decline: {
    subject: "Declining the offer: thank you",
    to: "Prof. L. Brandt (fictional)",
    sent: "Same day she accepted",
    body: [
      "Dear Professor Brandt,",
      "Thank you for the generous offer and for the time you gave me in our call. After careful thought I have accepted another position whose topic is closer to my thesis, so I must decline.",
      "I enjoyed learning about your group's work and hope our paths cross again at a conference. Thank you for your support.",
      "Kind regards, Tania Rahman"
    ],
    notes: [
      { part: "Prompt", why: "Declining quickly frees the place for another student." },
      { part: "Honest and short", why: "A brief true reason is enough, without criticising anyone." },
      { part: "Door open", why: "The academic world is small; leave on good terms." }
    ]
  } satisfies EmailMessage,
  tracker: {
    head: ["Professor", "University", "Sent", "Reply", "Outcome"],
    rows: [
      { cells: ["Prof. M. Keller (fictional)", "RWTH Aachen", "Day 1", "Day 15", "Call, then formal offer"] },
      { cells: ["Prof. L. Brandt (fictional)", "University of Tübingen", "Day 2", "Day 9", "Call, then offer"] },
      { cells: ["Prof. S. Wagner (fictional)", "Heidelberg University", "Day 3", "No reply", "Followed up once, then closed"] },
      { cells: ["Prof. D. Meier (fictional)", "ETH Zurich", "Day 4", "Day 6", "No open post this year"] }
    ],
    note: "Two of four replied with interest. That is a good result. Silence after one follow-up means move on."
  } satisfies Table
};
