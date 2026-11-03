import type { RoadmapStep } from "@/modules/roadmap";

export const phase3Steps: RoadmapStep[] = [
  {
    id: "step-3-1",
    phaseId: "phase-3",
    stepNumber: "3.1",
    title: "Engineering the Technical AI Statement of Purpose (SOP)",
    shortTitle: "Technical SOP Architecture",
    subtitle: "Draft a research manifesto that proves intellectual depth and precise alignment with target faculty",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Produce an academic SOP that reads like a collaborative research proposal rather than a generic undergraduate personal essay.",
    description: "The AI Statement of Purpose is reviewed by faculty members who spend an average of 90 seconds reading your document. It must quickly establish your research vision, your technical battle scars, and your exact fit with target faculty.",
    checklist: [
      {
        id: "c-3-1-1",
        task: "Structure Movement 1: The Incisive Technical Hook",
        detail: "Skip childhood stories. Begin directly with the algorithmic bottleneck or theoretical paradox driving your research."
      },
      {
        id: "c-3-1-2",
        task: "Structure Movement 2: Mathematical Foundations",
        detail: "Demonstrate formal coursework and theoretical mastery in probability, optimization, or discrete math."
      },
      {
        id: "c-3-1-3",
        task: "Structure Movement 3: In-Depth Empirical Deep-Dive",
        detail: "Dedicate 2 paragraphs to in-depth research: hypothesis, architectural roadblock, mathematical resolution, and quantitative result."
      },
      {
        id: "c-3-1-4",
        task: "Structure Movement 4: Faculty Synergy by Name",
        detail: "Explicitly name 2–3 faculty members and describe how your skillset bridges their current grant questions."
      },
      {
        id: "c-3-1-5",
        task: "Structure Movement 5: Long-Term Scientific Contribution",
        detail: "Articulate your 5-to-10 year objective (e.g., tenure-track faculty, frontier AI research scientist)."
      }
    ],
    proTips: [
      "Use boldface typography sparingly for key metrics (e.g., 'achieving a 4.2% gain on HumanEval without fine-tuning') so skim-readers catch your accomplishments immediately.",
      "Customize Section 4 for every single university—never send an SOP mentioning 'Professor X' to a different department."
    ],
    commonPitfalls: [
      "Using flowery language or cliches like 'Since the dawn of computer science, algorithms have fascinated me'.",
      "Listing courses you took without explaining the independent projects or research questions you pursued in them."
    ],
    deliverable: "Finalized 2-page (1,000–1,200 words) technical Statement of Purpose, tailored for each target institution.",
    resources: [
      {
        title: "Writing a Statement of Purpose (MIT EECS Communication Lab)",
        url: "https://mitcommlab.mit.edu",
        type: "guide",
        description: "Official MIT EECS guide and rubrics for writing graduate research statements."
      }
    ]
  },
  {
    id: "step-3-2",
    phaseId: "phase-3",
    stepNumber: "3.2",
    title: "Formatting the Modern LaTeX AI Academic CV",
    shortTitle: "LaTeX Academic CV",
    subtitle: "Format a clean, minimalist 2-page CV prioritizing peer-reviewed publications, preprints, and open-source stars",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Create a modern, machine-readable academic curriculum vitae that highlights your publications, open-source repositories, and technical engineering stack.",
    description: "Never use graphical, multi-column Canva templates for graduate admissions. AI admissions committees expect minimalist LaTeX typography (e.g., Awesome-CV, ModernCV) with clickable hyperlinks to papers, repositories, and models.",
    checklist: [
      {
        id: "c-3-2-1",
        task: "Header with Direct Academic Links",
        detail: "Include your name, email, GitHub URL, Google Scholar profile, Hugging Face handle, and personal academic website."
      },
      {
        id: "c-3-2-2",
        task: "Structured Publications & Preprints Section",
        detail: "List full citations with DOIs. Highlight your name in boldface and indicate whether papers are conference articles, workshops, or preprints."
      },
      {
        id: "c-3-2-3",
        task: "Open-Source Projects with Metrics",
        detail: "List repositories with GitHub star counts, brief technical descriptions, and links to interactive demos."
      },
      {
        id: "c-3-2-4",
        task: "Comprehensive Technical Stack",
        detail: "Group by: Languages (Python, C++, CUDA), Frameworks (PyTorch, JAX, Hugging Face, DeepSpeed), Systems (Slurm, Docker, Linux, Triton)."
      }
    ],
    proTips: [
      "Use the Google XYZ action-bullet formula: 'Accomplished [X], as measured by [Y], by doing [Z]'.",
      "Ensure all hyperlinks (arXiv, GitHub, Hugging Face) are styled cleanly and work correctly in PDF format."
    ],
    commonPitfalls: [
      "Including headshot photos, marital status, or full home addresses (standard in industry resumes in some countries, but strictly avoided in US/Canadian academic CVs).",
      "Using subjective rating bars like 'Python: 90%' or 'PyTorch: 5 stars'—academic CVs list concrete tools, not arbitrary percentages."
    ],
    deliverable: "Compiled 2-page LaTeX PDF Academic CV hosted publicly on your personal website and GitHub.",
    resources: [
      {
        title: "Overleaf - Academic CV Templates",
        url: "https://www.overleaf.com/gallery/tagged/cv",
        type: "tool",
        description: "Collection of clean, battle-tested LaTeX templates for academic and research resumes."
      }
    ]
  },
  {
    id: "step-3-3",
    phaseId: "phase-3",
    stepNumber: "3.3",
    title: "Securing High-Impact Letters of Recommendation (LORs)",
    shortTitle: "LOR Strategy & Brag Sheet",
    subtitle: "Equip actively publishing AI mentors with structured brag sheets to secure enthusiastic, detailed endorsements",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Obtain 3 confidential letters of recommendation from researchers who can speak in granular detail about your independence, research resilience, and technical depth.",
    description: "In AI graduate admissions, letters of recommendation carry immense weight. A letter from an actively publishing AI researcher who writes 'This student is in the top 1% of researchers I have mentored and operates at the level of a 2nd-year PhD student' guarantees serious committee evaluation.",
    checklist: [
      {
        id: "c-3-3-1",
        task: "Select Active Publishing Mentors",
        detail: "Prioritize professors who have published in top venues (NeurIPS/ICLR/CVPR/ACL) and supervised your research directly."
      },
      {
        id: "c-3-3-2",
        task: "Prepare the Recommender Brag Sheet",
        detail: "Create a 1-page summary of your contributions under their mentorship, including specific hurdles you solved and papers co-authored."
      },
      {
        id: "c-3-3-3",
        task: "Provide Deadlines & Program Table",
        detail: "Give recommenders a clean spreadsheet listing universities, program titles, exact deadlines, and portal submission links."
      },
      {
        id: "c-3-3-4",
        task: "Always Waive Your Inspection Rights",
        detail: "Check the box: 'I waive my right to access this recommendation letter.' Unwaived letters are systematically discounted by committees."
      }
    ],
    proTips: [
      "Ask your professors at least 6–8 weeks before the earliest December deadline. Follow up politely 2 weeks prior with a gentle reminder.",
      "If a recommender asks you to draft the letter for them, write it objectively using specific technical anecdotes rather than vague adjectives."
    ],
    commonPitfalls: [
      "Asking a company manager from an unrelated non-tech internship or a humanities professor who cannot evaluate your machine learning aptitude.",
      "Failing to waive FERPA rights, which immediately raises red flags for admissions committees."
    ],
    deliverable: "Confirmed commitments from 3 research recommenders equipped with finalized Brag Sheets and institutional submission matrices.",
    resources: [
      {
        title: "FERPA and Letters of Recommendation Explained",
        url: "https://studentprivacy.ed.gov/",
        type: "guide",
        description: "Official guide on recommendation privacy rights and institutional confidentiality."
      }
    ]
  },
  {
    id: "step-3-4",
    phaseId: "phase-3",
    stepNumber: "3.4",
    title: "Crafting the Doctoral Research Proposal & Compute Budget",
    shortTitle: "Doctoral Research Proposal",
    subtitle: "Draft a formal project proposal with realistic compute requirements for European, UK, and Asian programs",
    duration: "4 Weeks",
    priority: "Recommended",
    keyObjective: "Develop a rigorous 3-to-4 page research proposal required for European (ELLIS, Max Planck, ETH), UK, and Asian (MEXT, CSC) doctoral applications.",
    description: "Unlike US programs that often assign projects after first-year rotations, European and Asian doctoral programs require applicants to propose a concrete 3-year research plan, complete with baseline methodologies, risk mitigation, and compute resource requirements.",
    checklist: [
      {
        id: "c-3-4-1",
        task: "Abstract & Problem Statement",
        detail: "Summarize the technical gap, proposed methodology, and anticipated breakthroughs in 250 words."
      },
      {
        id: "c-3-4-2",
        task: "Literature Gap & Theoretical Novelty",
        detail: "Demonstrate why existing SOTA models fail and explain your architectural or algorithmic hypothesis."
      },
      {
        id: "c-3-4-3",
        task: "Experimental Plan & Compute Allocation",
        detail: "Specify datasets, evaluation protocols, and realistic compute requirements (e.g., 'Estimated 1,200 A100 GPU hours for training and validation runs')."
      },
      {
        id: "c-3-4-4",
        task: "Quarterly Milestone Gantt Chart",
        detail: "Map out Years 1, 2, and 3 into clear quarterly milestones with target conference submission deadlines."
      }
    ],
    proTips: [
      "Align your proposed methodology with the host institute's compute infrastructure (e.g., referencing CSCS supercomputing for ETH Zurich or JUWELS for German institutes).",
      "Include a 'Risks and Alternative Approaches' section—this demonstrates mature scientific planning."
    ],
    commonPitfalls: [
      "Proposing an unrealistically vast project (like 'Solving General Intelligence across all modalities in 3 years') instead of a focused, publishable investigation.",
      "Failing to cite the target laboratory's recent papers in your literature review."
    ],
    deliverable: "Completed 3-to-4 page doctoral research proposal formatted in LaTeX with BibTeX citations and a milestone Gantt chart.",
    resources: [
      {
        title: "How to Write a PhD Research Proposal (Oxford CS)",
        url: "https://www.cs.ox.ac.uk/admissions/graduate/",
        type: "guide",
        description: "Guidelines and expectations for doctoral research proposals in computer science."
      }
    ]
  }
];
