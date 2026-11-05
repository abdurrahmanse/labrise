import type { RoadmapStep } from "@/modules/roadmap";

// Phase 6: visa and arrival. Written for engineering research applicants in any department.
export const phase6Steps: RoadmapStep[] = [
  {
    id: "step-6-1",
    phaseId: "phase-6",
    stepNumber: "6.1",
    title: "Securing Official Immigration Sponsorship Documents",
    shortTitle: "Visa Documents",
    subtitle: "Collect the admission, funding and financial proof your visa needs",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Hold every document your visa application needs before you book the appointment.",
    description:
      "Each country issues its own acceptance document and asks for proof of funds. In the United States this is the I-20 and the SEVIS fee, in the UK it is the CAS, and in many European countries it is an admission letter with proof of funding. Start as soon as you accept.",
    checklist: [
      {
        id: "c-6-1-1",
        task: "Request the Admission Document",
        detail: "Ask the international office for the document your visa needs and check that your name and dates are correct."
      },
      {
        id: "c-6-1-2",
        task: "Prepare Proof of Funds",
        detail: "Collect the funding letter, scholarship letter and any bank statements that the embassy asks for."
      },
      {
        id: "c-6-1-3",
        task: "Pay the Official Fees",
        detail: "Use only the official government payment pages for visa and immigration fees."
      },
      {
        id: "c-6-1-4",
        task: "Check Special Clearance Rules",
        detail: "Some research subjects need extra security clearance, such as ATAS for certain UK programmes."
      }
    ],
    proTips: [
      "Make a checklist from the embassy website and tick items as you collect them.",
      "Keep digital and paper copies of everything."
    ],
    commonPitfalls: [
      "Using an unofficial website to pay a visa fee.",
      "Booking an appointment before the documents are ready."
    ],
    deliverable: "A complete visa folder with admission document, funding proof and fee receipts.",
    resources: [
      {
        title: "UK Academic Technology Approval Scheme (ATAS)",
        url: "https://www.gov.uk/guidance/academic-technology-approval-scheme",
        type: "official",
        description: "Official guidance on the security clearance that some UK research degrees require."
      },
      {
        title: "US Department of State: Student Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        type: "official",
        description: "Official steps and documents for US student visas."
      }
    ]
  },
  {
    id: "step-6-2",
    phaseId: "phase-6",
    stepNumber: "6.2",
    title: "Clearing Security Review for Sensitive Research Fields",
    shortTitle: "Security Clearance",
    subtitle: "Explain your research clearly if your field is on a security watch list",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Avoid avoidable delays by describing your research factually and with documents.",
    description:
      "Some engineering fields, such as advanced materials, aerospace, nuclear, certain electronics and communications, can lead to extra security checks, for example administrative processing in the United States or ATAS in the UK. A short, factual description of your research, your supervisor's letter and your publications usually helps.",
    checklist: [
      {
        id: "c-6-2-1",
        task: "Check Whether Your Field Is Listed",
        detail: "Read the official lists and ask the international office whether your subject may need extra review."
      },
      {
        id: "c-6-2-2",
        task: "Prepare a Factual Summary",
        detail: "Write a plain-language description of your planned research in a few sentences."
      },
      {
        id: "c-6-2-3",
        task: "Ask for a Supervisor Letter",
        detail: "A short letter from the professor describing the project and its academic purpose can help."
      },
      {
        id: "c-6-2-4",
        task: "Allow Extra Time",
        detail: "Apply as early as possible and plan for possible delays when you fix your travel dates."
      }
    ],
    proTips: [
      "Describe the research by its scientific purpose, in neutral words.",
      "Carry your admission letter, funding letter and summary to the interview."
    ],
    commonPitfalls: [
      "Using dramatic or military-sounding words to describe ordinary research.",
      "Booking flights before the clearance is complete."
    ],
    deliverable: "A one-paragraph research summary, a supervisor letter and a safe travel date.",
    resources: [
      {
        title: "US Department of State: Student Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        type: "official",
        description: "Official information on student visa steps and processing."
      }
    ]
  },
  {
    id: "step-6-3",
    phaseId: "phase-6",
    stepNumber: "6.3",
    title: "Relocation, Banking & Laboratory Onboarding",
    shortTitle: "Arrival & Onboarding",
    subtitle: "Settle in, open a bank account and get access to your lab",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Be ready to start research in the first week: housing, money, access and a plan with your supervisor.",
    description:
      "Plan housing, a local bank account and health insurance before you land. In the first week, complete the university registration, receive lab safety training and access cards, and meet your supervisor to agree on goals for the first year.",
    checklist: [
      {
        id: "c-6-3-1",
        task: "Arrange Housing and Insurance",
        detail: "Book temporary housing first, then search for a longer place with help from the university housing office."
      },
      {
        id: "c-6-3-2",
        task: "Open a Local Bank Account",
        detail: "Bring your passport, admission letter and proof of address, and set up a way to receive your stipend or salary."
      },
      {
        id: "c-6-3-3",
        task: "Complete Registration and Safety Training",
        detail: "Register at the university, finish the required lab safety courses and get your access cards and accounts."
      },
      {
        id: "c-6-3-4",
        task: "Agree on Year-One Goals",
        detail: "Meet your supervisor to agree on the first project, the first courses and a plan for the first paper."
      }
    ],
    proTips: [
      "Join the department's student group and ask older students for practical tips.",
      "Keep some savings in cash or a travel card until your first payment arrives."
    ],
    commonPitfalls: [
      "Arriving without a place to stay for the first weeks.",
      "Starting lab work before the safety training is complete."
    ],
    deliverable: "Housing, a bank account, registration complete and a written plan for your first year.",
    resources: [
      {
        title: "Wise: International Banking",
        url: "https://wise.com/",
        type: "tool",
        description: "A way to send and hold money in several currencies while you set up a local account."
      }
    ]
  }
];
