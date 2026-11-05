import type { MathTopicDiagnostic, DegreeRouteComparison, LiteratureMatrixDomain } from "@/modules/roadmap";

// Interactive step tools for the foundations phase. Written for engineering research applicants in any department.

// ============================================================
// STEP 0.1: MATHEMATICAL FOUNDATIONS DIAGNOSTIC
// ============================================================

export const mathDiagnosticMeta = {
  stepBadge: "Step 0.1 Math Self-Audit",
  title: "The 4 Mathematical Pillars of Engineering Research",
  headerBadge: "Admissions Diagnostic",
  conceptsHeader: "Concepts to master:",
  proofChallengeHeader: "Sample whiteboard challenge:",
  realityHeader: "What committees expect: "
};

export const mathTopicsData: MathTopicDiagnostic[] = [
  {
    id: "linear-algebra",
    name: "Linear Algebra & Eigen-Analysis",
    icon: "Sigma",
    badge: "Modelling Foundation",
    concepts: [
      "Eigenvalues and eigenvectors, and what they mean for vibration, stability and modes",
      "Matrix decompositions (LU, QR, singular value decomposition) and when each is used",
      "Positive definite matrices and quadratic forms",
      "Vector spaces, projections and least squares"
    ],
    admissionsExpectation:
      "Faculty expect you to explain why the eigenvalues of a symmetric real matrix are real, and what the eigenvectors mean in a physical system.",
    sampleProof: "Show that the least-squares solution of Ax = b satisfies the normal equations A^T A x = A^T b."
  },
  {
    id: "differential-equations",
    name: "Differential Equations & Transforms",
    icon: "BrainCircuit",
    badge: "Dynamics and Fields",
    concepts: [
      "First- and second-order ordinary differential equations and their physical meaning",
      "Laplace and Fourier transforms for system response and signals",
      "Partial differential equations: heat, wave and diffusion",
      "Stability, damping and resonance"
    ],
    admissionsExpectation:
      "You should be able to set up the equation for a simple system, solve it and say what the solution tells you about stability.",
    sampleProof: "Solve the damped oscillator m x'' + c x' + k x = 0 and classify the cases by the discriminant c^2 - 4mk."
  },
  {
    id: "probability",
    name: "Probability, Statistics & Uncertainty",
    icon: "Sparkles",
    badge: "Evidence and Measurement",
    concepts: [
      "Distributions, expectation and variance",
      "Estimation, confidence intervals and hypothesis tests",
      "Error propagation and measurement uncertainty",
      "Regression and the basics of design of experiments"
    ],
    admissionsExpectation:
      "Committees want to see that you report results with uncertainty and know why a result is, or is not, statistically convincing.",
    sampleProof: "Derive the variance of the sample mean of n independent measurements, and explain how it shrinks with n."
  },
  {
    id: "numerical-methods",
    name: "Numerical Methods & Optimisation",
    icon: "Award",
    badge: "Computation and Design",
    concepts: [
      "Finite difference and finite element ideas, consistency and stability",
      "Root finding, numerical integration and error estimates",
      "Unconstrained and constrained optimisation, with the KKT conditions",
      "Convergence rates and conditioning"
    ],
    admissionsExpectation:
      "Computational results are trusted only when you can say how the numerical error behaves. Expect questions on convergence and conditioning.",
    sampleProof: "Show that Newton's method converges quadratically near a simple root of a smooth function."
  }
];

// ============================================================
// STEP 0.3: DEGREE ROUTE DECISION MATRIX
// ============================================================

