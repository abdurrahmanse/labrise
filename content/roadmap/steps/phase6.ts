import { RoadmapStep } from "../types";

export const phase6Steps: RoadmapStep[] = [
  {
    id: "step-6-1",
    phaseId: "phase-6",
    stepNumber: "6.1",
    title: "Securing Official Immigration Sponsorship Documents",
    shortTitle: "Immigration Sponsorship",
    subtitle: "Obtain Form I-20, CAS, or European hosting agreements backed by your fully funded scholarship letter",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Receive official government immigration sponsorship paperwork from your university's International Student Office.",
    description: "Once your funding contract is signed, the university will initiate your immigration documents. Because your tuition is waived and your stipend covers living costs, you generally do not need to show personal bank deposits.",
    checklist: [
      {
        id: "c-6-1-1",
        task: "Submit Financial Certification Package",
        detail: "Upload your official fully funded scholarship/assistantship award letter to the university's international portal."
      },
      {
        id: "c-6-1-2",
        task: "Receive US Form I-20 (F-1) or DS-2019 (J-1)",
        detail: "Verify that personal details match your passport character-for-character and pay the SEVIS I-901 fee."
      },
      {
        id: "c-6-1-3",
        task: "Obtain UK CAS & ATAS Certificate",
        detail: "If heading to the UK, apply for Academic Technology Approval Scheme (ATAS) clearance required for advanced AI research."
      },
      {
        id: "c-6-1-4",
        task: "Secure European Hosting Agreement (Convention d'Accueil)",
        detail: "For salaried PhD positions in Europe, obtain your formal research hosting agreement to apply for a scientific employment residence permit."
      }
    ],
    proTips: [
      "Keep digital and physical copies of your signed scholarship award letter in your carry-on luggage when traveling through international ports of entry.",
      "Check passport validity—it must be valid for at least 6 months beyond your intended stay."
    ],
    commonPitfalls: [
      "Waiting too long to apply for UK ATAS clearance, which can take 6–8 weeks during summer peak periods.",
      "Having discrepancies between the spelling of your name on your passport versus your university admission certificate."
    ],
    deliverable: "Official issued Form I-20 / CAS / European Hosting Agreement + SEVIS I-901 payment receipt.",
    resources: [
      {
        title: "FMJfee.com - Official SEVIS I-901 Fee Payment",
        url: "https://www.fmjfee.com/",
        type: "official",
        description: "Official US government payment portal for international student SEVIS fees."
      },
      {
        title: "UK Academic Technology Approval Scheme (ATAS)",
        url: "https://www.gov.uk/guidance/academic-technology-approval-scheme",
        type: "official",
        description: "Mandatory security clearance application for postgraduate research in sensitive computing fields."
      }
    ]
  },
  {
    id: "step-6-2",
    phaseId: "phase-6",
    stepNumber: "6.2",
    title: "Clearing the Technology Alert List (TAL) via Open-Science Documentation",
    shortTitle: "TAL Visa Clearance",
    subtitle: "Navigate export control scrutiny and prevent administrative processing delays at consular visa interviews",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Prepare a bulletproof consular visa interview package that demonstrates your AI research is fundamental, open-source, and unclassified.",
    description: "Artificial intelligence, machine learning, and advanced microelectronics are scrutinized under US and global export control regimes (Technology Alert List). International graduate students in AI risk multi-month administrative delays (INA section 221g) if their research is perceived as dual-use or proprietary.",
    checklist: [
      {
        id: "c-6-2-1",
        task: "Obtain Advisor Open-Science Research Statement",
        detail: "Secure a signed letter from your future PI on university letterhead confirming that all work is fundamental, unclassified, and intended for public academic conference release."
      },
      {
        id: "c-6-2-2",
        task: "Formulate Layperson Research Explanation",
        detail: "Practice explaining your research in plain English without using buzzwords like 'autonomous weapon systems' or 'surveillance tracking'."
      },
      {
        id: "c-6-2-3",
        task: "Prepare Clean Document Binder",
        detail: "Include I-20/CAS, advisor's bio, funding letter, transcripts, CV, and copy of your published papers."
      },
      {
        id: "c-6-2-4",
        task: "Articulate Clear Non-Immigrant Intent",
        detail: "Be prepared to discuss your long-term scientific career aspirations and professional trajectory."
      }
    ],
    proTips: [
      "When asked 'What will you research?', say: 'I will be researching fundamental mathematical optimization algorithms for open-source machine learning systems.' This is technically accurate and avoids export control red flags.",
      "Bring the printout of your advisor's academic webpage highlighting their open-access publications."
    ],
    commonPitfalls: [
      "Using sensationalist media phrases like 'building superintelligent military drones' or 'hacking neural networks'.",
      "Arriving at the consular window without an official signed research statement from your future department."
    ],
    deliverable: "Successful consular visa interview resulting in an approved student or researcher visa stamp in your passport.",
    resources: [
      {
        title: "US Department of State - Student Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        type: "official",
        description: "Official guidelines, appointment booking, and documentation requirements for US visas."
      }
    ]
  },
  {
    id: "step-6-3",
    phaseId: "phase-6",
    stepNumber: "6.3",
    title: "Relocation, Multi-Currency Banking & Laboratory Onboarding",
    shortTitle: "Lab & Compute Onboarding",
    subtitle: "Set up international banking, secure graduate housing, and configure your laboratory workstation",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Execute a smooth arrival and transition directly into active research productivity within your new laboratory.",
    description: "The final step transforms you from an applicant into an active graduate researcher. Establish your local bank direct deposit for stipend payments, obtain university health clearance, and set up your compute credentials on the departmental Slurm cluster.",
    checklist: [
      {
        id: "c-6-3-1",
        task: "Set Up Multi-Currency Travel Banking",
        detail: "Load an international card (Wise, Revolut) with initial buffer funds ($1,500–$2,500) to cover upfront security deposits before your first monthly stipend arrives."
      },
      {
        id: "c-6-3-2",
        task: "Secure Graduate Housing",
        detail: "Reserve on-campus graduate housing or secure a vetted shared lease within biking distance or public transit of the computer science building."
      },
      {
        id: "c-6-3-3",
        task: "Complete Immunization & Health Clearances",
        detail: "Upload translated vaccination histories and complete mandatory university screenings (Tuberculosis blood test, MMR)."
      },
      {
        id: "c-6-3-4",
        task: "Configure Departmental Slurm & Workstation Access",
        detail: "Obtain institutional computing credentials, set up SSH keys for the lab's GPU cluster, and align with your PI on Year 1 conference deadlines."
      }
    ],
    proTips: [
      "Ask senior PhD students in your lab for advice on the best local banks that process international Social Security Numbers (SSN) and graduate payroll with minimal fees.",
      "Aim to arrive 10 days before orientation to recover from jet lag, furnish your apartment, and explore the lab before classes begin."
    ],
    commonPitfalls: [
      "Relying on cash instead of setting up a local bank account immediately—graduate stipends can only be paid via direct deposit.",
      "Failing to register for classes early, which can temporarily delay health insurance coverage activation."
    ],
    deliverable: "Active local bank account with direct deposit linked, housing lease executed, and SSH access verified on lab GPU clusters.",
    resources: [
      {
        title: "Wise International Banking",
        url: "https://wise.com/",
        type: "tool",
        description: "Low-fee multi-currency accounts and foreign exchange for international relocations."
      }
    ]
  }
];
