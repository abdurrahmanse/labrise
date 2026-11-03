import { MultiPageData } from "./types";

export const homePageData: MultiPageData = {
  pageId: "home",
  slug: "/",
  title: "100% Fully Funded AI & Machine Learning Postgraduate Roadmap",
  metaDescription: "The canonical zero-to-landing blueprint for Computer Science, AI, and Machine Learning students securing 100% fully funded PhD and Master's research assistantships abroad.",
  hero: {
    badge: "100% Full-Ride Master's & PhD Computer Science Roadmap",
    title: "The Fully Funded Computer Science",
    highlightWord: "Scholarship Roadmap",
    subtitle: "The canonical end-to-end blueprint for Computer Science students: build a high-impact research profile, identify top universities and labs, connect with funded professors, craft high-yield cold outreach, and secure 100% full-ride funding abroad.",
    primaryCta: { label: "Explore Step-by-Step Roadmap", href: "/roadmap" },
    secondaryCta: { label: "What Profile Looks Like", href: "#cs-profile-blueprint" },
    tertiaryCta: { label: "Explore Country Guides", href: "/countries" }
  },
  sections: [
    {
      id: "funding-standard",
      sectionNumber: 1,
      badge: "The Full-Ride Charter",
      title: "The Golden Standard of 100% Full Funding in AI",
      subtitle: "Why you should never pay for a graduate research degree in Computer Science",
      content: "Securing a funded graduate research seat (Master's by Research or PhD) in AI/ML is an intellectual hiring process. Universities, research councils, and national governments invest capital in researchers capable of generating conference publications, winning grants, and driving innovation.",
      highlights: [
        "100% Full Tuition Remission / Waiver throughout degree duration",
        "Guaranteed Monthly Living Stipend / Researcher Salary ($30,000–$50,000/year)",
        "Dedicated GPU Compute Access (NVIDIA A100/H100 clusters and cloud credits)",
        "Comprehensive University Health and Medical Insurance",
        "Conference Travel Grants for NeurIPS, ICML, ICLR, and CVPR",
        "High-Paying Summer Industry Internships ($10,000–$15,000/month at frontier AI labs)"
      ],
      dataPoints: [
        { label: "Tuition Coverage", value: "100%", sublabel: "Zero student debt" },
        { label: "Annual Living Stipend", value: "$30k - $52k", sublabel: "US / Canada / Europe" },
        { label: "GPU Cluster Access", value: "A100 / H100", sublabel: "Dedicated lab compute" },
        { label: "Summer Internships", value: "$10k - $15k/mo", sublabel: "DeepMind, FAIR, OpenAI" }
      ]
    },
    {
      id: "pipeline-overview",
      sectionNumber: 2,
      badge: "The 7-Phase Journey",
      title: "The Master Graduate Admissions Pipeline",
      subtitle: "From mathematical foundations to landing in your target AI laboratory",
      content: "A disciplined 24-month roadmap engineering every milestone of the postgraduate application campaign.",
      cards: [
        {
          title: "Phase 0: Math & Compute Foundations",
          description: "Establish rigorous linear algebra, matrix calculus, probability, and distributed PyTorch engineering.",
          tag: "18–24 Mo Before",
          icon: "Cpu",
          bulletPoints: ["Math diagnostic audit", "PyTorch & JAX mastery", "Define AI subfield problem", "Low-cost cloud GPU pipeline"]
        },
        {
          title: "Phase 1: Publication & Open-Source Artifacts",
          description: "Target NeurIPS/ICLR workshops, publish citable arXiv preprints, and deploy interactive Hugging Face Spaces.",
          tag: "12–18 Mo Before",
          icon: "FileCode",
          bulletPoints: ["Conference workshop fast-track", "GitHub reproducible repo", "Hugging Face model cards", "IELTS 8.0 / TOEFL 26+ speaking"]
        },
        {
          title: "Phase 2: Lab Targeting & PI Cold Outreach",
          description: "Filter CSRankings.org for funded labs and target junior Assistant Professors with startup packages.",
          tag: "9–12 Mo Before",
          icon: "Target",
          bulletPoints: ["CSRankings tiering (3-5-2)", "Track junior faculty grants", "5-point AI cold email formula", "15-minute Zoom screening calls"]
        },
        {
          title: "Phase 3: AI Graduate Dossier Engineering",
          description: "Draft a 5-movement technical Statement of Purpose (SOP), LaTeX academic CV, and research proposals.",
          tag: "6–9 Mo Before",
          icon: "FileSpreadsheet",
          bulletPoints: ["Technical research SOP", "LaTeX CV with metrics", "LOR Brag Sheet packages", "FERPA inspection rights waived"]
        },
        {
          title: "Phase 4: Priority Deadlines & Fee Waivers",
          description: "Submit all applications prior to Dec 1–15 Priority Fellowship Deadlines using fee waivers.",
          tag: "3–6 Mo Before",
          icon: "Send",
          bulletPoints: ["Departmental fee waivers", "Sealed transcript packages", "Dec 1–15 priority submission", "Recommender confirmations"]
        },
        {
          title: "Phase 5: Technical Defense & Stipend Math",
          description: "Defend your research via a 5-slide deck, answer live deep learning stress tests, and negotiate stipends.",
          tag: "1–3 Mo Before",
          icon: "ShieldCheck",
          bulletPoints: ["5-slide presentation defense", "STAR-L interview answers", "True net stipend calculation", "Signed GRA research contract"]
        },
        {
          title: "Phase 6: Visa, TAL Clearance & Onboarding",
          description: "Clear Technology Alert List (TAL) consular scrutiny with open-science letters and configure lab Slurm clusters.",
          tag: "0–3 Mo Before",
          icon: "Globe",
          bulletPoints: ["Form I-20 / CAS / EU contract", "Advisor TAL defense letter", "Multi-currency banking", "Lab Slurm workstation setup"]
        }
      ]
    },
    {
      id: "funding-models",
      sectionNumber: 3,
      badge: "Global Mechanisms",
      title: "The 4 Global Postgraduate Funding Architectures",
      subtitle: "Understand how research money flows into departments across North America, Europe, and Asia",
      content: "Each continent operates on distinct funding paradigms. Choosing the right mechanism maximizes your acceptance rate.",
      cards: [
        {
          title: "1. Departmental Assistantships (GRA / GTA)",
          description: "Standard model in the United States & Canada. Tuition is 100% waived in exchange for 20 hours/week of grant-backed laboratory research or undergraduate teaching.",
          tag: "USA & Canada",
          icon: "Briefcase",
          bulletPoints: [
            "Direct PhD from Bachelor's is the norm",
            "$30,000–$50,000 annual living stipend",
            "Summer research or industry internships",
            "Full health insurance subsidies"
          ]
        },
        {
          title: "2. Salaried Researcher Employment",
          description: "Standard model in Germany, Netherlands, Switzerland, and Scandinavia. PhD students are hired as salaried state university employees with pensions and social security.",
          tag: "Continental Europe",
          icon: "Building",
          bulletPoints: [
            "Zero tuition fees across public universities",
            "€40,000–€85,000 gross annual salary",
            "German TV-L E13 / Swiss SNF scales",
            "Requires completed Master's degree"
          ]
        },
        {
          title: "3. Flagship International Fellowships",
          description: "Prestigious multilateral grants funded by international development ministries and foundations. Covers tuition, monthly stipend, flights, and relocation allowances.",
          tag: "Global & Asia",
          icon: "Award",
          bulletPoints: [
            "Erasmus Mundus (€1,400/mo + tuition)",
            "Singapore SINGA (SGD $2,700–$3,200/mo)",
            "Japan MEXT (¥145,000/mo + airfare)",
            "Fulbright Foreign Student Fellowship"
          ]
        },
        {
          title: "4. Elite Institutional Trusts",
          description: "Endowed collegiate trusts at top universities worldwide funding the top 1% of doctoral scholars with generous maintenance allowances.",
          tag: "UK & US Elite",
          icon: "Crown",
          bulletPoints: [
            "Gates Cambridge (Full fees + £20,000/yr)",
            "Rhodes Oxford (Full fees + £19,000/yr)",
            "Stanford Knight-Hennessy Scholars",
            "Vanier Canada Graduate Scholarships ($50k/yr)"
          ]
        }
      ]
    },
    {
      id: "diagnostic-scorecard",
      sectionNumber: 4,
      badge: "Self-Assessment",
      title: "Applicant Diagnostic & Readiness Scorecard",
      subtitle: "Evaluate where your application stands across the 4 core AI research dimensions",
      content: "Before contacting faculty or spending money, audit your research capital, technical codebase maturity, academic record, and recommendation strength.",
      cards: [
        {
          title: "Research Capital",
          description: "Peer-reviewed workshop papers, conference oral/poster submissions, citable arXiv preprints, or honors undergraduate thesis.",
          tag: "Weight: 45%",
          bulletPoints: ["1+ citable preprint or workshop paper", "Clear problem formulation", "Rigorous ablation baselines"]
        },
        {
          title: "Technical Engineering Stack",
          description: "Production-grade PyTorch/JAX code, multi-GPU training experience, clean GitHub repositories, and interactive Hugging Face demos.",
          tag: "Weight: 25%",
          bulletPoints: ["Modular, reproducible code", "Weights on Hugging Face Hub", "WandB experiment tracking"]
        },
        {
          title: "Academic & Mathematical Rigor",
          description: "Upper-division coursework in linear algebra, multivariable calculus, probability, and optimization with upward grade trajectory.",
          tag: "Weight: 15%",
          bulletPoints: ["Core math courses with A/A+", "Calculus and proof intuition", "GRE Quant >= 167 (if submitted)"]
        },
        {
          title: "Recommendation Endorsements",
          description: "Letters from actively publishing AI researchers who review for NeurIPS/ICML and can vouch for your scientific autonomy.",
          tag: "Weight: 15%",
          bulletPoints: ["3 research-focused LORs", "Granular technical anecdotes", "FERPA rights waived"]
        }
      ]
    }
  ]
};

