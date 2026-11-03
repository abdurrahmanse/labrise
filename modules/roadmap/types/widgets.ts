export interface MathTopicDiagnostic {
  id: string;
  name: string;
  icon: string;
  badge: string;
  concepts: string[];
  admissionsExpectation: string;
  sampleProof: string;
}

export interface SystemsCodeTab {
  id: string;
  label: string;
  fileName: string;
  language: string;
  description: string;
  code: string;
  highlights: string[];
}

export interface SystemsBenchmarkMetric {
  id: string;
  label: string;
  value: string;
  iconName: string;
  variant: "cyan" | "emerald" | "purple" | "amber";
}

export interface DegreeRouteComparison {
  id: string;
  title: string;
  shortLabel: string;
  tag: string;
  badgeVariant: "emerald" | "cyan" | "rose";
  cardTheme: "emerald" | "cyan" | "rose";
  financialOutcome: string;
  fundingGuarantee: string;
  stipendAmount: string;
  tuitionStatus: string;
  timeline: string;
  undergradDirectEntry: boolean;
  masterOutOption: boolean;
  facultyPriority: string;
  verdict: string;
  targetRegions: string[];
  callout?: {
    type: "positive" | "warning" | "neutral";
    title: string;
    desc: string;
  };
}

export interface GpuQuantPreset {
  id: string;
  name: string;
  parameters: string;
  fp16VramGB: number;
  qloraVramGB: number;
  quant8bitVramGB: number;
  minRecommendedGpu: string;
  freeTierCompatible: boolean;
  batchSizeLimit: string;
  notes: string;
}

export interface LiteratureMatrixDomain {
  id: string;
  domain: string;
  hotProblems: string[];
  recommendedVenues: string[];
  foundationalPapers: {
    title: string;
    authorsYear: string;
    coreTakeaway: string;
  }[];
  whiteboardAttackAngle: string;
}
