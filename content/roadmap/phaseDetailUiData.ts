export interface PhaseDetailAnchorItem {
  id: string;
  label: string;
}

export interface PhaseDetailUiData {
  badges: {
    phasePrefix: string;
    totalPhasesSuffix: string;
    mastersSpecific: string;
    phdSpecific: string;
    bothScope: string;
    freeStandard: string;
  };
  anchorNav: {
    items: PhaseDetailAnchorItem[];
  };
  hero: {
    breadcrumbHub: string;
  };
  whatWhy: {
    badge: string;
    mandateBadge: string;
    mandateHeading: string;
    rationaleBadge: string;
    rationaleHeading: string;
  };
  howSteps: {
    badge: string;
    heading: string;
    milestonesSuffix: string;
  };
  resources: {
    badge: string;
    heading: string;
    subtitle: string;
  };
  pitfallsAndExample: {
    mistakesBadge: string;
    mistakesHeading: string;
    exampleBadge: string;
    exampleHeading: string;
  };
  degreeNuances: {
    badge: string;
    heading: string;
    mastersSubheading: string;
    mastersHeading: string;
    phdSubheading: string;
    phdHeading: string;
  };
  checklist: {
    auditSuffix: string;
    heading: string;
    ofSeparator: string;
    verifiedSuffix: string;
    completeSuffix: string;
    proTipPrefix: string;
  };
  navigationFooter: {
    prevPhaseLabel: string;
    overviewLabel: string;
    allPhasesTitle: string;
    hubButton: string;
    nextPhaseLabel: string;
    completeBadge: string;
    toolkitButton: string;
  };
}

export const phaseDetailUiData: PhaseDetailUiData = {
  badges: {
    phasePrefix: "Phase",
    totalPhasesSuffix: "of 13",
    mastersSpecific: "Master's Focus",
    phdSpecific: "PhD Focus",
    bothScope: "Master's & PhD",
    freeStandard: "100% Free Standard",
  },
  anchorNav: {
    items: [
      { id: "what-why", label: "Overview" },
      { id: "how-to-execute", label: "Steps" },
      { id: "official-resources", label: "Portals" },
      { id: "mistakes-example", label: "Pitfalls & Example" },
      { id: "degree-nuances", label: "Degree Focus" },
      { id: "checklist", label: "Checklist" },
    ],
  },
  hero: {
    breadcrumbHub: "Roadmap Hub",
  },
  whatWhy: {
    badge: "Overview",
    mandateBadge: "What To Do",
    mandateHeading: "Core Objective",
    rationaleBadge: "Why It Matters",
    rationaleHeading: "Committee Perspective",
  },
  howSteps: {
    badge: "Action Plan",
    heading: "How to Execute (Step by Step)",
    milestonesSuffix: "Action Steps",
  },
  resources: {
    badge: "Official Links",
    heading: "Official Portals & Resources",
    subtitle:
      "Direct links to official governmental portals, credential evaluators, and university registers.",
  },
  pitfallsAndExample: {
    mistakesBadge: "Common Mistakes",
    mistakesHeading: "Pitfalls to Avoid",
    exampleBadge: "Real Example",
    exampleHeading: "Case Study in Action",
  },
  degreeNuances: {
    badge: "Degree Requirements",
    heading: "Master's vs. PhD Considerations",
    mastersSubheading: "Coursework & Focus",
    mastersHeading: "Master's Focus",
    phdSubheading: "Research & Lab Fit",
    phdHeading: "PhD Focus",
  },
  checklist: {
    auditSuffix: "Phase Checklist",
    heading: "Progress Checklist",
    ofSeparator: "of",
    verifiedSuffix: "Done",
    completeSuffix: "Ready",
    proTipPrefix: "Tip:",
  },
  navigationFooter: {
    prevPhaseLabel: "Previous Phase",
    overviewLabel: "Overview",
    allPhasesTitle: "All 13 Application Phases",
    hubButton: "All 13 Phases",
    nextPhaseLabel: "Next Step",
    completeBadge: "13 Phases Complete",
    toolkitButton: "Documents & SOP Blueprint",
  },
};