export const roadmapPageData: MultiPageData = {
  pageId: "roadmap",
  slug: "/roadmap",
  title: "Step-by-Step AI/ML Scholarship Roadmap",
  metaDescription: "Detailed chronological phase-by-phase execution guide for winning fully funded AI research positions abroad.",
  hero: {
    badge: "5-Level Structured Postgraduate Architecture",
    title: "5 Distinct Levels to Full-Ride",
    highlightWord: "Computer Science Funding",
    subtitle: "Navigate the entire Computer Science funding journey through 5 structured levels: from foundational mathematics and workshop preprints to strategic professor mapping, priority December dossiers, and live faculty defense. Select any level below to open its dedicated deep-dive blueprint.",
    primaryCta: { label: "Explore Level 1", href: "/roadmap/level-1" },
    secondaryCta: { label: "Application Toolkit", href: "/toolkit" }
  },
  sections: [
    {
      id: "phase-navigator",
      sectionNumber: 1,
      badge: "Quick Navigation",
      title: "Phase Navigator & Timeline Dashboard",
      subtitle: "Track your progress across the 24-month postgraduate journey",
      content: "Click any phase below to jump directly to its actionable steps, checklists, pro tips, common pitfalls, and verifiable deliverables.",
      highlights: [
        "Phase 0: Math, Code & Compute Foundations (18–24 Months Before)",
        "Phase 1: Publication Strategy & Open-Source Artifacts (12–18 Months Before)",
        "Phase 2: Lab Targeting & Supervisor Cold Outreach (9–12 Months Before)",
        "Phase 3: AI Graduate Dossier Engineering (6–9 Months Before)",
        "Phase 4: Submission Campaign & Priority Deadlines (3–6 Months Before)",
        "Phase 5: Technical Defense, Decisions & Stipend Math (1–3 Months Before)",
        "Phase 6: Visa, TAL Clearance & Laboratory Onboarding (0–3 Months Before)"
      ]
    },
    {
      id: "actionable-steps",
      sectionNumber: 2,
      badge: "Execution Plan",
      title: "Chronological Step-by-Step Milestones",
      subtitle: "Granular actionable tasks with technical checklists, code examples, and deliverables",
      content: "Each step represents a concrete engineering task designed to move your application into the top 5% review pile.",
      cards: [
        {
          title: "Step 0.1: Mathematical Rigor Diagnostic",
          description: "Audit linear algebra, vector calculus, probability, and optimization theory.",
          tag: "Phase 0 • 8 Weeks",
          bulletPoints: ["Matrix decompositions (SVD, Spectral)", "Jacobians and backpropagation", "KL-divergence and MAP estimation", "Convex optimization & KKT"]
        },
        {
          title: "Step 0.2: Deep Learning Systems Stack",
          description: "Master modular PyTorch, DDP multi-GPU training, and CUDA memory profiling.",
          tag: "Phase 0 • 8 Weeks",
          bulletPoints: ["Custom autograd functions", "Mixed precision (bfloat16)", "DistributedDataParallel (DDP)", "Hydra & WandB logging"]
        },
        {
          title: "Step 1.1: Fast-Track Publication Strategy",
          description: "Target conference workshops (NeurIPS/ICLR/CVPR) and citable arXiv preprints.",
          tag: "Phase 1 • 16 Weeks",
          bulletPoints: ["4-6 page workshop submissions", "ICLR Tiny Papers track", "arXiv timestamped DOI", "OpenReview feedback loop"]
        },
        {
          title: "Step 1.2: Open-Source Portfolio Building",
          description: "Build clean GitHub repos, Hugging Face model cards, and interactive Gradio demos.",
          tag: "Phase 1 • 4 Weeks",
          bulletPoints: ["One-line reproducible scripts", "Hugging Face checkpoint uploads", "Gradio web demo space", "Colab quick-start badge"]
        },
        {
          title: "Step 2.1: Mapping Labs on CSRankings.org",
          description: "Identify institutions holding active NSF/NIH/ERC grants in your AI subfield.",
          tag: "Phase 2 • 3 Weeks",
          bulletPoints: ["Filter CSRankings by AI subfield", "Audit NSF Award Search & CORDIS", "3 Dream / 5 Target / 2 Safe ratio", "35+ faculty database"]
        },
        {
          title: "Step 2.3: 5-Point AI Cold Email Outreach",
          description: "Send personalized technical emails critiquing recent papers and linking code.",
          tag: "Phase 2 • 4 Weeks",
          bulletPoints: ["Recent paper critique hook", "Demonstrated PyTorch weaponry", "arXiv and GitHub links", "7-day polite follow-up"]
        },
        {
          title: "Step 3.1: Technical Statement of Purpose",
          description: "Write a 5-movement research manifesto outlining problems and faculty alignment.",
          tag: "Phase 3 • 4 Weeks",
          bulletPoints: ["Algorithmic research hook", "Mathematical foundations", "Empirical roadblock deep-dive", "Name 2-3 faculty by lab"]
        },
        {
          title: "Step 4.3: December 1-15 Priority Submissions",
          description: "Submit all applications before priority fellowship windows close.",
          tag: "Phase 4 • 2 Weeks",
          bulletPoints: ["Target Dec 1 as submission date", "Verify all 3 LOR uploads", "Confirm assistantship box checked", "Archive submission receipts"]
        },
        {
          title: "Step 5.1: 5-Slide Presentation Defense",
          description: "Deliver a compelling 8-minute technical defense of your research to faculty.",
          tag: "Phase 5 • 3 Weeks",
          bulletPoints: ["Problem & limitations slide", "Algorithmic insight slide", "Quantitative benchmark table", "Controlled ablation slide"]
        },
        {
          title: "Step 6.2: Clearing the Technology Alert List (TAL)",
          description: "Secure an advisor open-science letter to clear consular export control scrutiny.",
          tag: "Phase 6 • 4 Weeks",
          bulletPoints: ["Advisor open-science letter", "Plain English research phrasing", "Clean document binder", "Non-immigrant intent articulation"]
        }
      ]
    },
    {
      id: "compute-lab-blueprint",
      sectionNumber: 3,
      badge: "Engineering Lab",
      title: "Low-Resource GPU Compute & Open-Source Blueprint",
      subtitle: "How to produce top-tier empirical machine learning papers on a student budget",
      content: "You do not need an enterprise compute cluster to publish compelling AI research. Follow this exact technical framework to maximize efficiency.",
      highlights: [
        "Debug locally on synthetic data or single batches using laptop CPU/MPS before spending cloud credits",
        "Rent spot NVIDIA A10G ($0.30/hr) or A100 ($1.10/hr) on RunPod or Lambda Labs for final 48-hour runs",
        "Implement automated checkpointing to S3/Google Drive to survive spot instance preemption",
        "Evaluate small models (100M–500M params) across 5 distinct seeds rather than a single noisy run of an 8B model"
      ],
      dataPoints: [
        { label: "Free Kaggle GPU", value: "30 hrs/wk", sublabel: "NVIDIA T4 / P100" },
        { label: "Colab Pro Cost", value: "$10 / mo", sublabel: "A100 compute access" },
        { label: "Spot GPU Rental", value: "$0.30 / hr", sublabel: "NVIDIA A10G on RunPod" },
        { label: "Target Seed Runs", value: "5 Seeds", sublabel: "Statistical validity" }
      ]
    },
    {
      id: "deliverables-verification",
      sectionNumber: 4,
      badge: "Quality Assurance",
      title: "Phase-by-Phase Deliverables Verification Audit",
      subtitle: "The non-negotiable proof-of-work required before moving to the next stage",
      content: "Ensure every deliverable is verified and completed to maintain momentum through the 24-month journey.",
      highlights: [
        "Phase 0 Deliverable: Completed self-audit solving 20 proof-based math problems and modular PyTorch repo",
        "Phase 1 Deliverable: Active citable arXiv preprint and documented GitHub repo with interactive demo",
        "Phase 2 Deliverable: 25+ personalized cold emails sent resulting in positive faculty screening calls",
        "Phase 3 Deliverable: Tailored 2-page technical SOP, compiled LaTeX CV, and 3 confidential LOR commitments",
        "Phase 4 Deliverable: 100% of applications submitted before December 1–15 priority deadlines",
        "Phase 5 Deliverable: Rehearsed 5-slide defense presentation and signed fully funded GRA appointment contract",
        "Phase 6 Deliverable: Approved visa with TAL open-science clearance and active SSH access to lab cluster"
      ]
    }
  ]
};

