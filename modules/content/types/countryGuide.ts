export interface CountryOfficialPortal {
  name: string;
  url: string;
  description: string;
}

export interface GovernmentScholarship {
  name: string;
  url: string;
  description: string;
  coverage: string;
  degreeLevel: "Master's & PhD" | "Master's Only" | "PhD Only";
}

export interface CountryGuide {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: "Europe" | "North America" | "Asia" | "Oceania";
  headline: string;
  summary: string;
  fundingPhilosophy: string;
  commonFundingRoutes: string[];
  governmentScholarships: GovernmentScholarship[];
  universityScholarships: string;
  phdFundingModel: string;
  mastersFundingModel: string;
  assistantshipsAvailable: boolean;
  assistantshipsDetail: string;
  supervisorContactRequirement: "Strictly Required Before Application" | "Recommended" | "Centralized / Not Required";
  supervisorContactNotes: string;
  languageRequirements: string;
  typicalApplicationDeadlines: string;
  importantLimitations: string[];
  officialPortals: CountryOfficialPortal[];
  applicationSequence: string[];
}
