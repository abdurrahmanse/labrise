export interface GuideTopic {
  id: string;
  title: string;
  tag: string;
  steps: string[];
}

export const guideTopics: GuideTopic[] = [
  {
    id: "research-area",
    title: "Research area",
    tag: "Do first",
    steps: [
      "List 3 courses or projects you enjoyed most.",
      "Read 10 recent papers on arXiv in those topics.",
      "Pick one area and one sub-topic.",
      "Write your interest in two sentences.",
      "Check that 10+ professors work on it."
    ]
  },
  {
    id: "cv",
    title: "CV",
    tag: "1–2 pages",
    steps: [
      "Use a clean one-column LaTeX or Word template.",
      "Order: education, research, projects, publications, skills.",
      "Write each item as action + method + result.",
      "Add links: GitHub, Google Scholar, website.",
      "Keep it 2 pages max and save as PDF."
    ]
  },
  {
    id: "sop",
    title: "SOP (Statement of Purpose)",
    tag: "1–2 pages",
    steps: [
      "Hook: the research question that drives you.",
      "Your past work and what you learned.",
      "Why this lab and this professor, naming 1–2 papers.",
      "Your plan for the first years.",
      "Edit for each university, never send a copy."
    ]
  },
  {
    id: "research-proposal",
    title: "Research proposal",
    tag: "2–5 pages",
    steps: [
      "Title and one-paragraph summary.",
      "Problem and why it matters.",
      "Related work in 5–10 references.",
      "Method and planned experiments.",
      "Timeline by semester and expected outcome."
    ]
  },
  {
    id: "reference-letter",
    title: "Reference letter",
    tag: "2–3 letters",
    steps: [
      "Choose professors who supervised your research.",
      "Ask 6–8 weeks before the deadline.",
      "Send your CV, SOP draft and deadline list.",
      "Share the portal link and the submission method.",
      "Remind them 1 week before each deadline."
    ]
  },
  {
    id: "ielts",
    title: "IELTS",
    tag: "Academic, 6.5–7.0",
    steps: [
      "Check the minimum score on each program page.",
      "Book the test 2–3 months ahead.",
      "Take one full mock test to find weak sections.",
      "Practise Writing task 2 and Speaking daily.",
      "Send scores directly to universities."
    ]
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    tag: "Usually 90–100",
    steps: [
      "Confirm TOEFL is accepted, and the institution code.",
      "Register at ets.org and pick a date.",
      "Practise with official TOEFL tests.",
      "Use the free score reports for chosen universities.",
      "Scores stay valid for 2 years."
    ]
  },
  {
    id: "proof-letters",
    title: "Proof letters",
    tag: "As requested",
    steps: [
      "Medium of instruction letter from your university.",
      "Official transcripts and degree certificate.",
      "Enrollment or graduation proof.",
      "Proof of funds only if the offer is not fully funded.",
      "Get translations notarised when required."
    ]
  },
  {
    id: "application-fee",
    title: "Application fee",
    tag: "Plan a budget",
    steps: [
      "List the fee for each program.",
      "Search for fee waivers for your country.",
      "Prefer no-fee PhD posts in Europe first.",
      "Apply to 10–15 programs, not 40.",
      "Keep receipts and confirmation emails."
    ]
  },
  {
    id: "visa-interview",
    title: "Visa interview",
    tag: "After the offer",
    steps: [
      "Collect offer letter, funding proof and passport.",
      "Fill the online visa form and pay the fee.",
      "Book the earliest interview slot.",
      "Prepare: study plan, funding, plan to return.",
      "Answer short, honest and in your own words."
    ]
  },
  { id: "cold-email", title: "Cold email to professors", tag: "150–200 words", steps: ["Check the lab is hiring.", "Read two recent papers.", "Write a short specific email.", "Attach your CV.", "Follow up once."] },
  { id: "interview-prep", title: "Research interview", tag: "Before offers", steps: ["Summarise your projects.", "Read the professor's papers.", "Review fundamentals.", "Prepare questions.", "Test your setup."] },
  { id: "funding-types", title: "Types of funding", tag: "Know the model", steps: ["Salaried PhD.", "Stipend and tuition waiver.", "Government scholarship.", "Fellowship.", "Check what is covered."] },
  { id: "deadlines-timeline", title: "12-month timeline", tag: "Plan", steps: ["12–9 months: area and tests.", "9–6 months: professors and documents.", "6–3 months: referees and early deadlines.", "3–0 months: submit.", "After: compare offers."] },
  { id: "offer-comparison", title: "Compare offers", tag: "After results", steps: ["Funding.", "Supervisor.", "Research fit.", "Location.", "Career outcomes."] },
  { id: "scholarship-scams", title: "Avoid scams", tag: "Stay safe", steps: ["Never pay for an award.", "Check official domains.", "Verify with the department.", "Ignore guarantees.", "Protect your documents."] },
  { id: "english-and-gre", title: "GRE and other tests", tag: "Only if needed", steps: ["List requirements.", "Check GRE necessity.", "Check Duolingo acceptance.", "Look for waivers.", "Pick the fewest tests."] },
  { id: "master-vs-phd", title: "Master's or PhD?", tag: "Choose first", steps: ["Career goal.", "Entry rules.", "Funding certainty.", "Research profile.", "Decide."] },
  { id: "no-research-background", title: "No research background", tag: "Start here", steps: ["Reproduce papers.", "Small project.", "Find a mentor.", "Research internship.", "Honest SOP."] },
  { id: "publications", title: "First publication", tag: "Strong plus", steps: ["Pick a project.", "Target a workshop.", "Post on arXiv.", "Release code.", "Get feedback."] },
  { id: "github-portfolio", title: "GitHub and portfolio", tag: "Show your work", steps: ["Pin 3 projects.", "Write READMEs.", "Make it reproducible.", "Build a page.", "Link everywhere."] },
  { id: "grade-conversion", title: "Grades and conversion", tag: "Give context", steps: ["State the scale.", "Add rank.", "Attach grading key.", "Use official rules.", "Do not self-convert."] },
  { id: "application-portals", title: "Application portals", tag: "Stay organised", steps: ["List systems.", "Create accounts.", "Track in a sheet.", "Check formats.", "Submit early."] },
  { id: "arrival-checklist", title: "Arrival checklist", tag: "After the visa", steps: ["Housing.", "Insurance.", "Money.", "Register.", "Meet supervisor."] },
  { id: "negotiating-and-declining", title: "Negotiate and decline", tag: "After offers", steps: ["Ask in writing.", "Request extension.", "Be realistic.", "Reply promptly.", "Decline kindly."] },
  { id: "document-attestation", title: "Attestation and translation", tag: "Ask early", steps: ["Ask what is required.", "Request originals.", "Certify translations.", "Apostille if required.", "Keep scans."] },
  { id: "budget-planning", title: "Budget and costs", tag: "Plan the numbers", steps: ["List pre-arrival costs.", "Confirm net income.", "Estimate monthly costs.", "Plan a first-month buffer.", "Compare offers."] }
];