export const programsPageData: MultiPageData = {
  pageId: "programs",
  slug: "/programs",
  title: "100% Fully Funded AI/ML Programs & Labs Directory",
  metaDescription: "Curated catalog of fully funded Computer Science, Artificial Intelligence, and Machine Learning graduate programs across North America, Europe, Asia, and Oceania.",
  hero: {
    badge: "100% Full Tuition Waiver & Living Salaries Only",
    title: "Directory of Fully Funded",
    highlightWord: "Computer Science Laboratories",
    subtitle: "Browse verified graduate programs and AI research laboratories offering 100% full tuition remission, guaranteed annual living stipends ($30,000–$85,000/yr), dedicated GPU compute access, and active faculty grant lines. Zero self-funded traps.",
    primaryCta: { label: "Filter Funded Labs", href: "#programs-directory" },
    secondaryCta: { label: "CSRankings Protocol", href: "#csrankings-guide" }
  },
  sections: [
    {
      id: "directory-filter",
      sectionNumber: 1,
      badge: "Interactive Explorer",
      title: "Global Program Explorer & Multi-Parameter Filter",
      subtitle: "Filter research institutions by region, degree level, and funding mechanism",
      content: "Filter through elite graduate programs in North America, Europe, Asia, and Oceania. All listings guarantee 100% tuition remission and monthly living stipends.",
      dataPoints: [
        { label: "Verified Programs", value: "12+ Elite", sublabel: "Top global AI hubs" },
        { label: "Tuition Waiver", value: "100%", sublabel: "Zero tuition fees" },
        { label: "Maximum Salary", value: "CHF 85k", sublabel: "ETH Zurich / EPFL" },
        { label: "Direct PhD Entry", value: "Supported", sublabel: "US & Canada programs" }
      ]
    },
    {
      id: "directory-list",
      sectionNumber: 2,
      badge: "Verified Full Rides",
      title: "Curated 100% Fully Funded AI Research Institutions & Labs",
      subtitle: "Comprehensive program breakdown with stipend details, compute infrastructure, and requirements",
      content: "Explore premier global AI research institutions offering guaranteed Graduate Research Assistantships (GRA) or salaried researcher contracts.",
      cards: [
        {
          title: "Carnegie Mellon University (CMU SCS)",
          description: "PhD in Machine Learning (MLD) / Language Technologies Institute (LTI). Full tuition waiver + $43,000/year living stipend + massive GPU clusters.",
          tag: "USA • Direct PhD • Dec 10 Priority",
          icon: "Award",
          bulletPoints: ["Full tuition remission", "$43,000 annual stipend", "On-premise GPU clusters", "GRE optional"]
        },
        {
          title: "Stanford University (SAIL)",
          description: "PhD in Computer Science at the Stanford AI Lab. 100% tuition coverage + $52,000/year living stipend + Stanford HAI compute grants.",
          tag: "USA • Direct PhD • Dec 3 Deadline",
          icon: "Award",
          bulletPoints: ["100% tuition coverage", "$52,000 annual stipend", "HAI compute clusters", "GRE not considered"]
        },
        {
          title: "UC Berkeley (BAIR)",
          description: "PhD in Computer Science at Berkeley AI Research. Full in-state/out-of-state tuition remission + $46,000/year stipend + Sky Computing infrastructure.",
          tag: "USA • Direct PhD • Dec 5 Deadline",
          icon: "Award",
          bulletPoints: ["100% tuition remission", "$46,000 annual stipend", "BAIR GPU cluster", "GRE not considered"]
        },
        {
          title: "MIT (CSAIL)",
          description: "Doctoral Program in EECS (AI/ML Group). 100% full tuition remission + $49,000/year living stipend + CSAIL supercomputing infrastructure.",
          tag: "USA • Direct PhD • Dec 1 Deadline",
          icon: "Award",
          bulletPoints: ["100% tuition remission", "$49,000 annual stipend", "CSAIL clusters", "GRE not considered"]
        },
        {
          title: "Mila - Quebec AI Institute",
          description: "Fully funded MSc and PhD programs in deep learning founded by Yoshua Bengio. CAD $35k–$48k annual stipend + Compute Canada clusters.",
          tag: "Canada • Both MS & PhD • Dec 1",
          icon: "Award",
          bulletPoints: ["Tuition differential waiver", "CAD $35k–$48k stipend", "Compute Canada access", "Direct Mila application"]
        },
        {
          title: "ELLIS PhD Program",
          description: "Pan-European AI doctoral network co-supervised across ETH Zurich, Cambridge, Oxford, Max Planck, and Amsterdam. €40k–€85k/year salaried contracts.",
          tag: "Europe • Salaried Contract • Nov 15",
          icon: "Award",
          bulletPoints: ["Zero tuition fees", "€40,000–€85,000 salary", "EuroHPC supercomputers", "Dual European supervision"]
        },
        {
          title: "ETH Zurich & EPFL AI Center",
          description: "World's highest doctoral salaries (CHF 70,000–CHF 85,000/year) + Swiss National Supercomputing Centre (CSCS) Alps supercomputer.",
          tag: "Switzerland • Salaried • Dec 15",
          icon: "Award",
          bulletPoints: ["Zero tuition fees", "CHF 70k–85k salary", "CSCS Alps supercomputer", "Master's required"]
        },
        {
          title: "Max Planck Institute for Intelligent Systems",
          description: "IMPRS-IS doctoral program in Tübingen/Stuttgart. German public service salary (TV-L E13, ~€50,000/year) with full social security and pension.",
          tag: "Germany • Salaried • Nov 15",
          icon: "Award",
          bulletPoints: ["Zero tuition in Germany", "€50,000 gross salary", "MPCDF supercomputing", "Full social security"]
        },
        {
          title: "Singapore International Graduate Award (SINGA)",
          description: "PhD funding at A*STAR Centre for Frontier AI Research (CFAR), NUS, and NTU. Full tuition waiver + SGD $2,700–$3,200/month stipend.",
          tag: "Singapore • PhD • Dec 1 / June 1",
          icon: "Award",
          bulletPoints: ["Full tuition waiver", "SGD $2,700–$3,200/mo", "NSCC supercomputing", "Airfare allowance"]
        }
      ]
    },
    {
      id: "csrankings-guide",
      sectionNumber: 3,
      badge: "Research Intelligence",
      title: "CSRankings.org Intelligence & Active Grant Search Protocol",
      subtitle: "How to use metrics-based rankings and federal grant databases to find liquid lab funding",
      content: "Do not use US News or QS general rankings. Learn how to extract faculty citation rosters and identify PIs who recently received multi-million dollar grants.",
      highlights: [
        "Step 1: Open csrankings.org and select AI, Machine Learning, Computer Vision, and NLP",
        "Step 2: Expand university names to reveal individual faculty publication volume at NeurIPS/ICML/CVPR",
        "Step 3: Search NIH RePORTER and NSF Award Search to confirm the professor has active awards through 2026–2030",
        "Step 4: Check EU CORDIS for ERC Starting/Consolidator Grants (€1.5M–€2.5M) which mandate hiring PhD researchers"
      ]
    },
    {
      id: "stipend-col-matrix",
      sectionNumber: 4,
      badge: "Financial Viability",
      title: "Metropolitan Cost-of-Living vs. Net Take-Home Stipend Matrix",
      subtitle: "Why nominal numbers are deceptive and how to evaluate true purchasing power",
      content: "A $36,000 stipend in Atlanta or Urbana-Champaign provides high disposable income, while the same amount in San Francisco or New York can lead to financial strain.",
      dataPoints: [
        { label: "Purdue / UIUC", value: "$30k - $34k", sublabel: "Low COL • High purchasing power" },
        { label: "Georgia Tech (Atlanta)", value: "$34k - $38k", sublabel: "Medium COL • Comfortable living" },
        { label: "Stanford / Berkeley", value: "$46k - $52k", sublabel: "High COL • Shared housing standard" },
        { label: "ETH Zurich", value: "CHF 75k - 85k", sublabel: "High COL • Extremely high savings" }
      ]
    }
  ]
};

