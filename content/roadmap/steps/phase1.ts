import type { RoadmapStep } from "@/modules/roadmap";

export const phase1Steps: RoadmapStep[] = [
  {
    id: "step-1-1",
    phaseId: "phase-1",
    stepNumber: "1.1",
    title: "Fast-Track AI Publication Strategy (Workshops, Tiny Papers & arXiv)",
    shortTitle: "Publication Fast-Track",
    subtitle: "Navigate peer review cycles and release verifiable preprints that validate your scientific ability",
    duration: "16 Weeks",
    priority: "Crucial",
    keyObjective: "Secure at least one citable, peer-reviewed workshop paper or verified arXiv preprint in an established AI subfield before application deadlines.",
    description: "In machine learning admissions, an applicant with a citable paper or well-received preprint is immediately placed in the top 5% review pile. Understand how conference workshop tracks offer the fastest, highest-yield validation.",
    checklist: [
      {
        id: "c-1-1-1",
        task: "Target Top Conference Workshop Deadlines",
        detail: "Submit 4-to-6 page extended abstracts to workshops at NeurIPS, ICML, ICLR, or CVPR (review cycles are typically 4–6 weeks)."
      },
      {
        id: "c-1-1-2",
        task: "Leverage the ICLR Tiny Papers Track",
        detail: "Consider the ICLR Tiny Papers track (2-page format) for clear, focused algorithmic or empirical discoveries."
      },
      {
        id: "c-1-1-3",
        task: "Execute the arXiv Preprint Release",
        detail: "Upload your finalized draft to arXiv.org under CS.LG, CS.AI, or CS.CV to establish timestamped priority and a permanent citable DOI."
      },
      {
        id: "c-1-1-4",
        task: "Solicit Constructive Feedback on OpenReview",
        detail: "Engage transparently with reviewer comments and upload revised PDF versions showing scientific maturity."
      }
    ],
    proTips: [
      "Writing a high-quality empirical study or a rigorous benchmark comparing 10 open-source models under consistent evaluation metrics is one of the highest-probability workshop paper strategies.",
      "Always link the arXiv preprint URL directly in the header of your CV and in your cold outreach emails to PIs."
    ],
    commonPitfalls: [
      "Waiting for 18-month journal review cycles to complete before applying to graduate school; computer science relies almost exclusively on conference deadlines.",
      "Uploading low-quality, half-baked drafts to arXiv—remember that preprints are permanent and faculty will read your text."
    ],
    deliverable: "An accepted workshop paper or an active, citable arXiv.org preprint with clean mathematical formulation and benchmark figures.",
    resources: [
      {
        title: "arXiv.org - Computer Science Repository",
        url: "https://arxiv.org/corr",
        type: "database",
        description: "The primary global preprint server for modern AI and Computer Science research."
      },
      {
        title: "OpenReview.net",
        url: "https://openreview.net/",
        type: "database",
        description: "Public peer review platform hosting submissions for NeurIPS, ICLR, and leading AI venues."
      }
    ]
  },
  {
    id: "step-1-2",
    phaseId: "phase-1",
    stepNumber: "1.2",
    title: "Open-Source Artifacts: GitHub, Hugging Face & Interactive Demos",
    shortTitle: "Open-Source Portfolio",
    subtitle: "Package your research into clean code repositories and live web demos that faculty can test in seconds",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Demonstrate exceptional software craftsmanship and open science reproducibility through GitHub and Hugging Face assets.",
    description: "Faculty routinely click GitHub and Hugging Face links while evaluating applications. A clean, starred repository with clear setup instructions and model checkpoints acts as irrefutable proof of your coding competence.",
    checklist: [
      {
        id: "c-1-2-1",
        task: "Build the Gold-Standard GitHub README",
        detail: "Include a clear architecture diagram, installation steps, pre-trained weight download links, and one-line evaluation bash scripts."
      },
      {
        id: "c-1-2-2",
        task: "Upload Checkpoints & Datasets to Hugging Face",
        detail: "Host fine-tuned model checkpoints and formatted datasets on the Hugging Face Hub with detailed model cards."
      },
      {
        id: "c-1-2-3",
        task: "Deploy an Interactive Gradio Web Demo",
        detail: "Build a zero-installation Gradio or Streamlit web demo on Hugging Face Spaces allowing anyone to test model inputs in real time."
      },
      {
        id: "c-1-2-4",
        task: "Disseminate on Technical Communities",
        detail: "Share your release on Reddit r/MachineLearning, Twitter/X, and technical Discord communities to gain organic engagement and stars."
      }
    ],
    proTips: [
      "Include a quick-start Google Colab button badge at the top of your GitHub README allowing professors to run your inference with a single click.",
      "Add a 'Citation' BibTeX block at the bottom of your README so other researchers can cite your repository."
    ],
    commonPitfalls: [
      "Leaving hardcoded local file paths (e.g., `C:/Users/name/Desktop/data`) in your public code, breaking reproducibility for everyone else.",
      "Not providing a clean `environment.yml` or `requirements.txt` with pinned library versions."
    ],
    deliverable: "A polished public GitHub repository (with documentation and reproducible evaluation script) + active Hugging Face Space demo.",
    resources: [
      {
        title: "Hugging Face Spaces - Build & Host ML Demos",
        url: "https://huggingface.co/spaces",
        type: "tool",
        description: "Host machine learning applications and interactive Gradio apps for free."
      },
      
    ]
  },
  {
    id: "step-1-3",
    phaseId: "phase-1",
    stepNumber: "1.3",
    title: "Standardized Testing Strategy (GRE Realities & TA English Benchmarks)",
    shortTitle: "Standardized Testing",
    subtitle: "Satisfy mandatory spoken English requirements for Teaching Assistantships while navigating GRE waivers",
    duration: "6 Weeks",
    priority: "Crucial",
    keyObjective: "Achieve the strict spoken English test thresholds required by US/Canadian state laws for funded Teaching Assistantships (GTA) while skipping unnecessary exams.",
    description: "Most top Computer Science departments have abolished the GRE, but spoken English requirements remain legally enforced. Understanding this distinction prevents wasted prep time and protects your first-year funding.",
    checklist: [
      {
        id: "c-1-3-1",
        task: "Audit GRE Requirements by Program",
        detail: "Verify which target CS departments are test-blind. Strike out GRE preparation for MIT, Stanford, Berkeley, CMU, UW, UIUC, and Michigan unless a specific safe school requires it."
      },
      {
        id: "c-1-3-2",
        task: "Lock in the IELTS Speaking >= 8.0 Benchmark",
        detail: "If taking IELTS Academic, focus heavily on the Speaking section to hit Band 8.0 (Min 7.5 overall) for automatic graduate teaching eligibility."
      },
      {
        id: "c-1-3-3",
        task: "Lock in the TOEFL Speaking >= 26/30 Benchmark",
        detail: "If taking TOEFL iBT, target Speaking >= 26/30 (Min 100 overall) to avoid mandatory remedial ESL classes and secure GTA appointment."
      },
      {
        id: "c-1-3-4",
        task: "Request English Medium of Instruction (EMI) Waivers",
        detail: "If your undergraduate degree was fully taught in English, check if target universities grant automatic language exam exemptions."
      }
    ],
    proTips: [
      "If your TOEFL Speaking is 24 or 25, or IELTS Speaking is 7.5, you may be restricted solely to Graduate Research Assistantships (GRA), meaning if your professor loses grant funding, you cannot fall back on department teaching pay.",
      "Practice spontaneous technical explanation: describing a binary search tree or neural backprop in 60 seconds without filler words."
    ],
    commonPitfalls: [
      "Spending 4 months studying for the GRE at the expense of writing papers or code, only to apply to departments that do not even look at GRE scores.",
      "Assuming high Reading/Writing scores compensate for a sub-26 Speaking score on the TOEFL."
    ],
    deliverable: "Official test report form meeting or exceeding the minimum teaching assistantship spoken benchmarks (TOEFL Speaking >= 26 or IELTS Speaking >= 8.0).",
    resources: [
      {
        title: "ETS TOEFL iBT Official Test Prep",
        url: "https://www.ets.org/toefl.html",
        type: "official",
        description: "Official TOEFL exam specifications, practice materials, and score delivery."
      },
      {
        title: "IELTS Academic Official Resources",
        url: "https://www.ielts.org/",
        type: "official",
        description: "Official band score descriptors and speaking assessment rubrics."
      }
    ]
  }
];
