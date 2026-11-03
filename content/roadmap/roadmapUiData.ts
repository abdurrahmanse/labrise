export interface RoadmapHeaderChip {
  iconName: "ListOrdered" | "GraduationCap" | "Sparkles";
  label: string;
}

export interface RoadmapPageHeroMetric {
  iconName: "ListOrdered" | "Layers" | "CheckCircle2" | "Award";
  category: string;
  value: string;
  sublabel: string;
  accentColor: "teal" | "cyan" | "indigo" | "emerald";
}

export interface RoadmapPageHeroData {
  badge: string;
  standardBadge: string;
  title: string;
  titleGradient: string;
  description: string;
  metrics: RoadmapPageHeroMetric[];
}

export interface RoadmapUiData {
  pageHero: RoadmapPageHeroData;
  header: {
    standardBadge: string;
    chips: RoadmapHeaderChip[];
  };
  phasesSection: {
    badge: string;
    title: string;
    subtitle: string;
    countBadge: string;
  };
  levelsSection: {
    badge: string;
    title: string;
    subtitle: string;
    countBadge: string;
  };
  controls: {
    scopeLabel: string;
    clearSearchLabel: string;
    countSuffix: string;
    ofSeparator: string;
  };
  card: {
    phasePrefix: string;
    totalPhasesSuffix: string;
    mastersBadge: string;
    phdBadge: string;
    bothBadge: string;
    exploreBlueprint: string;
    strategicMandateLabel: string;
    keyMilestonesLabel: string;
    sequencedMilestonesSuffix: string;
    portalsLabel: string;
    verificationChecksSuffix: string;
    fullBlueprintCta: string;
  };
  emptyState: {
    title: string;
    description: string;
    resetLabel: string;
  };
  levelsHeader: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export const roadmapUiData: RoadmapUiData = {
  pageHero: {
    badge: "100% Fully Funded Guide",
    standardBadge: "Free & Open Access",
    title: "The Step-by-Step",
    titleGradient: "Scholarship Roadmap",
    description:
      "A clear 13-phase journey from understanding your academic profile to securing full tuition waivers, living stipends, and visa approval. Click any phase to see exact steps, official portals, and interactive checklists.",
    metrics: [
      {
        iconName: "ListOrdered",
        category: "Complete Journey",
        value: "13 Phases",
        sublabel: "From profile audit to arrival",
        accentColor: "teal",
      },
      {
        iconName: "Layers",
        category: "Career Milestones",
        value: "5 Levels",
        sublabel: "Foundations to thesis defense",
        accentColor: "cyan",
      },
      {
        iconName: "CheckCircle2",
        category: "Actionable Steps",
        value: "65+ Tasks",
        sublabel: "Step-by-step checklists",
        accentColor: "indigo",
      },
      {
        iconName: "Award",
        category: "Target Funding",
        value: "100% Full-Ride",
        sublabel: "Tuition waiver + living stipend",
        accentColor: "emerald",
      },
    ],
  },
  header: {
    standardBadge: "100% Fully Funded Standard",
    chips: [
      {
        iconName: "ListOrdered",
        label: "13 Clear Phases",
      },
      {
        iconName: "GraduationCap",
        label: "Master's & PhD Pathways",
      },
      {
        iconName: "Sparkles",
        label: "What • Why • How • Portals",
      },
    ],
  },
  phasesSection: {
    badge: "Complete 13-Phase Pipeline",
    title: "The 13-Phase Scholarship Pipeline",
    subtitle:
      "Follow each phase in sequence: understand your profile, pick countries, contact professors, prepare documents, and win funding offers.",
    countBadge: "13 Sequential Phases",
  },
  levelsSection: {
    badge: "5 Development Levels",
    title: "Curriculum Milestones & Deliverables",
    subtitle:
      "A structured milestone ladder dividing your graduate preparation journey into 5 clear progress stages.",
    countBadge: "5 Curriculum Levels",
  },
  controls: {
    scopeLabel: "Filter:",
    clearSearchLabel: "Clear search",
    countSuffix: "Phases",
    ofSeparator: "of",
  },
  card: {
    phasePrefix: "Phase",
    totalPhasesSuffix: "of 13",
    mastersBadge: "Master's",
    phdBadge: "PhD",
    bothBadge: "Master's & PhD",
    exploreBlueprint: "View Phase Details",
    strategicMandateLabel: "What to Do:",
    keyMilestonesLabel: "Action Steps:",
    sequencedMilestonesSuffix: "Steps",
    portalsLabel: "Official Portals:",
    verificationChecksSuffix: "Checklist Items",
    fullBlueprintCta: "View Details & Checklist",
  },
  emptyState: {
    title: "No phases match your search",
    description:
      "Try searching with simpler terms (like 'GPA', 'IELTS', 'SOP', or 'Professor') or reset your filters.",
    resetLabel: "Reset Filters",
  },
  levelsHeader: {
    badge: "5 Milestone Levels",
    title: "5 Levels to Fully Funded Graduate Admission",
    subtitle:
      "A structured ladder dividing preparation into 5 manageable stages. Click any level to see concrete deliverables, checklists, and faculty tips.",
  },
};