export const toolkitPageData: MultiPageData = {
  pageId: "toolkit",
  slug: "/toolkit",
  title: "AI Graduate Dossier & Application Toolkit",
  metaDescription: "Ready-to-use communication scripts, LaTeX CV templates, technical SOP blueprints, and research proposal frameworks for AI applicants.",
  hero: {
    badge: "Computer Science Application Arsenal",
    title: "The Computer Science Graduate",
    highlightWord: "Application Toolkit",
    subtitle: "Battle-tested application assets for Computer Science applicants: interactive 5-point cold email generators with preset scenarios, 5-movement technical SOP blueprints, LaTeX CV standards, and research proposal frameworks.",
    primaryCta: { label: "Cold Email Generator", href: "#interactive-email-builder" },
    secondaryCta: { label: "5-Movement SOP Blueprint", href: "#sop-blueprint" }
  },
  sections: [
    {
      id: "sop-blueprint",
      sectionNumber: 1,
      badge: "Research Manifesto",
      title: "The Technical Statement of Purpose (SOP) 5-Movement Blueprint",
      subtitle: "How to draft an academic research statement that captures faculty attention in 90 seconds",
      content: "The AI/ML Statement of Purpose is an engineering research manifesto. It must outline your theoretical foundations, empirical problem-solving track record, and explicit faculty synergy.",
      cards: [
        {
          title: "Movement 1: The Incisive Technical Hook (15%)",
          description: "Skip childhood epiphanies. Begin directly with the algorithmic bottleneck or theoretical paradox driving your research vision.",
          tag: "Opening 150 Words",
          bulletPoints: ["Identify concrete open problem", "State proposed methodology", "Avoid generic enthusiasm"]
        },
        {
          title: "Movement 2: Mathematical Foundations (20%)",
          description: "Demonstrate formal coursework and theoretical mastery in probability, optimization, or discrete math.",
          tag: "Foundations 200 Words",
          bulletPoints: ["Proof-based coursework", "Matrix calculus and analysis", "Theoretical rigor evidence"]
        },
        {
          title: "Movement 3: In-Depth Empirical Deep-Dive (35%)",
          description: "Dedicate 2 paragraphs to in-depth research: hypothesis, architectural roadblock, mathematical resolution, and quantitative result.",
          tag: "Core Battles 350 Words",
          bulletPoints: ["Experimental roadblock", "Mathematical adjustment", "Quantitative benchmark outcome", "Paper or preprint citation"]
        },
        {
          title: "Movement 4: Faculty Synergy by Name (20%)",
          description: "Explicitly name 2–3 faculty members and describe how your skillset bridges their current grant questions.",
          tag: "Institutional Fit 200 Words",
          bulletPoints: ["Name specific PIs and labs", "Cite papers from last 12 months", "Explain exact bridge in skills"]
        },
        {
          title: "Movement 5: Long-Term Scientific Horizon (10%)",
          description: "Articulate your 5-to-10 year objective (e.g., tenure-track faculty, frontier AI research scientist).",
          tag: "Closing 100 Words",
          bulletPoints: ["Academic or R&D trajectory", "Departmental contribution", "Final confident closing"]
        }
      ]
    },
    {
      id: "cv-standards",
      sectionNumber: 2,
      badge: "LaTeX Standard",
      title: "Academic LaTeX CV Standards & Google XYZ Action Bullets",
      subtitle: "Format a clean, minimalist 2-page CV with clickable DOIs and GitHub metrics",
      content: "Admissions committees expect minimalist LaTeX typography (Awesome-CV, ModernCV) with clean links to code and preprints. Never use graphical multi-column Canva resumes.",
      highlights: [
        "Include active header hyperlinks: GitHub Profile, Google Scholar, Hugging Face Hub, Personal Website",
        "Structure Publications into: Refereed Conference Papers, Workshop Papers, and Preprints under review",
        "Use the Google XYZ Formula: 'Accomplished [X] as measured by [Y] by doing [Z]'",
        "List technical stack by: Languages (Python, C++, CUDA), Frameworks (PyTorch, JAX), Systems (Slurm, Docker, Triton)"
      ],
      dataPoints: [
        { label: "Optimal Length", value: "Strictly 2 Pages", sublabel: "Compact & high-density" },
        { label: "Format", value: "LaTeX / PDF", sublabel: "Awesome-CV / ModernCV" },
        { label: "Mandatory Links", value: "GitHub + Scholar", sublabel: "Direct verification" },
        { label: "Photo / Age", value: "Never Include", sublabel: "US/Canada academic standard" }
      ]
    },
    {
      id: "email-scripts",
      sectionNumber: 3,
      badge: "Communication Arsenal",
      title: "Copy-Ready High-Yield Communication Scripts & Cold Emails",
      subtitle: "Battle-tested templates for contacting professors, requesting LORs, and negotiating funding",
      content: "Access ready-to-use email templates with variable placeholders and clear sending instructions.",
      cards: [
        {
          title: "Template 1: High-Yield AI/ML Supervisor Cold Email",
          description: "The 5-point outreach formula referencing recent ICLR/NeurIPS papers, critiquing technical limitations, and linking reproducible PyTorch code.",
          tag: "Cold Outreach",
          icon: "Mail",
          bulletPoints: ["Recent paper critique hook", "Demonstrated PyTorch weaponry", "arXiv and GitHub links", "15-minute Zoom call request"]
        },
        {
          title: "Template 2: Polite 7-Day Follow-Up to AI Faculty",
          description: "Short, courteous follow-up sent on the existing thread acknowledging conference review deadlines without pressuring the professor.",
          tag: "Follow-Up",
          icon: "Clock",
          bulletPoints: ["Reply on same thread", "Acknowledges review deadlines", "Sent once after 7-10 days", "Polite and low-friction"]
        },
        {
          title: "Template 3: Recommendation Request & Brag Sheet Packet",
          description: "Equips your mentors with an organized summary dossier of your past projects, course grades, paper contributions, and target deadlines.",
          tag: "Recommendation",
          icon: "FileText",
          bulletPoints: ["1-page Brag Sheet attached", "Deadlines spreadsheet included", "FERPA waiver confirmation", "Sent 6-8 weeks early"]
        },
        {
          title: "Template 4: Respectful Scholarship Negotiation Email",
          description: "Polite, transparent communication leveraging a higher competing fellowship or living stipend to request a departmental top-up.",
          tag: "Negotiation",
          icon: "DollarSign",
          bulletPoints: ["Reiterates first choice fit", "Transparent competing offer", "Inquires about summer top-up", "Professional and cordial"]
        },
        {
          title: "Template 5: Advisor Open-Science Visa Defense Letter",
          description: "Template letter for your future professor certifying that your AI/ML research is unclassified, foundational, and open-source for TAL clearance.",
          tag: "Visa Defense",
          icon: "Shield",
          bulletPoints: ["Official university letterhead", "Certifies unclassified science", "Prevents 221(g) TAL delays", "Brought to embassy interview"]
        }
      ]
    },
    {
      id: "proposal-calculator",
      sectionNumber: 4,
      badge: "European & Asian Format",
      title: "Doctoral Research Proposal Blueprint & Compute Estimator",
      subtitle: "How to draft a formal 3-year research plan with compute allocations for European and Asian programs",
      content: "For programs in Europe (ELLIS, Max Planck, ETH) and Asia (MEXT, CSC), a formal research proposal is required. Structure your technical plan, mitigation strategies, and GPU compute budget.",
      highlights: [
        "Abstract (250 words) summarizing technical gap, hypothesis, and proposed evaluation",
        "Literature Gap & Theoretical Novelty comparing your idea against existing SOTA baselines",
        "Methodology & Experimental Plan specifying datasets, evaluation protocols, and controls",
        "Realistic Compute Budget: Estimated GPU hours (e.g., '1,200 A100 GPU hours for training and validation')",
        "Quarterly Milestone Gantt Chart mapping out 3 years into conference submission targets"
      ]
    }
  ]
};

