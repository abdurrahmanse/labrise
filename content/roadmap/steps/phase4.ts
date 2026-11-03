import { RoadmapStep } from "../types";

export const phase4Steps: RoadmapStep[] = [
  {
    id: "step-4-1",
    phaseId: "phase-4",
    stepNumber: "4.1",
    title: "Securing Departmental & Conference Diversity Application Fee Waivers",
    shortTitle: "Application Fee Waivers",
    subtitle: "Acquire fee waiver codes to submit 8–12 applications for free without paying $1,000+ in fees",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Eliminate application fees across your target institutions through conference partnerships, virtual open houses, and financial hardship appeals.",
    description: "Application fees for US graduate programs run $75–$150 each. For international applicants applying to 10 programs, this can total $1,200+. You can eliminate these costs through early fee waiver programs.",
    checklist: [
      {
        id: "c-4-1-1",
        task: "Attend Virtual Graduate Open Houses",
        detail: "Register for and attend virtual admissions info sessions hosted by CS departments in September/October; attendees routinely receive fee waiver codes."
      },
      {
        id: "c-4-1-2",
        task: "Apply Through Conference Affinity Groups",
        detail: "Submit requests through affinity organizations (Black in AI, LatinX in AI, WiML, Indigenous in AI, Queer in AI) which partner with universities for free application codes."
      },
      {
        id: "c-4-1-3",
        task: "Direct Email to CS Graduate Admissions Chairs",
        detail: "Send formal waiver requests citing international currency devaluation, accompanied by your academic CV."
      }
    ],
    proTips: [
      "Many US departments have an automated fee waiver checkbox directly inside the application portal under 'Financial Hardship' or 'Diversity' that does not even require uploading tax documents.",
      "Request waiver codes early in October—departmental waiver budgets are finite and often run out by late November."
    ],
    commonPitfalls: [
      "Paying application fees out-of-pocket without checking for available waiver codes.",
      "Waiting until December 14 to request a waiver code when university administrative offices take 3–5 business days to process requests."
    ],
    deliverable: "Acquired fee waiver discount codes entered into application portals, reducing application costs to $0.",
    resources: [
      {
        title: "Black in AI - Graduate Application Fee Support",
        url: "https://blackinai.github.io/",
        type: "official",
        description: "Provides application mentoring and fee waiver programs for AI applicants."
      },
      {
        title: "Women in Machine Learning (WiML) Programs",
        url: "https://wiml.org/",
        type: "official",
        description: "Travel grants, workshop mentorship, and graduate school application fee waivers."
      }
    ]
  },
  {
    id: "step-4-2",
    phaseId: "phase-4",
    stepNumber: "4.2",
    title: "Official Academic Transcripts, Attestations & Translations",
    shortTitle: "Transcript Verification",
    subtitle: "Prepare verified, sealed transcripts, notarizations, and credential evaluations",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Ensure all official academic documentation is certified, translated, and verified in compliance with international admissions requirements.",
    description: "Incomplete or unverified academic documentation can invalidate an otherwise competitive application. Ensure that degree certificates, grading scale keys, and certified translations are prepared early.",
    checklist: [
      {
        id: "c-4-2-1",
        task: "Request Sealed Official Transcripts",
        detail: "Obtain official stamped and signed transcript PDFs directly from your university registrar."
      },
      {
        id: "c-4-2-2",
        task: "Verify Institutional Grading Scale Keys",
        detail: "Ensure the back of your transcript includes an official formula explaining how percentages or letter grades map to GPA."
      },
      {
        id: "c-4-2-3",
        task: "Obtain Sworn Certified Translations",
        detail: "If your documents are in any language other than English, have them translated by a certified court translator and legally bound with original copies."
      },
      {
        id: "c-4-2-4",
        task: "Complete Credential Evaluations (if mandated)",
        detail: "For institutions requiring third-party evaluation (e.g., WES or ECE), submit documentation 8 weeks before deadlines."
      }
    ],
    proTips: [
      "Most top US CS departments allow you to upload unofficial PDF scans during the initial review phase, only requiring expensive official mailed copies after admission.",
      "Always scan transcripts in high-resolution color (300 DPI) so official watermarks and signatures are clearly legible to reviewers."
    ],
    commonPitfalls: [
      "Calculating your own converted GPA using arbitrary online formulas instead of reporting your university's native grading scale.",
      "Forgetting to include proof of degree completion if you have already graduated."
    ],
    deliverable: "High-resolution, verified PDF packages of all undergraduate/master's transcripts and certified translations ready for portal upload.",
    resources: [
      {
        title: "World Education Services (WES)",
        url: "https://www.wes.org/",
        type: "tool",
        description: "International academic credential evaluation services for North American institutions."
      }
    ]
  },
  {
    id: "step-4-3",
    phaseId: "phase-4",
    stepNumber: "4.3",
    title: "Executing the December 1–15 Priority Fellowship Deadlines",
    shortTitle: "December Priority Deadlines",
    subtitle: "Submit all applications before strict fellowship windows close to guarantee consideration for full funding",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Submit all application components, confirm recommendation uploads, and secure priority consideration for departmental assistantships and university fellowships.",
    description: "In top Computer Science departments, submitting before the Priority Fellowship Deadline (typically December 1 – December 15) is mandatory for financial support. Applications submitted for 'regular' deadlines in January or February are often considered only after fellowship funding has been allocated.",
    checklist: [
      {
        id: "c-4-3-1",
        task: "Target December 1 as Universal Submission Date",
        detail: "Aim to submit all applications 48 hours before the deadline to prevent portal crashes during peak server loads."
      },
      {
        id: "c-4-3-2",
        task: "Verify Recommender Status Dashboards",
        detail: "Log into each application portal to confirm all 3 letters of recommendation have been uploaded and registered as 'Received'."
      },
      {
        id: "c-4-3-3",
        task: "Confirm Program-Specific Questions",
        detail: "Ensure that you have selected 'Yes, I wish to be considered for departmental financial support / assistantships'."
      },
      {
        id: "c-4-3-4",
        task: "Archive Submission Confirmation Receipts",
        detail: "Save the confirmation PDF and Application ID number for each institution in your tracking spreadsheet."
      }
    ],
    proTips: [
      "If a recommender has not uploaded their letter 48 hours before the deadline, send a polite, urgent reminder through the portal's automated reminder button.",
      "Most departments allow letters of recommendation to arrive a few days after the formal student deadline, provided your portion is submitted on time."
    ],
    commonPitfalls: [
      "Accidentally selecting 'Self-Funded' or 'No Financial Aid Required' on application drop-down menus.",
      "Waiting until 11:59 PM on deadline day when payment gateways and application servers frequently experience heavy traffic."
    ],
    deliverable: "100% of target applications officially submitted with confirmation receipts and confirmed recommender uploads.",
    resources: [
      {
        title: "GradCafe Computer Science Results",
        url: "https://www.thegradcafe.com/survey/index.php",
        type: "database",
        description: "Crowdsourced historical admissions results, notification dates, and interview timelines."
      }
    ]
  }
];
