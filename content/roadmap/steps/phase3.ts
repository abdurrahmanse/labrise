import type { RoadmapStep } from "@/modules/roadmap";

// Phase 3: prepare documents. Written for engineering research applicants in any department.
export const phase3Steps: RoadmapStep[] = [
  {
    id: "step-3-1",
    phaseId: "phase-3",
    stepNumber: "3.1",
    title: "Writing the Research Statement of Purpose (SOP)",
    shortTitle: "Statement of Purpose",
    subtitle: "A focused story of your research experience, your question and why this group",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Write a statement that a professor can read in two minutes and see your fit for the group.",
    description:
      "Faculty read many statements quickly. Yours should open with your research focus, show two pieces of evidence from your own work, explain why this group and this university, and say what you plan to do after the degree. Keep it specific and honest.",
    checklist: [
      {
        id: "c-3-1-1",
        task: "Open with Your Research Focus",
        detail: "State your field and the question that interests you in the first paragraph, not a childhood story."
      },
      {
        id: "c-3-1-2",
        task: "Show Evidence from Your Work",
        detail: "Describe one or two projects: the problem, your method, your own contribution and the result."
      },
      {
        id: "c-3-1-3",
        task: "Explain the Fit",
        detail: "Name two or three faculty members and say how their recent work connects to your plans."
      },
      {
        id: "c-3-1-4",
        task: "State Your Goal",
        detail: "Say what you want to do after the degree, for example an academic career or industrial research."
      }
    ],
    proTips: [
      "Write a new version for each programme: a template with the names swapped is easy to spot.",
      "Ask someone outside your field to read it and tell you what was unclear."
    ],
    commonPitfalls: [
      "Repeating your CV instead of explaining your reasoning.",
      "Praising the university in general terms instead of naming specific research."
    ],
    deliverable: "A one- to two-page statement tailored for each target group.",
    resources: [
      {
        title: "MIT Communication Lab",
        url: "https://mitcommlab.mit.edu/",
        type: "guide",
        description: "Guides for writing application documents and research communication in science and engineering."
      }
    ]
  },
  {
    id: "step-3-2",
    phaseId: "phase-3",
    stepNumber: "3.2",
    title: "Formatting the Academic CV",
    shortTitle: "Academic CV",
    subtitle: "Two clean pages that show research, not a job résumé",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Produce a two-page academic CV with working links to your papers, reports and portfolio.",
    description:
      "An academic CV puts education, research experience and outputs first. Use a plain, readable layout without photos or decoration. Link your ORCID, papers and portfolio so a professor can check your work in one click.",
    checklist: [
      {
        id: "c-3-2-1",
        task: "Header and Contact Block",
        detail: "Include your name, email, ORCID, Google Scholar profile and personal page."
      },
      {
        id: "c-3-2-2",
        task: "Education with Details",
        detail: "List degrees in reverse order with the GPA and its scale, the thesis title and the supervisor."
      },
      {
        id: "c-3-2-3",
        task: "Research and Projects",
        detail: "For each item, state the problem, your method and the result in one or two lines."
      },
      {
        id: "c-3-2-4",
        task: "Skills Without Percentages",
        detail: "Group concrete tools and methods by type, and avoid rating bars or stars."
      }
    ],
    proTips: [
      "Use a standard LaTeX template or a clean word-processor layout, and export a text-searchable PDF.",
      "Keep one master CV and make a shorter version for each application."
    ],
    commonPitfalls: [
      "A multi-column graphic design that breaks in application systems.",
      "Listing duties of an internship instead of the research results."
    ],
    deliverable: "A two-page PDF CV with working links.",
    resources: [
      {
        title: "Overleaf: CV Templates",
        url: "https://www.overleaf.com/gallery/tagged/cv",
        type: "tool",
        description: "Free LaTeX templates for academic CVs."
      }
    ]
  },
  {
    id: "step-3-3",
    phaseId: "phase-3",
    stepNumber: "3.3",
    title: "Securing High-Impact Letters of Recommendation",
    shortTitle: "Recommendation Letters",
    subtitle: "Choose referees who know your research and give them what they need",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Get two or three strong letters from people who have supervised your research.",
    description:
      "Letters carry great weight in research admissions. The best letters come from professors who supervised your thesis or project and can describe your independence and potential. Ask six to eight weeks before the deadline and send each referee a short summary of your work.",
    checklist: [
      {
        id: "c-3-3-1",
        task: "Choose Referees Carefully",
        detail: "Pick people who saw your research up close, ideally academics who publish in your field."
      },
      {
        id: "c-3-3-2",
        task: "Ask Early and Politely",
        detail: "Ask six to eight weeks ahead, and let them say no if they cannot write a strong letter."
      },
      {
        id: "c-3-3-3",
        task: "Send a Summary Sheet",
        detail: "Give each referee your CV, statement, a list of deadlines and three points you hope they will mention."
      },
      {
        id: "c-3-3-4",
        task: "Track Submission",
        detail: "Check the portals, send a kind reminder before each deadline and thank them afterwards."
      }
    ],
    proTips: [
      "Remind referees of specific moments, such as a result or presentation, so their letter has concrete details.",
      "Give them each portal's deadline in one table."
    ],
    commonPitfalls: [
      "Asking a referee at the last minute.",
      "Using a famous name who barely knows you instead of a supervisor who does."
    ],
    deliverable: "Two or three referees confirmed, each with a summary sheet and a deadline table.",
    resources: [
      {
        title: "FERPA and Student Records (US Department of Education)",
        url: "https://studentprivacy.ed.gov/",
        type: "official",
        description: "Explains student record access rules that affect recommendation letters in the United States."
      }
    ]
  },
  {
    id: "step-3-4",
    phaseId: "phase-3",
    stepNumber: "3.4",
    title: "Crafting the Doctoral Research Proposal & Resource Plan",
    shortTitle: "Research Proposal",
    subtitle: "A short plan of the problem, method, timeline and resources",
    duration: "4 Weeks",
    priority: "Recommended",
    keyObjective: "Write a two- to four-page proposal that shows you can plan a research project.",
    description:
      "Many European and Asian programmes, and some funders, ask for a research proposal. It should state the problem, summarise what is already known, describe your method, give a realistic timeline and list the resources you would need, such as equipment, software or field access.",
    checklist: [
      {
        id: "c-3-4-1",
        task: "State the Question and Its Importance",
        detail: "Say what problem you will study and why it matters, in a short introduction."
      },
      {
        id: "c-3-4-2",
        task: "Summarise the Literature",
        detail: "Show what is known, what is missing and where your idea fits, citing recent work."
      },
      {
        id: "c-3-4-3",
        task: "Describe the Method and Timeline",
        detail: "Explain your approach, the risks and a plan by half-year milestones."
      },
      {
        id: "c-3-4-4",
        task: "List the Resources Needed",
        detail: "Name the equipment, software, data and facilities the project would use and where you expect to get them."
      }
    ],
    proTips: [
      "Match the length and format the programme asks for exactly.",
      "Ask a professor to read the draft and tell you what is unrealistic."
    ],
    commonPitfalls: [
      "A plan so broad it could be a whole career.",
      "Ignoring risks, so the project reads as naive."
    ],
    deliverable: "A proposal of the length the programme requests, with a milestone timeline and a resource list.",
    resources: [
      {
        title: "University of Oxford: Graduate Admissions",
        url: "https://www.ox.ac.uk/admissions/graduate",
        type: "official",
        description: "Official guidance on graduate applications, including research proposals."
      }
    ]
  }
];
