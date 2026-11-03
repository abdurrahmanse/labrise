import { RoadmapStep } from "../types";

export const phase2Steps: RoadmapStep[] = [
  {
    id: "step-2-1",
    phaseId: "phase-2",
    stepNumber: "2.1",
    title: "Mapping Funded AI Laboratories via CSRankings.org & Grant Databases",
    shortTitle: "CSRankings Lab Mapping",
    subtitle: "Identify institutions and laboratories holding active, unspent funding in your specific AI subfield",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Build a comprehensive database of prospective PIs who are actively publishing at top-tier venues and have grant capital to hire students.",
    description: "Generic university brand names do not reflect AI research strength. A top-10 overall university might have a weak AI lab, while a top-40 university might host a world-renowned pioneer with millions in grant funding.",
    checklist: [
      {
        id: "c-2-1-1",
        task: "Filter CSRankings.org by Subfield",
        detail: "Select Artificial Intelligence, Machine Learning, Computer Vision, and NLP. Filter by regional zones (US, Canada, Europe, Asia)."
      },
      {
        id: "c-2-1-2",
        task: "Audit NIH RePORTER & NSF Award Search",
        detail: "Search US grant databases for active awards funded through 2026–2030 to confirm the lab has liquid capital."
      },
      {
        id: "c-2-1-3",
        task: "Examine European CORDIS & ERC Grants",
        detail: "Search for ERC Starting Grants and Horizon Europe AI consortia—these PIs receive up to €1.5M–€2.5M and are mandated to hire salaried PhD researchers."
      },
      {
        id: "c-2-1-4",
        task: "Track Faculty Hiring Announcements",
        detail: "Monitor Twitter/X (#AcademicTwitter, #PhDPosition) and OpenReview for announcements: 'My lab is looking for 2 funded PhD students for Fall 2026'."
      }
    ],
    proTips: [
      "Look at the acknowledgments section of recent papers from target labs to see who funds them (e.g., 'This research was supported by NSF Award #XXXXXX or a Google Research Scholar Award').",
      "Check the lab's current PhD student roster on their group website—if their senior students are graduating this year, the PI will have open funded desks."
    ],
    commonPitfalls: [
      "Applying to famous senior professors whose last paper was published 5 years ago and who have transitioned into administrative dean roles with no active lab.",
      "Relying on US News or QS general rankings which are skewed by medical and law schools rather than computer science output."
    ],
    deliverable: "A structured tracking spreadsheet containing 35+ individual professors categorized into 3 Dream / 5 Target / 2 Safe institutional tiers.",
    resources: [
      {
        title: "CSRankings: Computer Science Rankings",
        url: "https://csrankings.org/",
        type: "database",
        description: "Metrics-based ranking of top computer science institutions by publication volume in premier venues."
      },
      {
        title: "NSF Award Search",
        url: "https://www.nsf.gov/awardsearch/",
        type: "database",
        description: "Official National Science Foundation database of active academic research grants in the US."
      }
    ]
  },
  {
    id: "step-2-2",
    phaseId: "phase-2",
    stepNumber: "2.2",
    title: "Prioritizing Junior (Assistant) Professors with Startup Packages",
    shortTitle: "Junior Faculty Strategy",
    subtitle: "Maximize your admission probability by targeting tenure-track assistant professors with unspent startup millions",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Focus your outreach on faculty who have the highest urgency and budget to hire doctoral students immediately.",
    description: "Tenure-track Assistant Professors in Computer Science receive $500,000 to $1,500,000 in startup funding from their universities when hired. They must publish extensively and graduate doctoral students to achieve tenure, making them the most motivated recruiters in academia.",
    checklist: [
      {
        id: "c-2-2-1",
        task: "Identify Faculty in Years 1 to 4 of Appointment",
        detail: "Look for Assistant Professors who joined departments within the past 1–4 years from top doctoral or postdoc labs."
      },
      {
        id: "c-2-2-2",
        task: "Analyze Their Graduate Alma Mater & Pedigree",
        detail: "Junior faculty often maintain co-authorships and collaborative compute sharing with their former PhD advisors at MIT, Stanford, Berkeley, or CMU."
      },
      {
        id: "c-2-2-3",
        task: "Verify Active Lab Compute Resources",
        detail: "Confirm that the assistant professor has secured dedicated GPU nodes or industry cloud sponsorship (e.g., NVIDIA Academic Hardware Grants)."
      }
    ],
    proTips: [
      "Junior faculty read their own emails and frequently answer cold inquiries, unlike senior directors whose inboxes are managed by departmental staff.",
      "Assistant professors are often far more hands-on, meeting with their PhD students multiple times per week and actively coding and debugging alongside them."
    ],
    commonPitfalls: [
      "Assuming that working for a famous senior professor is automatically better—famous PIs often meet their PhD students once every 3 months and leave mentorship to postdocs.",
      "Targeting professors whose research direction has shifted away from your specific interests."
    ],
    deliverable: "Curated shortlist of 15–20 high-potential Assistant Professors who have joined target CS departments within the past 3 years.",
    resources: [
      {
        title: "The Assistant Professor Hiring Guide",
        url: "https://cra.org/",
        type: "guide",
        description: "Computing Research Association (CRA) insights into academic faculty hiring and startup packages."
      }
    ]
  },
  {
    id: "step-2-3",
    phaseId: "phase-2",
    stepNumber: "2.3",
    title: "The 5-Point AI Cold Email Outreach Campaign",
    shortTitle: "AI Cold Outreach Campaign",
    subtitle: "Execute personalized, technical email outreach that catches the attention of busy faculty in under 10 seconds",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Secure positive responses and informal Zoom screening calls from prospective supervisors prior to formal application submission.",
    description: "Faculty receive dozens of generic emails daily. Your email must immediately prove that you have read their work, understand their technical trade-offs, and possess the concrete skills to make progress on their active grants.",
    checklist: [
      {
        id: "c-2-3-1",
        task: "Read 1 Recent Paper in Depth",
        detail: "Select a paper published in the past 12 months. Study the methodology, loss curves, ablation tables, and noted limitations."
      },
      {
        id: "c-2-3-2",
        task: "Draft the Hyper-Specific Technical Critique",
        detail: "Highlight an empirical constraint, a failure mode in edge cases, or an unexplored architectural extension."
      },
      {
        id: "c-2-3-3",
        task: "Connect Your Demonstrated Weaponry",
        detail: "State your related project, link your arXiv preprint, and provide a direct GitHub URL."
      },
      {
        id: "c-2-3-4",
        task: "Execute Outreach on Optimal Schedule",
        detail: "Send emails Tuesday through Thursday between 8:30 AM and 9:15 AM in the professor's local time zone."
      },
      {
        id: "c-2-3-5",
        task: "Send One Polite 7-Day Follow-Up",
        detail: "If no response after 7 business days, reply to the same thread with a brief 2-sentence bump."
      }
    ],
    proTips: [
      "Never paste text with mismatched fonts or background formatting from rich-text editors. Send clean, plain-text emails with clear hyperlinks.",
      "Subject line formula: `Prospective PhD Student (Fall 2026) - [Subfield, e.g. Diffusion Guidance] - [Your Full Name]`."
    ],
    commonPitfalls: [
      "Sending mass mailings with 'Dear Respected Professor' and generic praise ('I am fascinated by your esteemed work'). This results in immediate blocking.",
      "Attaching 25MB zip files containing code or certificates. Only attach a clean 2-page PDF CV and link everything else."
    ],
    deliverable: "25–35 personalized cold outreach emails sent, logged in an outreach tracker with response statuses and scheduled calls.",
    resources: [
      {
        title: "How to Email a Professor (Philip Guo, UCSD)",
        url: "https://pgbovine.net/email-professors.htm",
        type: "guide",
        description: "Classic, widely respected advice on academic email etiquette from a computer science professor."
      }
    ]
  },
  {
    id: "step-2-4",
    phaseId: "phase-2",
    stepNumber: "2.4",
    title: "Acing the Professor 15-Minute Zoom Screening Call",
    shortTitle: "PI Zoom Screening",
    subtitle: "Present your research concisely and evaluate the laboratory culture and compute resources",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Convert an informal Zoom conversation into an explicit commitment from the professor to champion your application in the departmental committee.",
    description: "When an AI professor invites you to a 15-minute call, they are assessing intellectual autonomy, clarity of thought, and interpersonal communication. You must articulate your past work with crisp scientific precision.",
    checklist: [
      {
        id: "c-2-4-1",
        task: "Prepare the 5-Slide Backup Presentation",
        detail: "Have a clean slide deck ready: Problem -> Prior Limitations -> Your Method -> Quantitative Benchmarks -> Open Questions."
      },
      {
        id: "c-2-4-2",
        task: "Practice the 3-Minute Verbal Elevator Pitch",
        detail: "Deliver a concise summary of your research trajectory without relying on slides if the professor prefers an informal dialogue."
      },
      {
        id: "c-2-4-3",
        task: "Inquire About Compute & GPU-to-Student Ratios",
        detail: "Ask: 'What does the compute setup look like for incoming students (on-prem Slurm cluster vs. cloud allocations)?'"
      },
      {
        id: "c-2-4-4",
        task: "Confirm Formal Application Endorsement",
        detail: "Close by asking: 'If I formally submit my application to the department, should I list your name as prospective advisor on the portal?'"
      }
    ],
    proTips: [
      "Test your microphone, lighting, and screen-sharing setup beforehand. Inability to share your screen smoothly makes a poor first impression on a computer science faculty member.",
      "Send a thank-you email within 4 hours summarizing key discussion points and referencing any papers or repositories mentioned during the call."
    ],
    commonPitfalls: [
      "Monopolizing the entire call with a 20-minute monologue without letting the professor speak or ask questions.",
      "Saying 'I don't know' and freezing up when asked about an experimental failure. Instead, walk through your scientific troubleshooting hypothesis."
    ],
    deliverable: "Completed screening calls resulting in positive verbal commitments from faculty to review your file during committee admissions.",
    resources: [
      {
        title: "Grad School Interview Advice (Andrej Karpathy)",
        url: "https://karpathy.github.io/",
        type: "guide",
        description: "Insights into communicating scientific concepts effectively in machine learning."
      }
    ]
  }
];
