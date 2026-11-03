import type { CountryGuideDto } from "../dto/countryGuideDto";
import type { CountryGuide, CountryOfficialPortal, GovernmentScholarship } from "../types/countryGuide";

type PortalDto = CountryGuideDto["officialPortals"][number];
type GovernmentScholarshipDto = CountryGuideDto["governmentScholarships"][number];

const toPortal = (dto: PortalDto): CountryOfficialPortal => ({ name: dto.name, url: dto.url, description: dto.description });
const toPortalDto = (portal: CountryOfficialPortal): PortalDto => ({ name: portal.name, url: portal.url, description: portal.description });

const toGovernmentScholarship = (dto: GovernmentScholarshipDto): GovernmentScholarship => ({
  name: dto.name,
  url: dto.url,
  description: dto.description,
  coverage: dto.coverage,
  degreeLevel: dto.degreeLevel
});
const toGovernmentScholarshipDto = (s: GovernmentScholarship): GovernmentScholarshipDto => ({
  name: s.name,
  url: s.url,
  description: s.description,
  coverage: s.coverage,
  degreeLevel: s.degreeLevel
});

/** Wire format to entity. Every field is listed, so a field added to either side is a compile error here, not a silent gap. */
export const toCountryGuide = (dto: CountryGuideDto): CountryGuide => ({
  id: dto.id,
  name: dto.name,
  code: dto.code,
  flag: dto.flag,
  region: dto.region,
  headline: dto.headline,
  summary: dto.summary,
  fundingPhilosophy: dto.fundingPhilosophy,
  commonFundingRoutes: dto.commonFundingRoutes,
  governmentScholarships: dto.governmentScholarships.map(toGovernmentScholarship),
  universityScholarships: dto.universityScholarships,
  phdFundingModel: dto.phdFundingModel,
  mastersFundingModel: dto.mastersFundingModel,
  assistantshipsAvailable: dto.assistantshipsAvailable,
  assistantshipsDetail: dto.assistantshipsDetail,
  supervisorContactRequirement: dto.supervisorContactRequirement,
  supervisorContactNotes: dto.supervisorContactNotes,
  languageRequirements: dto.languageRequirements,
  typicalApplicationDeadlines: dto.typicalApplicationDeadlines,
  importantLimitations: dto.importantLimitations,
  officialPortals: dto.officialPortals.map(toPortal),
  applicationSequence: dto.applicationSequence
});

/** Entity to wire format, used by the built-in /api routes so they send exactly what a real backend would. */
export const toCountryGuideDto = (guide: CountryGuide): CountryGuideDto => ({
  id: guide.id,
  name: guide.name,
  code: guide.code,
  flag: guide.flag,
  region: guide.region,
  headline: guide.headline,
  summary: guide.summary,
  fundingPhilosophy: guide.fundingPhilosophy,
  commonFundingRoutes: guide.commonFundingRoutes,
  governmentScholarships: guide.governmentScholarships.map(toGovernmentScholarshipDto),
  universityScholarships: guide.universityScholarships,
  phdFundingModel: guide.phdFundingModel,
  mastersFundingModel: guide.mastersFundingModel,
  assistantshipsAvailable: guide.assistantshipsAvailable,
  assistantshipsDetail: guide.assistantshipsDetail,
  supervisorContactRequirement: guide.supervisorContactRequirement,
  supervisorContactNotes: guide.supervisorContactNotes,
  languageRequirements: guide.languageRequirements,
  typicalApplicationDeadlines: guide.typicalApplicationDeadlines,
  importantLimitations: guide.importantLimitations,
  officialPortals: guide.officialPortals.map(toPortalDto),
  applicationSequence: guide.applicationSequence
});
