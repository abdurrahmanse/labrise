import type { RoadmapStep } from "@/modules/roadmap";

// Phase 0: build the base. Written for engineering research applicants in any department.
export const phase0Steps: RoadmapStep[] = [
  {
    id: "step-0-1",
    phaseId: "phase-0",
    stepNumber: "0.1",
    title: "Mathematical & Analytical Foundations",
    shortTitle: "Math Foundations",
    subtitle: "Audit the calculus, linear algebra, differential equations, probability and numerical methods your field rests on",
    duration: "6–8 Weeks",
    priority: "Crucial",
    keyObjective: "Reach the analytical depth needed to model a system, derive its equations, and judge whether a numerical result can be trusted.",
    description:
      "Research groups in every engineering department expect applicants who can move from a physical problem to a mathematical model. Strong marks in the core mathematics courses, and the ability to explain the steps without a textbook, show that you are ready for research and not only for coursework.",
    checklist: [
      {
        id: "c-0-1-1",
        task: "Calculus & Linear Algebra",
        detail: "Be fluent in multivariable calculus, vector calculus, eigenvalues, matrix decompositions and their physical meaning."
      },
      {
        id: "c-0-1-2",
        task: "Differential Equations",
        detail: "Solve and interpret ordinary and partial differential equations, and know when a closed form exists and when you must go numerical."
      },
      {
        id: "c-0-1-3",
        task: "Probability & Statistics",
        detail: "Understand distributions, estimation, hypothesis tests, confidence intervals and the basics of measurement uncertainty."
      },
      {
        id: "c-0-1-4",
        task: "Numerical Methods & Optimisation",
        detail: "Know finite differences, root finding, numerical integration, convergence and error, and the basics of constrained optimisation."
      }
    ],
    proTips: [
      "Work through the problem sets of an open university course instead of only reading, and keep your solutions as proof of effort.",
      "In your statement of purpose, show one derivation or model you built yourself rather than listing course names."
    ],
    commonPitfalls: [
      "Relying on software to give answers without checking them against a hand estimate.",
      "Assuming a high GPA in applied courses replaces weak results in the core mathematics courses."
    ],
    deliverable: "A short self-audit: 20 solved problems across the four areas, with notes on where you were slow or wrong.",
    resources: [
      {
        title: "MIT OpenCourseWare: Linear Algebra (18.06)",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
        type: "guide",
        description: "Full lectures, problem sets and exams from a standard linear algebra course."
      },
      {
        title: "MIT OpenCourseWare: Differential Equations (18.03)",
        url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
        type: "guide",
        description: "A complete course on ordinary differential equations with practice material."
      }
    ]
  },
  {
    id: "step-0-2",
    phaseId: "phase-0",
    stepNumber: "0.2",
    title: "Technical Tools & Research Skills for Your Discipline",
    shortTitle: "Research Tools & Skills",
    subtitle: "Move from coursework tools to the instruments, software and habits a research group expects",
    duration: "8 Weeks",
    priority: "Crucial",
    keyObjective: "Be able to run an experiment or a simulation, analyse the data and document it so that someone else can repeat it.",
    description:
      "Professors want students who can start useful work in the first month. That means comfort with the standard tools of your department (laboratory instruments, CAD, simulation or finite element software, a programming language for analysis) and with the habits that make results repeatable: version control, a lab notebook and clear data handling.",
    checklist: [
      {
        id: "c-0-2-1",
        task: "Scientific Computing",
        detail: "Use Python or MATLAB to process data, fit models, plot results and automate repeated steps."
      },
      {
        id: "c-0-2-2",
        task: "Discipline Tools",
        detail: "Learn the main software or instruments of your field, for example CAD and finite element analysis, circuit simulation, process simulation or measurement systems."
      },
      {
        id: "c-0-2-3",
        task: "Reproducible Work",
        detail: "Keep code and analysis in version control, record settings and units, and store raw data separately from processed data."
      },
      {
        id: "c-0-2-4",
        task: "Scientific Writing Tools",
        detail: "Write with LaTeX or a similar tool, manage references with a reference manager, and make figures that can stand alone."
      }
    ],
    proTips: [
      "Pick one project from your degree and redo it as if for publication: clear method, units, uncertainty and a repeatable workflow.",
      "Read the methods section of two recent papers from your target lab and note which tools they use."
    ],
    commonPitfalls: [
      "Listing many tools on a CV without a project that shows you can use them.",
      "Keeping results only in spreadsheets with no record of how they were produced."
    ],
    deliverable: "One documented project that a stranger can repeat: data, code or design files, and a short methods note.",
    resources: [
      {
        title: "Software Carpentry Lessons",
        url: "https://software-carpentry.org/lessons/",
        type: "guide",
        description: "Free lessons on the command line, version control and programming for researchers."
      },
      {
        title: "Good Enough Practices in Scientific Computing",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510",
        type: "paper",
        description: "A short, practical paper on organising data, code and projects."
      }
    ]
  },
  {
    id: "step-0-3",
    phaseId: "phase-0",
    stepNumber: "0.3",
    title: "Direct PhD vs. Research Master's Decision Matrix",
    shortTitle: "Degree Route Selection",
    subtitle: "Choose between a direct doctorate and a research Master's based on entry rules and funding",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Pick the degree route that gives you funding and the strongest next step for a research career.",
    description:
      "Entry rules differ by country. North America often admits students to a PhD straight after a Bachelor's degree, while much of Europe and Asia expects a Master's first. A research Master's can be the safer route when your profile has gaps, and it can be funded through assistantships, fellowships or national scholarships.",
    checklist: [
      {
        id: "c-0-3-1",
        task: "Check Entry Rules",
        detail: "For each target country, note whether a Master's is required for the PhD and how long each degree lasts."
      },
      {
        id: "c-0-3-2",
        task: "Compare Funding",
        detail: "List which routes pay tuition and a stipend, which pay only tuition, and which are self-funded."
      },
      {
        id: "c-0-3-3",
        task: "Judge Your Profile",
        detail: "Be honest about research output, GPA and letters, and decide whether a research Master's would strengthen them."
      }
    ],
    proTips: [
      "Ask professors in your target country which route their own students took.",
      "Keep one backup route in the plan, such as a funded research Master's, in case direct PhD offers do not arrive."
    ],
    commonPitfalls: [
      "Taking a paid coursework Master's when a funded research route was available.",
      "Assuming a PhD needs a Master's everywhere, or that it never does."
    ],
    deliverable: "A one-page comparison of two or three routes with entry rules, length and funding for each.",
    resources: [
      {
        title: "DAAD: Study and Research in Germany",
        url: "https://www.daad.de/en/study-and-research-in-germany/",
        type: "official",
        description: "Official overview of degree routes, funding and admission rules in Germany."
      }
    ]
  },
  {
    id: "step-0-4",
    phaseId: "phase-0",
    stepNumber: "0.4",
    title: "Defining Your Research Problem & Niche",
    shortTitle: "Research Problem Niche",
    subtitle: "Move from a broad department to a specific problem you can describe in one paragraph",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Be able to name a research area, a question inside it and two or three groups that work on it.",
    description:
      "A focused interest is what separates a research applicant from a general applicant. Read review papers in your department, find the open questions, and connect them to your own project or thesis. A clear niche makes your emails, statement of purpose and professor list much stronger.",
    checklist: [
      {
        id: "c-0-4-1",
        task: "Survey the Field",
        detail: "Read three recent review papers and note the open problems and the groups cited most often."
      },
      {
        id: "c-0-4-2",
        task: "Link to Your Own Work",
        detail: "Connect one open problem to a project, thesis or internship you have done."
      },
      {
        id: "c-0-4-3",
        task: "Write the One-Paragraph Statement",
        detail: "Describe the problem, why it matters and what you would try, in about 120 words."
      },
      {
        id: "c-0-4-4",
        task: "Build a Reading Matrix",
        detail: "Track papers by topic, method and group so you can compare labs before you write to them."
      }
    ],
    proTips: [
      "Ask a former supervisor to read your paragraph and tell you what is vague.",
      "Choose a niche broad enough to fit several labs, and narrow it later with the professor."
    ],
    commonPitfalls: [
      "Naming a trending topic with no link to anything you have done.",
      "Choosing a niche so narrow that only one lab in the world fits."
    ],
    deliverable: "A one-paragraph research statement and a table of ten papers with their authors' groups.",
    resources: [
      {
        title: "Google Scholar",
        url: "https://scholar.google.com/",
        type: "database",
        description: "Find review papers, see who cites whom and follow authors' recent work."
      },
      {
        title: "OpenAlex",
        url: "https://openalex.org/",
        type: "database",
        description: "Open index of papers, authors and institutions across all research fields."
      }
    ]
  },
  {
    id: "step-0-5",
    phaseId: "phase-0",
    stepNumber: "0.5",
    title: "Lab Resources & Research Environment Strategy",
    shortTitle: "Lab Resources",
    subtitle: "Learn what equipment, software and support a funded research place should give you",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Know which resources you can expect from a funded lab, so you can judge offers and plan your own project.",
    description:
      "A funded research student does not pay for research equipment, consumables or software licences. The group provides them through its grants, but groups differ a lot. Before you apply, learn what facilities a lab has, what is shared with other groups and what you would have to arrange yourself.",
    checklist: [
      {
        id: "c-0-5-1",
        task: "List What You Need",
        detail: "Write down the instruments, software, computing, workshop access or field sites your planned project would use."
      },
      {
        id: "c-0-5-2",
        task: "Check Lab Websites",
        detail: "Look for equipment lists, core facilities and shared infrastructure on department and lab pages."
      },
      {
        id: "c-0-5-3",
        task: "Plan Questions",
        detail: "Prepare questions about access, waiting times and who pays for materials, to ask a professor later."
      }
    ],
    proTips: [
      "Ask current students, not only the professor, how easy it is to book equipment.",
      "Look at the acknowledgments of recent papers to see which facilities and grants were used."
    ],
    commonPitfalls: [
      "Accepting a place without asking whether the equipment you need is available.",
      "Assuming a famous university always has the right facility for your project."
    ],
    deliverable: "A short resource checklist for your project and a list of questions to ask each professor.",
    resources: [
      {
        title: "Google Cloud Research Credits",
        url: "https://cloud.google.com/edu/researchers",
        type: "official",
        description: "Cloud computing credits for academic researchers, useful for computational projects."
      }
    ]
  }
];