export const decisionMatrixMeta = {
  stepBadge: "Step 0.3 Degree Route Matrix",
  title: "Direct PhD vs. Research Master's vs. Taught Master's",
  headerBadge: "Admissions Economics",
  netFinancialBalanceLabel: "Typical Financial Outcome",
  stipendLabel: "Stipend / Income",
  tuitionLabel: "Tuition Status",
  undergradLabel: "Direct Entry from a Bachelor's?",
  undergradEligibleText: "Often, check each programme",
  masterOutLabel: "Master's Exit Option?",
  masterOutAvailableText: "Often available",
  masterOutNotAvailableText: "Not applicable",
  evaluationHeader: "Strategic Evaluation & Recommendation:",
  globalHubsLabel: "Where This Route Is Common:",
  decisionRuleFooter: {
    rule: "Rule of thumb: if you have research experience and a supervisor who will write for you, apply for funded research routes.",
    badge: "Step 0.3 Locked"
  }
};

export const degreeRoutesData: DegreeRouteComparison[] = [
  {
    id: "phd",
    title: "Direct-Entry PhD",
    shortLabel: "Direct PhD",
    tag: "Funded Research Route",
    badgeVariant: "emerald",
    cardTheme: "emerald",
    financialOutcome: "Usually funded: tuition covered and a living stipend or salary",
    fundingGuarantee: "Multi-year funding through assistantships, fellowships or a salaried contract",
    stipendAmount: "Varies a lot by country and field. Check the offer letter.",
    tuitionStatus: "Usually waived, often with health insurance",
    timeline: "3–6 years, depending on the country",
    undergradDirectEntry: true,
    masterOutOption: true,
    facultyPriority: "High: professors invest multi-year grants in doctoral students.",
    verdict:
      "A strong choice when you already have research experience. It combines funding with a clear research path, and in some systems you can leave with a Master's after two years.",
    targetRegions: ["United States", "Canada", "Singapore", "Several European countries with salaried PhDs"],
    callout: {
      type: "positive",
      title: "Master's exit: ",
      desc: "Some doctoral programmes let you leave with a Master's degree if your plans change. Ask each programme whether this is possible."
    }
  },
  {
    id: "thesis-ms",
    title: "Funded Research Master's (MSc / MASc / MPhil)",
    shortLabel: "Research Master's",
    tag: "Funded Research Runway",
    badgeVariant: "cyan",
    cardTheme: "cyan",
    financialOutcome: "Often funded by assistantships or scholarships, with little or no debt",
    fundingGuarantee: "Usually two years with a named supervisor",
    stipendAmount: "Varies by country and funder. Check each offer.",
    tuitionStatus: "Often waived or small, depending on the country",
    timeline: "1–2 years, with a thesis",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "Good: professors recruit research Master's students for specific projects.",
    verdict:
      "A good stepping stone when your profile still needs research output. It gives you a thesis, a paper and a supervisor who can write a strong letter for a PhD.",
    targetRegions: ["Canada", "Germany", "Netherlands", "Switzerland", "Nordic countries"]
  },
  {
    id: "taught-ms",
    title: "Coursework / Taught Master's",
    shortLabel: "Taught Master's",
    tag: "Check Funding Carefully",
    badgeVariant: "rose",
    cardTheme: "rose",
    financialOutcome: "Often self-funded: you may pay full fees and living costs",
    fundingGuarantee: "Usually none, apart from competitive scholarships",
    stipendAmount: "Usually none",
    tuitionStatus: "Often charged at international rates",
    timeline: "1–2 years, mostly classes",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "Lower: professors rarely fund taught-degree students from research grants.",
    verdict:
      "Useful for some careers, but it is rarely the cheapest way into research. If you take one, check scholarships first and plan how you will find research work.",
    targetRegions: ["United Kingdom", "United States", "Australia"],
    callout: {
      type: "warning",
      title: "Do not count on finding funding later: ",
      desc: "Professors usually allocate research funding to students they admitted for a project. Do not assume that a place in an unfunded programme will lead to a funded research role."
    }
  }
];

// ============================================================
// STEP 0.4: RESEARCH DIRECTION MATRIX
// ============================================================

export const literatureMatrixMeta = {
  stepBadge: "Step 0.4 Research Direction Matrix",
  title: "Turning a Broad Area into a Specific Research Question",
  headerBadge: "Problem Formulation",
  advisorsVerdict: "What faculty look for: ",
  advisorsQuote:
    "Professors set aside applications that say 'I want to work on energy' or 'on robots'. Name a specific limitation, a measurable gap or an open question, and explain how your own work connects."
};

