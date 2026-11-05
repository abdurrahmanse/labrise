import type { RoadmapStep } from "@/modules/roadmap";

// Phase 2: find and reach research groups. Written for engineering research applicants in any department.
export const phase2Steps: RoadmapStep[] = [
  {
    id: "step-2-1",
    phaseId: "phase-2",
    stepNumber: "2.1",
    title: "Mapping Active Research Groups via Publication & Grant Databases",
    shortTitle: "Group Mapping",
    subtitle: "Find labs that publish in your niche and hold funding to hire students",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Build a list of 25–35 professors whose recent work matches yours and whose groups can fund a student.",
    description:
      "A university's name says little about a particular lab. A mid-ranked university can have the strongest group in your niche. Use recent papers to find active groups, then check grant databases to see who holds funding that can pay a research student.",
    checklist: [
      {
        id: "c-2-1-1",
        task: "Search by Topic, Not by Ranking",
        detail: "Use Google Scholar or OpenAlex to find authors who published in your niche in the last two years."
      },
      {
        id: "c-2-1-2",
        task: "Audit Their Funding",
        detail: "Search the NSF Award Search, the EU CORDIS database or the national council of the country for active grants."
      },
      {
        id: "c-2-1-3",
        task: "Read the Lab Website",
        detail: "Look for open positions, current students, recent graduates and where they went next."
      },
      {
        id: "c-2-1-4",
        task: "Build the Tiered List",
        detail: "Aim for about three dream, five target and two safer groups, and record why each one fits."
      }
    ],
    proTips: [
      "Newly funded projects often hire quickly, so a recent grant is a good sign.",
      "Check where former students went: it shows whether the lab prepares people for the career you want."
    ],
    commonPitfalls: [
      "Choosing only by university prestige.",
      "Writing to a professor who is near retirement or has no recent papers."
    ],
    deliverable: "A spreadsheet of 25–35 professors with university, niche, recent papers, funding and a fit note.",
    resources: [
      {
        title: "NSF Award Search",
        url: "https://www.nsf.gov/awardsearch/",
        type: "database",
        description: "Search active US research grants by topic, institution or investigator."
      },
      {
        title: "CORDIS: EU Research Results",
        url: "https://cordis.europa.eu/",
        type: "database",
        description: "Find EU-funded research projects and the groups that run them."
      }
    ]
  },
  {
    id: "step-2-2",
    phaseId: "phase-2",
    stepNumber: "2.2",
    title: "Prioritizing Junior (Assistant) Professors with Startup Packages",
    shortTitle: "Junior Professors",
    subtitle: "Early-career professors are building groups and often have funds to hire",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Add early-career professors to your list, because they often have positions and time to supervise.",
    description:
      "Assistant professors usually receive startup funding from the university and need students to build their groups. They tend to reply faster and spend more time with each student. Senior professors are valuable too, but they receive far more email, so mix both.",
    checklist: [
      {
        id: "c-2-2-1",
        task: "Identify Early-Career Faculty",
        detail: "Look at faculty pages for people who joined in the last five years, and at the date of their first independent papers."
      },
      {
        id: "c-2-2-2",
        task: "Check for Hiring Signals",
        detail: "Look for a news post about a new grant, an open position or an 'join us' page on the lab website."
      },
      {
        id: "c-2-2-3",
        task: "Balance the List",
        detail: "Keep a mix of early-career and established professors, so that you do not depend on one type."
      }
    ],
    proTips: [
      "A professor who thanks a new grant in recent papers is likely to be hiring.",
      "Ask current students how much time the professor gives to each of them."
    ],
    commonPitfalls: [
      "Ignoring junior professors because their university is less famous.",
      "Writing only to very senior professors who receive hundreds of emails."
    ],
    deliverable: "Your professor list marked with career stage and hiring signals.",
    resources: [
      {
        title: "Council of Graduate Schools",
        url: "https://cgsnet.org/",
        type: "official",
        description: "Information on graduate admissions practices and resolutions in the United States."
      }
    ]
  },
  {
    id: "step-2-3",
    phaseId: "phase-2",
    stepNumber: "2.3",
    title: "The 5-Point Cold Email Outreach Campaign",
    shortTitle: "Cold Email Campaign",
    subtitle: "Send short, specific emails that show you have read the professor's work",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Send a personal email to each professor on your list and get replies you can act on.",
    description:
      "A good cold email is short, specific and easy to answer. Open with one precise point from a recent paper, show how your own work connects, attach your CV and make one clear request. Send it six to ten months before the deadline and follow up once.",
    checklist: [
      {
        id: "c-2-3-1",
        task: "Write a Clear Subject Line",
        detail: "Name the degree, the year and your niche, for example 'Prospective PhD student: [your topic]'."
      },
      {
        id: "c-2-3-2",
        task: "Show You Read Their Work",
        detail: "Mention one specific result or method from a recent paper and one honest question or link to your own work."
      },
      {
        id: "c-2-3-3",
        task: "Link Your Evidence",
        detail: "State your related project, link your paper or report and attach a two-page CV."
      },
      {
        id: "c-2-3-4",
        task: "Make One Request and Follow Up Once",
        detail: "Ask whether the group expects openings, and send one polite reminder after about a week or two."
      }
    ],
    proTips: [
      "Keep the email under 200 words so it fits on a phone screen.",
      "Track every email, reply and follow-up date in the professor tracker."
    ],
    commonPitfalls: [
      "Sending one template to everyone without changing the details.",
      "Opening with flattery instead of a specific point about the work."
    ],
    deliverable: "A set of personalised emails sent, with a tracker showing replies and follow-ups.",
    resources: [
      {
        title: "How to Email a Professor (Philip Guo)",
        url: "https://pgbovine.net/email-professors.htm",
        type: "guide",
        description: "Practical advice on writing to professors about research positions."
      }
    ]
  },
  {
    id: "step-2-4",
    phaseId: "phase-2",
    stepNumber: "2.4",
    title: "Acing the Professor 15-Minute Video Screening Call",
    shortTitle: "Screening Call",
    subtitle: "Prepare for a short call that tests clarity, autonomy and fit",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Explain your research interests clearly and ask questions that show you understand the group.",
    description:
      "When a professor invites you to a short call, they are judging how clearly you think, how well you know the area and whether you would work well in the group. Prepare a two-minute summary of your best project and a list of questions about the lab.",
    checklist: [
      {
        id: "c-2-4-1",
        task: "Prepare a Two-Minute Summary",
        detail: "Practise explaining your best project: the problem, your method, your result and what you learned."
      },
      {
        id: "c-2-4-2",
        task: "Re-read Their Recent Papers",
        detail: "Be ready to discuss one paper and to ask a thoughtful question about it."
      },
      {
        id: "c-2-4-3",
        task: "Prepare Questions About the Lab",
        detail: "Ask about supervision style, funding length, equipment access and where former students went."
      }
    ],
    proTips: [
      "Send a short thank-you email within a day and mention one thing you learned.",
      "Test your camera, microphone and connection before the call."
    ],
    commonPitfalls: [
      "Talking only about grades instead of your research.",
      "Asking questions that the lab website already answers."
    ],
    deliverable: "A one-page call sheet with your summary, key paper notes and questions.",
    resources: [
      {
        title: "How to Give a Great Research Talk (Simon Peyton Jones)",
        url: "https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/",
        type: "guide",
        description: "Advice on explaining research clearly, useful for any short technical conversation."
      }
    ]
  }
];
