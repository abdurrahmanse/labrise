import type { RoadmapStep } from "@/modules/roadmap";

// Phase 4: submit. Written for engineering research applicants in any department.
export const phase4Steps: RoadmapStep[] = [
  {
    id: "step-4-1",
    phaseId: "phase-4",
    stepNumber: "4.1",
    title: "Securing Application Fee Waivers",
    shortTitle: "Fee Waivers",
    subtitle: "Many universities waive the fee if you ask in time and explain your situation",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Cut application costs by requesting every waiver you qualify for before the deadlines.",
    description:
      "Application fees add up quickly when you apply to many programmes. Many graduate schools offer waivers for financial need, for participation in outreach programmes, or when a professor asks for one. The rules and the deadlines for the request are on each graduate school's page.",
    checklist: [
      {
        id: "c-4-1-1",
        task: "Find the Waiver Page",
        detail: "Search each graduate school's fees page for 'fee waiver' and note who is eligible and the request deadline."
      },
      {
        id: "c-4-1-2",
        task: "Prepare the Evidence",
        detail: "Collect any document the school asks for, for example proof of income or a letter from a supervisor."
      },
      {
        id: "c-4-1-3",
        task: "Ask Early and Politely",
        detail: "Send the request well before the application deadline, because waiver decisions take days or weeks."
      },
      {
        id: "c-4-1-4",
        task: "Ask the Professor",
        detail: "In some departments a professor who wants to admit you can ask the school to waive the fee."
      }
    ],
    proTips: [
      "Make a table of fees and waiver deadlines so that no request is missed.",
      "Prefer programmes without a fee when two choices are equal."
    ],
    commonPitfalls: [
      "Asking for a waiver on the deadline day.",
      "Paying a fee and then learning that a waiver was available."
    ],
    deliverable: "A table of every programme with its fee, waiver rule and request date.",
    resources: [
      {
        title: "ETS GRE Official Site",
        url: "https://www.ets.org/gre.html",
        type: "official",
        description: "Official GRE information, including test fees and where reduced fees are offered."
      }
    ]
  },
  {
    id: "step-4-2",
    phaseId: "phase-4",
    stepNumber: "4.2",
    title: "Official Academic Transcripts, Attestations & Translations",
    shortTitle: "Transcripts & Attestation",
    subtitle: "Order official records early, because embassies and boards can take weeks",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Have every certified, attested or translated document ready before you start the applications.",
    description:
      "Universities ask for official transcripts, degree certificates and sometimes attested or translated copies. Some countries also ask for a credential evaluation. Each step involves other offices, so start early and keep digital copies of everything.",
    checklist: [
      {
        id: "c-4-2-1",
        task: "Order Official Copies",
        detail: "Request sealed or electronic transcripts and degree certificates from your university registrar."
      },
      {
        id: "c-4-2-2",
        task: "Check Attestation Rules",
        detail: "Find out whether the target country needs attestation, an apostille or a credential evaluation."
      },
      {
        id: "c-4-2-3",
        task: "Arrange Translations",
        detail: "Use an accepted translator when the documents are not in English or the local language."
      },
      {
        id: "c-4-2-4",
        task: "Scan and Name Files",
        detail: "Scan at readable quality and name each file clearly so you can upload it fast."
      }
    ],
    proTips: [
      "Ask for several sealed copies at once.",
      "Convert your grades to the scale the programme uses and keep the conversion notes."
    ],
    commonPitfalls: [
      "Starting attestation a week before the deadline.",
      "Uploading a blurry scan that the admissions office rejects."
    ],
    deliverable: "A folder of certified transcripts, certificates and translations ready for every application.",
    resources: [
      {
        title: "World Education Services (WES)",
        url: "https://www.wes.org/",
        type: "tool",
        description: "Credential evaluation and GPA conversion used by many North American institutions."
      }
    ]
  },
  {
    id: "step-4-3",
    phaseId: "phase-4",
    stepNumber: "4.3",
    title: "Executing the Priority Deadlines",
    shortTitle: "Priority Deadlines",
    subtitle: "Submit early, check every portal and keep proof of submission",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Submit each application before the priority deadline with all documents and letters confirmed.",
    description:
      "Deadlines differ a lot: many US and Canadian programmes close in December and January, many European posts are open until filled, and scholarships often close earlier than the university. Submit a few days early, check that every referee has uploaded a letter and keep the confirmation emails.",
    checklist: [
      {
        id: "c-4-3-1",
        task: "Build the Deadline Calendar",
        detail: "Put every programme and scholarship deadline, with time zone, in one calendar or in the planner."
      },
      {
        id: "c-4-3-2",
        task: "Finish Portals Early",
        detail: "Create accounts early, fill in the forms in advance and upload documents in the exact format asked for."
      },
      {
        id: "c-4-3-3",
        task: "Confirm the Letters",
        detail: "Check each portal to see that all recommendation letters have arrived, and remind referees kindly."
      },
      {
        id: "c-4-3-4",
        task: "Save Proof",
        detail: "Keep the confirmation page or email of every submission."
      }
    ],
    proTips: [
      "Submit at least three days early, so a portal problem does not cost you the application.",
      "Track every application in the planner with its status."
    ],
    commonPitfalls: [
      "Ignoring time zones in the deadline.",
      "Assuming referees uploaded their letters without checking."
    ],
    deliverable: "All applications submitted, with confirmations saved and letters confirmed.",
    resources: [
      {
        title: "The GradCafe: Admission Results",
        url: "https://www.thegradcafe.com/survey/index.php",
        type: "database",
        description: "Self-reported results that give a rough feel for timelines and decisions."
      }
    ]
  }
];
