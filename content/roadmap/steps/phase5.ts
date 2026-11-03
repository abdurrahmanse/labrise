import type { RoadmapStep } from "@/modules/roadmap";

export const phase5Steps: RoadmapStep[] = [
  {
    id: "step-5-1",
    phaseId: "phase-5",
    stepNumber: "5.1",
    title: "The 5-Slide Technical Research Presentation Defense",
    shortTitle: "5-Slide Technical Defense",
    subtitle: "Present your core machine learning project with scientific clarity during formal faculty committee interviews",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Deliver a compelling, 8-minute technical defense of your research to an admissions committee or lab PI.",
    description: "Formal graduate interviews in machine learning are technical defenses. Faculty evaluate how well you explain complex concepts, defend your methodology, and explain experimental design choices.",
    checklist: [
      {
        id: "c-5-1-1",
        task: "Slide 1: Scientific Motivation & Existing Limits",
        detail: "Explain the problem setting and why existing state-of-the-art baselines break down."
      },
      {
        id: "c-5-1-2",
        task: "Slide 2: Your Core Algorithmic/Mathematical Insight",
        detail: "Present your key contribution using clean mathematical notation and an intuitive architectural flow diagram."
      },
      {
        id: "c-5-1-3",
        task: "Slide 3: Quantitative Experimental Benchmarks",
        detail: "Show your primary comparison table across standard benchmarks with error bars and statistical significance."
      },
      {
        id: "c-5-1-4",
        task: "Slide 4: Controlled Ablation Studies",
        detail: "Prove which specific component of your design was responsible for the performance gain."
      },
      {
        id: "c-5-1-5",
        task: "Slide 5: Open Questions & Future Horizons",
        detail: "Demonstrate scientific maturity by outlining what experiments you would conduct next."
      }
    ],
    proTips: [
      "Practice your timing: 8 minutes of presentation leaves 12 minutes for Q&A in a standard 20-minute faculty interview slot.",
      "Anticipate the most common question: 'What would happen to your method if [assumption X] was violated in the real world?'"
    ],
    commonPitfalls: [
      "Reading script text directly off slides instead of maintaining conversational eye contact with the camera.",
      "Focusing on trivial hyperparameter tuning details instead of the core scientific hypothesis and insights."
    ],
    deliverable: "Rehearsed 5-slide technical presentation deck ready for screen sharing during admissions interview calls.",
    resources: [
      {
        title: "How to Give a Great Research Talk (Simon Peyton Jones)",
        url: "https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/",
        type: "guide",
        description: "Classic guide on structuring and delivering technical computer science presentations."
      }
    ]
  },
  {
    id: "step-5-2",
    phaseId: "phase-5",
    stepNumber: "5.2",
    title: "Handling Live Algorithmic & Deep Learning Stress-Testing",
    shortTitle: "Live Technical Stress-Testing",
    subtitle: "Confidently answer in-depth questions on optimization, memory ceilings, and failure modes",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Demonstrate deep technical comprehension when professors challenge your derivations, design choices, and systems knowledge.",
    description: "Professors will push you beyond your comfort zone to see how you reason under uncertainty. They want to see your analytical troubleshooting process when an experiment fails or theoretical assumptions break down.",
    checklist: [
      {
        id: "c-5-2-1",
        task: "Review Core Deep Learning Derivations",
        detail: "Be ready to explain backpropagation, self-attention complexity, diffusion reverse processes, and contrastive loss dynamics."
      },
      {
        id: "c-5-2-2",
        task: "Prepare for 'Why Not Method X?' Inquiries",
        detail: "Know why you chose your specific architecture over prominent alternatives in the literature."
      },
      {
        id: "c-5-2-3",
        task: "Master the STAR-L Interview Framework",
        detail: "Answer behavioural and technical challenges using: Situation, Task, Action, Result, and Learning."
      },
      {
        id: "c-5-2-4",
        task: "Formulate High-Caliber Faculty Questions",
        detail: "Ask about upcoming lab grant directions, student autonomy in choosing projects, and GPU availability."
      }
    ],
    proTips: [
      "If you do not know an answer, do not guess. Say: 'I haven't derived that specific case, but based on the properties of X, my hypothesis would be Y, which I would test by Z.'",
      "Faculty are evaluating you as a future colleague—they want researchers who are pleasant, curious, and open to feedback."
    ],
    commonPitfalls: [
      "Becoming defensive or argumentative when a professor points out a potential limitation in your past paper.",
      "Claiming an experiment had 'no limitations'—every piece of research has boundary conditions."
    ],
    deliverable: "Documented interview response sheet covering the top 10 most common deep learning technical defense scenarios.",
    resources: [
      
    ]
  },
  {
    id: "step-5-3",
    phaseId: "phase-5",
    stepNumber: "5.3",
    title: "Deciphering the Financial Offer & Net Take-Home Math",
    shortTitle: "Stipend Math & Living Costs",
    subtitle: "Calculate true purchasing power after taxes, mandatory campus fees, and metropolitan cost-of-living",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Accurately compare competing fully funded offers by calculating net disposable monthly income.",
    description: "A $34,000 stipend in Atlanta (Georgia Tech) or Urbana-Champaign (UIUC) offers a comfortable quality of life. The same $34,000 in New York City (Columbia) or the Bay Area (Stanford) can mean severe financial strain. Calculate the net reality before signing.",
    checklist: [
      {
        id: "c-5-3-1",
        task: "Deduct Estimated Tax Withholding",
        detail: "Account for federal, state, and local income tax deductions (typically 12%–15% for graduate stipends in the US)."
      },
      {
        id: "c-5-3-2",
        task: "Identify Mandatory Student Fees",
        detail: "Check the offer letter for non-waivable university fees (often $1,200–$2,500/year for campus facilities and technology)."
      },
      {
        id: "c-5-3-3",
        task: "Verify Health Insurance Premium Subsidies",
        detail: "Confirm whether the department covers 100% of student health insurance or requires co-pays from your stipend."
      },
      {
        id: "c-5-3-4",
        task: "Calculate Local Rent-to-Stipend Ratios",
        detail: "Ensure that standard 1-bedroom or shared apartment rent in the university area does not exceed 45% of your net monthly income."
      }
    ],
    proTips: [
      "In European salaried PhD programs (Germany TV-L E13, Switzerland, Netherlands), your salary includes social security, unemployment insurance, and pension contributions.",
      "Check whether your stipend is paid over 9 months (academic year) or 12 months (calendar year)—summer funding makes a huge difference."
    ],
    commonPitfalls: [
      "Comparing nominal gross stipends without adjusting for regional cost-of-living differences.",
      "Assuming all university health insurance plans cover dental and vision care (they often require an extra fee)."
    ],
    deliverable: "Completed net disposable income spreadsheet comparing all received funding packages side-by-side.",
    resources: [
      {
        title: "PhD Stipends Database",
        url: "http://phdstipends.com/",
        type: "database",
        description: "Crowdsourced database of verified graduate stipends across all US and international universities."
      },
      {
        title: "MIT Living Wage Calculator",
        url: "https://livingwage.mit.edu/",
        type: "tool",
        description: "Cost of living and basic expense breakdowns across all US counties and metropolitan areas."
      }
    ]
  },
  {
    id: "step-5-4",
    phaseId: "phase-5",
    stepNumber: "5.4",
    title: "Respectful Scholarship Negotiation & Summer Funding Leverage",
    shortTitle: "Funding Negotiation",
    subtitle: "Leverage competing fully funded offers to secure departmental top-up fellowships and summer research support",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Respectfully negotiate with your top-choice institution to match a higher financial package or secure guaranteed summer research funding.",
    description: "If you receive multiple fully funded offers, you have established your value as an in-demand researcher. Departments have discretionary Dean's fellowship top-ups ($2,000–$10,000/year) that they can unlock to recruit top students.",
    checklist: [
      {
        id: "c-5-4-1",
        task: "Identify Competing Leverage Points",
        detail: "Select your highest-paying or most prestigious offer to serve as a polite comparison point."
      },
      {
        id: "c-5-4-2",
        task: "Draft a Transparent, Respectful Inquiry",
        detail: "Reiterate that the target university is your first choice intellectually, and transparently ask if supplemental funding is possible."
      },
      {
        id: "c-5-4-3",
        task: "Negotiate Dedicated Compute Allocations",
        detail: "If monetary stipends are fixed by union contracts, negotiate additional dedicated GPU cloud credits or hardware for your desk."
      },
      {
        id: "c-5-4-4",
        task: "Formally Sign & Decline Other Offers Promptly",
        detail: "Once you sign your accepted contract, promptly decline other offers so their funding can be released to waitlisted peers."
      }
    ],
    proTips: [
      "In Computer Science, the April 15 Resolution (CGS agreement) gives you until April 15 to make your final decision for US universities—never feel pressured to accept early.",
      "Always remain exceptionally polite and professional; academia is a small world and the professors you decline today will be reviewing your papers at NeurIPS tomorrow."
    ],
    commonPitfalls: [
      "Issuing aggressive ultimatums ('Match this or I won't come')—this alienates faculty before you even arrive.",
      "Holding onto 5 funded offers until April 15 without letting other students on the waitlist have an opportunity."
    ],
    deliverable: "Final signed Graduate Research Assistantship (GRA) or Doctoral Fellow appointment letter with maximum negotiated benefits.",
    resources: [
      {
        title: "Council of Graduate Schools (CGS) April 15 Resolution",
        url: "https://cgsnet.org",
        type: "official",
        description: "Official agreement protecting graduate student decision timelines across North America."
      }
    ]
  }
];