export const literatureMatrixData: LiteratureMatrixDomain[] = [
  {
    id: "control-robotics",
    domain: "Control, Robotics & Autonomous Systems",
    hotProblems: [
      "Reliable state estimation when sensors are noisy, delayed or fail",
      "Safe motion planning around people in unstructured spaces",
      "Control of systems with uncertain or changing dynamics"
    ],
    recommendedVenues: ["IEEE Transactions on Automatic Control", "ICRA", "IROS", "Automatica"],
    foundationalPapers: [
      {
        title: "A New Approach to Linear Filtering and Prediction Problems",
        authorsYear: "R. E. Kalman, 1960 (Journal of Basic Engineering)",
        coreTakeaway: "Introduces the Kalman filter, the standard method for estimating a system's state from noisy measurements."
      },
      {
        title: "Real-Time Obstacle Avoidance for Manipulators and Mobile Robots",
        authorsYear: "O. Khatib, 1986 (International Journal of Robotics Research)",
        coreTakeaway: "Introduces the artificial potential field approach to reactive obstacle avoidance."
      }
    ],
    whiteboardAttackAngle:
      "Take a standard estimator and ask what happens when the noise model is wrong. Propose how to detect and correct it."
  },
  {
    id: "energy-materials",
    domain: "Energy Storage, Conversion & Materials",
    hotProblems: [
      "Degradation mechanisms that limit battery lifetime",
      "Efficiency limits and loss pathways in solar cells",
      "Materials that combine high performance with abundant, low-cost elements"
    ],
    recommendedVenues: ["Journal of Power Sources", "Energy & Environmental Science", "Advanced Energy Materials", "Joule"],
    foundationalPapers: [
      {
        title: "Detailed Balance Limit of Efficiency of p-n Junction Solar Cells",
        authorsYear: "W. Shockley and H. J. Queisser, 1961 (Journal of Applied Physics)",
        coreTakeaway: "Derives the theoretical efficiency limit of a single-junction solar cell."
      },
      {
        title: "Li-Ion Rechargeable Batteries: A Perspective",
        authorsYear: "J. B. Goodenough and K.-S. Park, 2013 (Journal of the American Chemical Society)",
        coreTakeaway: "Reviews the materials and chemistry that limit the performance of lithium-ion batteries."
      }
    ],
    whiteboardAttackAngle:
      "Pick one loss mechanism and propose a measurement that would separate its contribution from the others."
  },
  {
    id: "mechanics-structures",
    domain: "Computational Mechanics, Structures & Fluids",
    hotProblems: [
      "Accurate simulation of failure and fracture at a manageable cost",
      "Turbulence modelling for flows of engineering interest",
      "Coupling models across scales, from material microstructure to whole structures"
    ],
    recommendedVenues: [
      "Computer Methods in Applied Mechanics and Engineering",
      "International Journal for Numerical Methods in Engineering",
      "Journal of Fluid Mechanics",
      "Engineering Structures"
    ],
    foundationalPapers: [
      {
        title: "The Finite Element Method in Plane Stress Analysis",
        authorsYear: "R. W. Clough, 1960 (Proceedings of the 2nd ASCE Conference on Electronic Computation)",
        coreTakeaway: "First use of the name 'finite element method' for dividing a structure into small elements for analysis."
      },
      {
        title: "The Numerical Computation of Turbulent Flows",
        authorsYear: "B. E. Launder and D. B. Spalding, 1974 (Computer Methods in Applied Mechanics and Engineering)",
        coreTakeaway: "Presents the k-epsilon turbulence model, which became a standard tool in engineering flow simulation."
      }
    ],
    whiteboardAttackAngle:
      "Choose a simulation you have run and ask where its error comes from. Propose a test case with a known answer to measure it."
  }
];