export const interviewsPageData: MultiPageData = {
  pageId: "interviews",
  slug: "/interviews",
  title: "AI Interview Defense & Visa TAL Clearance",
  metaDescription: "Master technical faculty interviews, defend empirical deep learning choices, and clear Technology Alert List (TAL) consular scrutiny.",
  hero: {
    badge: "Technical Defense & Offer Rights Protocol",
    title: "Computer Science Faculty Interviews &",
    highlightWord: "Funding Negotiation",
    subtitle: "Defend your research using the 5-slide technical walkthrough simulator, master STAR-L deep learning defense cases, negotiate your 5-year doctoral compensation under the CGS April 15 Resolution, and clear consular TAL export controls.",
    primaryCta: { label: "5-Slide Deck Simulator", href: "#five-slide-simulator" },
    secondaryCta: { label: "TAL Risk Analyzer", href: "#visa-tal-checker" }
  },
  sections: [
    {
      id: "5slide-blueprint",
      sectionNumber: 1,
      badge: "Technical Walkthrough",
      title: "The 5-Slide Faculty Technical Research Defense Blueprint",
      subtitle: "How to present your past machine learning research in 8 minutes with crisp scientific clarity",
      content: "Faculty use screening interviews to evaluate your scientific communication, hypothesis formulation, and intellectual honesty under scrutiny.",
      cards: [
        {
          title: "Slide 1: Scientific Motivation & Existing Limits",
          description: "Explain the problem setting and why existing state-of-the-art baselines break down in real-world conditions.",
          tag: "Slide 1 • 90 Seconds",
          bulletPoints: ["Problem setting definition", "Why prior methods fail", "Failure modes of SOTA"]
        },
        {
          title: "Slide 2: Your Core Algorithmic/Mathematical Insight",
          description: "Present your key contribution using clean mathematical notation and an intuitive architectural flow diagram.",
          tag: "Slide 2 • 2 Minutes",
          bulletPoints: ["Mathematical formulation", "Architectural diagram", "Why intuition works"]
        },
        {
          title: "Slide 3: Quantitative Experimental Benchmarks",
          description: "Show your primary comparison table across standard benchmarks with error bars and statistical significance.",
          tag: "Slide 3 • 90 Seconds",
          bulletPoints: ["Standard benchmark results", "5-seed statistical variance", "Baselines compared fairly"]
        },
        {
          title: "Slide 4: Controlled Ablation Studies",
          description: "Prove which specific component of your design was responsible for the performance gain.",
          tag: "Slide 4 • 2 Minutes",
          bulletPoints: ["Component-by-component removal", "Hyperparameter sensitivity", "Proof of design validity"]
        },
        {
          title: "Slide 5: Open Questions & Future Horizons",
          description: "Demonstrate scientific maturity by outlining what experiments and scaling tests you would conduct next.",
          tag: "Slide 5 • 60 Seconds",
          bulletPoints: ["Remaining open questions", "Next experimental hypotheses", "How target lab fits in"]
        }
      ]
    },
    {
      id: "starl-cases",
      sectionNumber: 2,
      badge: "Live Scenarios",
      title: "STAR-L Deep Learning Technical Defense Case Studies",
      subtitle: "Real-world engineering challenges and structured answers for faculty screening calls",
      content: "Master the STAR-L framework (Situation, Task, Action, Result, Learning) across critical machine learning bottlenecks.",
      cards: [
        {
          title: "Case 1: GPU Out-of-Memory (OOM) Bottleneck",
          description: "Fine-tuning a 7B LLM on 24GB VRAM failed during backward passes. Implemented Activation Checkpointing, QLoRA, and FlashAttention-2 kernels, cutting peak VRAM by 58.8%.",
          tag: "Systems & Memory",
          icon: "Server",
          bulletPoints: ["Peak memory audited", "Activation checkpointing", "FlashAttention-2 kernel", "VRAM cut from 38GB to 16GB"]
        },
        {
          title: "Case 2: Representation Collapse in Contrastive Learning",
          description: "Self-supervised model collapsed to trivial constant embeddings. Reformulated objective with Barlow Twins cross-correlation redundancy reduction, boosting accuracy from 14% to 76.5%.",
          tag: "Training & Convergence",
          icon: "Activity",
          bulletPoints: ["Dimensional collapse", "Cross-correlation loss", "Stop-gradient stabilization", "Linear probe boosted to 76.5%"]
        },
        {
          title: "Case 3: Real-Time Inference Latency in Robotics",
          description: "Vision-Language policy had 820ms latency per step. Replaced sequential decoding with speculative decoding using a 150M draft network, achieving a 4.4x speedup (84ms latency).",
          tag: "Inference & Optimization",
          icon: "Zap",
          bulletPoints: ["820ms robot latency ceiling", "Speculative decoding", "TensorRT kernel fusion", "Slashed latency to 84ms"]
        },
        {
          title: "Case 4: Out-of-Distribution Calibration Failure",
          description: "Deep model showed 99% confidence on corrupted inputs. Introduced energy-based OOD scoring and Dirichlet prior networks, improving AUPR by 21.3% and cutting ECE from 18.4% to 3.2%.",
          tag: "Theory & Foundations",
          icon: "Compass",
          bulletPoints: ["Overconfident predictions", "Energy-based scoring", "Dirichlet prior networks", "Calibration error cut to 3.2%"]
        }
      ]
    },
    {
      id: "visa-tal",
      sectionNumber: 3,
      badge: "Export Control Defense",
      title: "Technology Alert List (TAL) Consular Defense & Open-Science Advisor Letter",
      subtitle: "How to clear consular visa scrutiny and prevent 221(g) administrative processing delays",
      content: "Artificial Intelligence is classified as an emerging critical technology subject to export controls. Follow this protocol to ensure seamless visa approval.",
      highlights: [
        "Obtain a signed Open-Science Research Statement from your future advisor on university letterhead",
        "Certify that all work is basic fundamental research published in public peer-reviewed conferences (NeurIPS/ICLR)",
        "Confirm that your research does not involve military dual-use, defense articles, or proprietary surveillance hardware",
        "When asked at the embassy window, explain: 'I research fundamental mathematical algorithms for machine learning to optimize computer algorithms and publish open academic papers'"
      ]
    },
    {
      id: "offer-negotiation",
      sectionNumber: 4,
      badge: "Financial Leverage",
      title: "Graduate Funding Offer Evaluation & Counter-Offer Playbook",
      subtitle: "How to compare competing fully funded packages and leverage top-ups respectfully",
      content: "Evaluate your offers under the Council of Graduate Schools (CGS) April 15 Resolution and negotiate summer funding.",
      dataPoints: [
        { label: "Decision Deadline", value: "April 15", sublabel: "CGS Resolution binding date" },
        { label: "Summer Funding", value: "12-Month Check", sublabel: "Verify 12 vs 9 month stipend" },
        { label: "Discretionary Top-Ups", value: "$2k - $10k/yr", sublabel: "Dean's Excellence Awards" },
        { label: "Industry Summer Pay", value: "$10k - $15k/mo", sublabel: "FAIR / DeepMind internships" }
      ]
    }
  ]
};

