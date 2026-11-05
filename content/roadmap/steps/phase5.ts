import type { RoadmapStep } from "@/modules/roadmap";

// Phase 5: interview, offer and negotiation. Written for engineering research applicants in any department.
export const phase5Steps: RoadmapStep[] = [
  {
    id: "step-5-1",
    phaseId: "phase-5",
    stepNumber: "5.1",
    title: "The Short Research Presentation",
    shortTitle: "Research Presentation",
    subtitle: "Present one project clearly in five slides or five minutes",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Explain your best project so that faculty from a neighbouring field can follow it.",
    description:
      "Some programmes and funders ask for a short talk, and every interview includes a version of 'tell us about your research'. Prepare a five-slide story: the problem, why it matters, your method, your result and what comes next. Practise it aloud with a timer.",
    checklist: [
      {
        id: "c-5-1-1",
        task: "Build the Five-Slide Story",
        detail: "Problem, motivation, method, result and next steps, with one clear figure per slide."
      },
      {
        id: "c-5-1-2",
        task: "Rehearse with a Timer",
        detail: "Practise until you finish in the time given, leaving room for questions."
      },
      {
        id: "c-5-1-3",
        task: "Prepare for Questions",
        detail: "List the ten hardest questions about your method and write short, honest answers."
      }
    ],
    proTips: [
      "Say what you did yourself and what the team did.",
      "Keep backup slides for details you expect people to ask about."
    ],
    commonPitfalls: [
      "Slides full of text that you read aloud.",
      "Claiming results that you cannot defend under questions."
    ],
    deliverable: "A five-slide deck and a recorded practice run.",
    resources: [
      {
        title: "How to Give a Great Research Talk (Simon Peyton Jones)",
        url: "https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/",
        type: "guide",
        description: "Short, practical advice on structuring a research talk."
      }
    ]
  },
  {
    id: "step-5-2",
    phaseId: "phase-5",
    stepNumber: "5.2",
    title: "Handling Technical Questions in the Faculty Interview",
    shortTitle: "Technical Interview",
    subtitle: "Show how you think when a question is hard or you do not know the answer",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Stay calm and reason out loud when faculty test your fundamentals and your judgement.",
    description:
      "Faculty interviews check your fundamentals, how you approach an unfamiliar problem and how honest you are about limits. Review the core courses of your field, revisit your own project in depth and practise thinking aloud.",
    checklist: [
      {
        id: "c-5-2-1",
        task: "Review the Fundamentals",
        detail: "Revisit the main courses of your field and be ready for basic questions on theory and units."
      },
      {
        id: "c-5-2-2",
        task: "Know Your Own Project Deeply",
        detail: "Be ready to justify every assumption, parameter and choice in your thesis or project."
      },
      {
        id: "c-5-2-3",
        task: "Practise Thinking Aloud",
        detail: "Do mock interviews where a friend asks an unfamiliar question and you reason through it step by step."
      },
      {
        id: "c-5-2-4",
        task: "Prepare Your Own Questions",
        detail: "Ask about the group's direction, supervision style and how students are funded."
      }
    ],
    proTips: [
      "It is fine to say 'I do not know, but I would start by...' and then reason it out.",
      "Bring a one-page summary of your project in case a screen share fails."
    ],
    commonPitfalls: [
      "Guessing confidently when you do not know.",
      "Memorised answers that fall apart after one follow-up question."
    ],
    deliverable: "A list of the twenty most likely questions with short answers, and two mock interviews done.",
    resources: []
  },
  {
    id: "step-5-3",
    phaseId: "phase-5",
    stepNumber: "5.3",
    title: "Deciphering the Financial Offer & Net Take-Home Math",
    shortTitle: "Reading the Offer",
    subtitle: "Compare stipends, salaries, fees and living costs on the same basis",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Know your real monthly income after tax, fees and rent for every offer.",
    description:
      "A headline number can mislead. Some offers include a tuition waiver, health insurance and a salary, while others pay a stipend but charge fees. Convert each offer to a monthly net amount and compare it with living costs in that city.",
    checklist: [
      {
        id: "c-5-3-1",
        task: "List Everything in the Offer",
        detail: "Write down stipend or salary, tuition waiver, health insurance, fees, duration and conditions."
      },
      {
        id: "c-5-3-2",
        task: "Calculate Net Monthly Income",
        detail: "Subtract tax, mandatory fees and insurance, and convert to your currency if useful."
      },
      {
        id: "c-5-3-3",
        task: "Compare with Local Costs",
        detail: "Check rent, food and transport for the city using a cost-of-living calculator."
      },
      {
        id: "c-5-3-4",
        task: "Check the Conditions",
        detail: "Read the length of funding, what happens if the project ends, and any teaching duties."
      }
    ],
    proTips: [
      "Ask the group how long funding is guaranteed and whether summers are paid.",
      "Ask a current student what living in the city really costs."
    ],
    commonPitfalls: [
      "Comparing gross and net numbers as if they were the same.",
      "Ignoring fees, insurance and the cost of the first month."
    ],
    deliverable: "A table of your offers with net monthly income, conditions and living costs.",
    resources: [
      {
        title: "PhD Stipends Database",
        url: "http://phdstipends.com/",
        type: "database",
        description: "Self-reported stipend data for graduate students, mostly in the United States."
      },
      {
        title: "MIT Living Wage Calculator",
        url: "https://livingwage.mit.edu/",
        type: "tool",
        description: "Estimates the cost of living by place in the United States."
      }
    ]
  },
  {
    id: "step-5-4",
    phaseId: "phase-5",
    stepNumber: "5.4",
    title: "Respectful Negotiation & Responding to Offers",
    shortTitle: "Negotiation",
    subtitle: "Ask politely, decide on time and decline gracefully",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Accept the best offer in writing, and keep every professor's goodwill.",
    description:
      "Where rules allow it, you can ask politely about start date, relocation support, summer funding or equipment. Many places have fixed salaries, so focus on terms that can change. In North America many universities follow a common acceptance date in April; check the date of each offer.",
    checklist: [
      {
        id: "c-5-4-1",
        task: "Know What Can Change",
        detail: "Ask what is fixed by rules and what the group can adjust, such as start date or conference travel."
      },
      {
        id: "c-5-4-2",
        task: "Ask Politely and in Writing",
        detail: "Send a short email that thanks them, states your question and gives a reason."
      },
      {
        id: "c-5-4-3",
        task: "Decide by the Deadline",
        detail: "Respond before the stated date and accept only one offer once you have decided."
      },
      {
        id: "c-5-4-4",
        task: "Decline with Thanks",
        detail: "Tell the other professors early and thank them. The research community is small."
      }
    ],
    proTips: [
      "Get the final terms in writing before you decline other offers.",
      "Never claim an offer you do not have."
    ],
    commonPitfalls: [
      "Accepting two offers and withdrawing later.",
      "Ignoring emails from professors who gave you an offer."
    ],
    deliverable: "A signed or confirmed acceptance and polite decline emails sent.",
    resources: [
      {
        title: "Council of Graduate Schools: Resolution on Graduate Scholars",
        url: "https://cgsnet.org/",
        type: "official",
        description: "Explains the common April acceptance date used by many US graduate programmes."
      }
    ]
  }
];
