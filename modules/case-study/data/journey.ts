import type { Phase, Step, Table } from "../types";

export const journey = {
  funding: {
    head: ["Source", "What it covers", "Status"],
    rows: [
      { cells: ["Salaried PhD post (RWTH Aachen)", "Monthly salary with social insurance, no tuition", "Offer, accepted"], href: "/directory/universities/rwth-aachen", file: "offer-letter" },
      { cells: ["DAAD scholarship", "Stipend, insurance and travel allowance", "Selected as backup"], href: "/directory/scholarships/daad-scholarships" },
      { cells: ["Tübingen salaried post", "Salary, no tuition", "Offer, declined"], href: "/directory/universities/university-of-tubingen" }
    ],
    note: "She secured funding in writing before accepting anything. A verbal promise is not funding."
  } satisfies Table,
  phases: [
    { id: "plan", name: "Plan", from: 14, to: 12, summary: "Route, proof of skill, budget" },
    { id: "shortlist", name: "Shortlist", from: 11, to: 10, summary: "Long list, funding and fit checks" },
    { id: "reach", name: "Reach out", from: 9, to: 8, summary: "Emails, calls and replies" },
    { id: "prepare", name: "Prepare", from: 7, to: 6, summary: "Certified papers, SOP, proposal" },
    { id: "apply", name: "Apply", from: 5, to: 4, summary: "Submit early, interviews" },
    { id: "decide", name: "Decide", from: 3, to: 3, summary: "Compare and accept in writing" },
    { id: "move", name: "Move", from: 2, to: 1, summary: "Visa, money, housing" }
  ] satisfies Phase[],
  timeline: [
    { monthsBefore: 14, title: "Chose the area and the route", detail: "Picked computer vision for medical images and a PhD over a second Master's.", output: "One-page decision note", guide: "/guides/master-vs-phd", guideLabel: "Master's or PhD?" },
    { monthsBefore: 13, title: "Built proof of skill", detail: "Published code and a preprint, so claims could be checked.", output: "Public repository and preprint", guide: "/guides/publications", guideLabel: "First publication" },
    { monthsBefore: 12, title: "Planned the budget and booked IELTS", detail: "Listed every cost before arrival and booked the test once.", output: "Budget sheet and a test date", guide: "/guides/budget-planning", guideLabel: "Budget and costs" },
    { monthsBefore: 11, title: "Built the long list", detail: "Thirty groups from the directory, then funding and fit checks.", output: "30 groups cut to 6", guide: "/guides/research-area", guideLabel: "Research area" },
    { monthsBefore: 10, title: "Read each call", detail: "Ticked eligibility and dates for every programme.", output: "Eligibility sheet per programme", guide: "/guides/read-a-call", guideLabel: "Read a call" },
    { monthsBefore: 9, title: "Emailed professors", detail: "Four first emails, one follow-up each.", output: "2 replies, 2 calls booked", guide: "/guides/cold-email", guideLabel: "Cold email" },
    { monthsBefore: 7, title: "Started certified documents", detail: "Transcripts, attestation and grade context letter.", output: "Certified copies requested", guide: "/guides/bangladesh-applicants", guideLabel: "Applying from Bangladesh" },
    { monthsBefore: 6, title: "Wrote and revised", detail: "SOP and proposal, three drafts each, reviewed by two people.", output: "Final SOP and proposal", guide: "/guides/sop", guideLabel: "SOP guide" },
    { monthsBefore: 5, title: "Submitted early", detail: "A week before each deadline, with receipts saved.", output: "Submission receipts", guide: "/guides/application-portals", guideLabel: "Application portals" },
    { monthsBefore: 4, title: "Interviews", detail: "A call with two professors and a panel interview.", output: "Interview notes", guide: "/guides/interview-prep", guideLabel: "Interview prep" },
    { monthsBefore: 3, title: "Compared offers and accepted", detail: "Used a written comparison and replied before the date.", output: "Signed acceptance", guide: "/guides/offer-comparison", guideLabel: "Compare offers" },
    { monthsBefore: 2, title: "Embassy appointment, visa interview and housing", detail: "Booked the slot the week she accepted, passed a short embassy interview and arranged first-month housing.", output: "Visa approved, first-month housing", guide: "/guides/visa-interview", guideLabel: "Visa guide" }
  ] satisfies Step[],
  interview: [
    { q: "Explain your thesis in two minutes.", a: "Problem, method, one result with a number, and the open question." },
    { q: "Why this lab and not another?", a: "Named two papers and the data access only this group has." },
    { q: "What would you do in year one?", a: "Reproduce the baseline, then run the cross-site experiment from her proposal." },
    { q: "What is your weakest area?", a: "Writing speed for journals; she described a weekly writing habit." }
  ],
  results: {
    head: ["Application", "Result", "What she learned"],
    rows: [
      { cells: ["RWTH Aachen, PhD post", "Offer, accepted", "Best match and funded post"], href: "/directory/universities/rwth-aachen" },
      { cells: ["University of Tübingen, PhD post", "Offer, declined", "Good group, weaker topic fit"], href: "/directory/universities/university-of-tubingen" },
      { cells: ["Heidelberg University", "No reply", "One follow-up, then moved on"], href: "/directory/universities/heidelberg-university" },
      { cells: ["ETH Zurich", "No open post", "Kept the contact for later"], href: "/directory/universities/eth-zurich" },
      { cells: ["A UK government award", "Not selected", "Reused the essay, learned from feedback"] }
    ]
  } satisfies Table,
  decision: {
    head: ["", "RWTH Aachen", "University of Tübingen"],
    rows: [
      { cells: ["Research fit", "Excellent: same method and data", "Good: related topic"] },
      { cells: ["Funding", "Salaried post, 3 years, in writing", "Salaried post, 3 years, in writing"] },
      { cells: ["Supervisor", "Replied fast, clear plan", "Supportive, larger group"] },
      { cells: ["Location and cost", "Mid-cost city, housing available", "Small city, lower rent"] },
      { cells: ["Decision", "Accepted", "Declined politely"] }
    ]
  } satisfies Table,
  masters: [
    "A supervisor is usually not needed first. Programmes admit through a portal, so skip the professor emails.",
    "Grades, language score and the statement of purpose carry more weight, so start those early.",
    "Scholarship deadlines come earlier than admission deadlines. Check each call the day you find it.",
    "The scholarship essay becomes the main document: one story, results and a clear plan after the award.",
    "Funding is not part of the offer, so scholarship and funding checks come before the university shortlist.",
    "Everything else stays the same: read the call, certify documents early, apply early, compare offers in writing."
  ],
  visa: {
    steps: [
      { title: "Accepted the offer in writing", detail: "The signed acceptance and the offer letter are the base of the visa file." },
      { title: "Read the embassy's own page", detail: "Checked the visa type, forms, fee, photo rules and the exact document list on the official embassy site, never a forum." },
      { title: "Booked the appointment early", detail: "Slots can be weeks away, so she booked the same week she accepted and kept the confirmation." },
      { title: "Built the visa file", detail: "Collected every document in the order the embassy lists them, with originals and copies." },
      { title: "Biometrics and submission", detail: "Attended on time, gave fingerprints and a photo, paid only the official fee and kept the receipt." },
      { title: "Embassy interview", detail: "A short interview about her study plan, funding and plans after the degree." },
      { title: "Decision and travel", detail: "Checked the visa details for errors on arrival, then booked the flight only after approval." }
    ],
    documents: {
      head: ["Document", "Why the embassy wants it", "Status"],
      rows: [
        { cells: ["Valid passport", "Identity, with enough validity left", "Ready"] },
        { cells: ["Offer or admission letter", "Proves the place and the start date", "Ready"], file: "offer-letter" },
        { cells: ["Funding proof", "Contract or scholarship letter showing the costs are covered", "Ready"] },
        { cells: ["Degree and transcripts", "Proves the qualification", "Certified"], file: "transcript" },
        { cells: ["Language certificate", "Proves she can study in the course language", "Ready"], file: "ielts-report" },
        { cells: ["Health insurance proof", "Cover from the first day, if the embassy asks", "Ready"], href: "/guides/housing-and-insurance" },
        { cells: ["Visa form and photos", "Completed online and printed exactly as instructed", "Ready"] },
        { cells: ["Accommodation or temporary address", "A first address for the first weeks", "Ready"], href: "/guides/housing-and-insurance" }
      ],
      note: "The exact list changes by embassy and year. Use only the embassy's current page and ask them if anything is unclear."
    } satisfies Table,
    interview: [
      { q: "Why do you want to study in this country?", a: "Named the group, the topic and the data access, and said why her project needs this lab." },
      { q: "Who is paying for your stay?", a: "The salaried contract, with the offer letter and the scholarship as a second source." },
      { q: "What will you do after the degree?", a: "Honest and specific: finish the PhD, publish, then work in research, possibly with partners at home." },
      { q: "Tell me about your research.", a: "Two minutes in plain words: problem, method and one result." },
      { q: "Where will you live?", a: "University housing request plus a temporary address for the first weeks." }
    ],
    tips: [
      "Answer briefly and truthfully in your own words, and do not memorise a script.",
      "Bring every original, in the same order as the embassy list.",
      "Never submit a document you cannot explain, and never use an agent's invented papers.",
      "Arrive early, dress simply and stay calm if you are asked to wait.",
      "If refused, read the reason in writing and ask the university whether a new attempt makes sense."
    ]
  },
  arrival: [
    "Visa slot booked the week she accepted; documents kept in one folder.",
    "First-month budget set aside before the first salary.",
    "University housing requested, with a short temporary stay booked.",
    "Health insurance and registration done in the first week."
  ],
  lessons: [
    "Started 14 months ahead, so nothing was rushed.",
    "Checked funding and fit before writing a single email.",
    "Led every email with evidence a stranger could check.",
    "Followed up once, then moved on instead of waiting.",
    "Got funding in writing before accepting.",
    "Never paid anyone for a place or a promise."
  ],
  avoided: [
    "Mass-emailing one template to dozens of professors.",
    "Applying only to the most famous universities.",
    "Converting her CGPA herself.",
    "Accepting before comparing offers in writing."
  ]
};

