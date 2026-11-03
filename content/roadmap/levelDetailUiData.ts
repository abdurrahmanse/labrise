export interface LevelDetailUiData {
  hero: {
    breadcrumbOverview: string;
    difficultySuffix: string;
    competenciesLabel: string;
    deliverableLabel: string;
    facultyQuoteLabel: string;
  };
  tracker: {
    liveBadge: string;
    title: string;
    tasksVerifiedLabel: string;
    readinessLabel: string;
    resetButton: string;
    allCompletedBadge: string;
    ofSeparator: string;
  };
  tasks: {
    badge: string;
    title: string;
    tasksSuffix: string;
  };
  navigationFooter: {
    badge: string;
    prevLevelLabel: string;
    hubButton: string;
    nextLevelLabel: string;
    curriculumCompleteBadge: string;
    toolkitButton: string;
  };
}

export const levelDetailUiData: LevelDetailUiData = {
  hero: {
    breadcrumbOverview: "All 5 Levels Overview",
    difficultySuffix: "Difficulty",
    competenciesLabel: "Core Technical Competencies Mastered:",
    deliverableLabel: "Critical Proof-of-Work Deliverable:",
    facultyQuoteLabel: "Faculty Committee Selection Panel Insight:",
  },
  tracker: {
    liveBadge: "Live Level Progress",
    title: "Interactive Verification Tracker",
    tasksVerifiedLabel: "Tasks Verified",
    readinessLabel: "Proof-of-Work Readiness",
    resetButton: "Reset Checklist",
    allCompletedBadge: "All Tasks Completed",
    ofSeparator: "of",
  },
  tasks: {
    badge: "Actionable Milestones",
    title: "Detailed Action Steps & Protocols",
    tasksSuffix: "Level Tasks",
  },
  navigationFooter: {
    badge: "Curriculum Level Progression",
    prevLevelLabel: "Previous Level",
    hubButton: "Roadmap Hub",
    nextLevelLabel: "Next Level",
    curriculumCompleteBadge: "100% Fully Funded Curriculum Complete",
    toolkitButton: "Go to Documents & SOP Blueprint",
  },
};