export const faqsPageData: MultiPageData = {
  pageId: "faqs",
  slug: "/faqs",
  title: "Scholarship Admissions FAQs & Knowledge Base",
  metaDescription: "Practical, nuanced answers to the 12 most critical international scholarship questions: IELTS requirements, GPA importance, supervisor outreach, tuition waivers, and reapplication.",
  hero: {
    badge: "International Admissions Intelligence",
    title: "Postgraduate Scholarship FAQs &",
    highlightWord: "Admissions Knowledgebase",
    subtitle: "Clear, authoritative answers to the most critical international postgraduate dilemmas: obtaining scholarships without IELTS, mitigating average GPAs, contacting professors, tuition waivers vs full funding, and reapplication strategies.",
    primaryCta: { label: "Pre-Flight Checklist", href: "#readiness-checklist" },
    secondaryCta: { label: "Search Questions", href: "#faq-list" }
  },
  sections: [
    {
      id: "faq-categories",
      sectionNumber: 1,
      badge: "Topic Breakdown",
      title: "Explore FAQs by Core Category",
      subtitle: "Filter queries across eligibility & tests, supervisor outreach, funding realities, and strategy",
      content: "Navigate our comprehensive knowledge base organized into key operational domains.",
      cards: [
        {
          title: "Eligibility & Tests",
          description: "English test waivers (IELTS/TOEFL/MOI), GPA cutoffs and mitigation, and publications requirements.",
          tag: "Eligibility",
          icon: "Compass",
          bulletPoints: ["IELTS exemptions & MOI", "Low GPA compensation", "Applying without papers", "Direct PhD eligibility"]
        },
        {
          title: "Outreach & Supervisors",
          description: "When contacting professors is mandatory, cold email etiquette, follow-ups, and handling non-replies.",
          tag: "Supervisors",
          icon: "Users",
          bulletPoints: ["Supervisor necessity rules", "Email response protocols", "Canadian/Australian rules", "US rotation systems"]
        },
        {
          title: "Funding & Finance",
          description: "Tuition waiver vs fully funded packages, living stipends, salaried contracts, and fraud detection.",
          tag: "Funding",
          icon: "DollarSign",
          bulletPoints: ["Full-ride vs partial waiver", "Stipend sufficiency", "Anti-fraud verification", "Doctoral salaries"]
        },
        {
          title: "Strategy & Preparation",
          description: "Optimal preparation timelines, applying to multiple countries, and recovering from rejection.",
          tag: "Strategy",
          icon: "ShieldCheck",
          bulletPoints: ["12-18 month timeline", "Multiple country portfolio", "Fresh graduate rules", "Reapplication post-mortem"]
        }
      ]
    },
    {
      id: "faq-list",
      sectionNumber: 2,
      badge: "Knowledge Base",
      title: "Comprehensive Answers to Critical Applicant Inquiries",
      subtitle: "In-depth explanations with real-world admissions data and policies",
      content: "Review our verified answers to the top questions asked by prospective AI/ML graduate researchers.",
      cards: [
        {
          title: "Can I apply directly for a fully funded PhD right after my 4-year Bachelor's degree without a Master's?",
          description: "Yes, absolutely! In the US and Canada, the majority of CS PhD students are admitted directly after a Bachelor's degree. Direct-entry PhD programs provide 100% full tuition remission, a guaranteed monthly living stipend ($30,000–$50,000/year), and health insurance from Day 1. In Europe, a Master's degree is legally required prior to doctoral enrollment.",
          tag: "Admissions Strategy"
        },
        {
          title: "Do I need a first-author NeurIPS or ICML paper to get into a top AI/ML PhD program?",
          description: "No, a first-author main conference paper is not mandatory, though it is a strong positive signal. Admissions committees look for research maturity: conference workshop papers (NeurIPS/ICLR workshops), verified arXiv preprints, co-authored conference submissions, reproducible GitHub codebases, and strong letters from active AI researchers confirming your problem-solving independence.",
          tag: "Research & Code"
        },
        {
          title: "Is the GRE really dead for Computer Science and AI graduate admissions?",
          description: "For the vast majority of top-tier CS programs, yes. Institutions like MIT, Stanford, UC Berkeley, Carnegie Mellon, University of Washington, University of Michigan, and UIUC have permanently made the GRE test-blind or abolished it. Only take the GRE if a specific safe-tier institution on your list strictly requires it, and aim for Quant >= 167.",
          tag: "Testing Requirements"
        },
        {
          title: "My undergraduate GPA is below 3.5 / 4.0. Can I still win a fully funded AI research assistantship?",
          description: "Yes. In AI/ML, research output and technical contributions vastly outweigh GPA. You can mitigate a lower cumulative GPA by: (1) Highlighting an upward trend in your final 2 years of advanced math/CS courses; (2) Releasing a citable arXiv preprint and clean open-source PyTorch repository; (3) Securing an enthusiastic recommendation letter from an active AI researcher; and (4) Directly connecting with an Assistant Professor whose active grant aligns with your skills.",
          tag: "Admissions Strategy"
        },
        {
          title: "How does GPU compute allocation actually work for graduate research students?",
          description: "Funded PhD and research Master's students do not pay for their own GPUs. Reputable AI laboratories provide direct access to: (1) Local department Slurm clusters with high-density GPU nodes (e.g. 8x NVIDIA H100/A100 nodes); (2) National supercomputing resources (like CSCS in Switzerland, NCI in Australia, or NERSC in the US); and (3) Cloud research credits through faculty partnerships with Google Cloud, AWS, or Microsoft Azure.",
          tag: "Funding & Compute"
        },
        {
          title: "How do I prevent Technology Alert List (TAL) 221(g) administrative delays during my visa interview as an AI student?",
          description: "Because AI is classified as a sensitive critical technology, consular officers screen for export control and military dual-use risks. Avoid buzzwords like 'surveillance', 'autonomous weapons', or 'military tracking'. Always emphasize that your research is 'fundamental, basic mathematical optimization for open-source machine learning'. Bring a signed letter from your future advisor confirming that all work is unclassified and intended for public academic conference publication.",
          tag: "Visa & Relocation"
        },
        {
          title: "How do AI PhD students earn money during the summer months?",
          description: "Most top AI PhD programs offer 12-month funding through year-round Graduate Research Assistantships (GRA). However, the vast majority of 2nd-year+ AI PhD students take 3-month summer research internships at top industrial labs (Google DeepMind, Meta FAIR, Microsoft Research, OpenAI, Apple, Anthropic, NVIDIA). These internships pay $10,000–$15,000 per month plus housing allowances, providing substantial financial savings while generating high-impact conference papers.",
          tag: "Funding & Money"
        },
        {
          title: "When is the optimal time of the year to start cold-emailing AI professors?",
          description: "The golden window is September 1 to October 31 before the December application deadlines. Faculty have settled into the fall semester, grant budgets for the upcoming fiscal year are confirmed, and graduate admissions committees are forming. Avoid emailing during major conference deadlines (e.g., NeurIPS in May, ICLR in late September, or CVPR in mid-November).",
          tag: "Admissions Strategy"
        }
      ]
    },
    {
      id: "readiness-checklist",
      sectionNumber: 3,
      badge: "Final Sanity Check",
      title: "Pre-Flight Application Readiness Checklist",
      subtitle: "Verify that your application satisfies the 5 pillars before submitting",
      content: "Ensure every critical element is locked in place before clicking submit on December priority deadlines.",
      highlights: [
        "Verified that target programs are 100% fully funded via tuition waiver + monthly stipend",
        "Confirmed that your TOEFL Speaking is >= 26 or IELTS Speaking is >= 8.0 for GTA funding",
        "Confirmed all 3 recommendation letters have been requested with brag sheets attached",
        "Checked the box 'I waive my right to access this recommendation' on every application portal",
        "Removed any hardcoded paths from public GitHub code and verified reproducible execution"
      ]
    }
  ]
};

export const allMultiPages = [
  homePageData,
  roadmapPageData,
  programsPageData,
  toolkitPageData,
  interviewsPageData,
  faqsPageData
];
