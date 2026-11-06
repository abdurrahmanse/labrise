import {
  AE, AT, AU, BE, BH, CA, CH, CN, CZ, DE, DK, EE, EG, ES, EU, FI, FR, GB, GB_SCT, HK, HU, IE, IS, IT, JO, JP, KR, KW, LB, LU, MY, NL, NO, NZ, OM, PL, PT, QA, SA, SE, SG, SI, TR, TW, US, GR, RO, BG, HR, SK, LT, LV, RS, CY, IN, TH, ID, KZ
} from "country-flag-icons/react/3x2";

type FlagComponent = typeof DE;

const FLAGS: Record<string, FlagComponent> = {
  Austria: AT, Australia: AU, Belgium: BE, Canada: CA, Switzerland: CH, China: CN, Germany: DE, Denmark: DK,
  Spain: ES, Europe: EU, Finland: FI, France: FR, "United Kingdom": GB, "Hong Kong": HK, Hungary: HU, Ireland: IE,
  Italy: IT, Japan: JP, "South Korea": KR, Netherlands: NL, Norway: NO, "New Zealand": NZ, "Saudi Arabia": SA,
  Sweden: SE, Singapore: SG, Turkey: TR, Taiwan: TW, "United States": US, Scotland: GB_SCT, "Czech Republic": CZ, Poland: PL,
  Portugal: PT, Estonia: EE, Luxembourg: LU, Iceland: IS, Slovenia: SI, Greece: GR, Romania: RO, Bulgaria: BG, Croatia: HR, Slovakia: SK, Lithuania: LT, Latvia: LV, Serbia: RS, Cyprus: CY, India: IN, Thailand: TH, Indonesia: ID, Kazakhstan: KZ, Qatar: QA, "United Arab Emirates": AE, Malaysia: MY,
  Egypt: EG, Jordan: JO, Lebanon: LB, Kuwait: KW, Oman: OM, Bahrain: BH
};

interface FlagProps {
  country: string;
  className?: string;
}

/** Real SVG flag for a country in the directory data. Renders nothing for an unknown name. */
export function Flag({ country, className = "h-6 w-9" }: FlagProps) {
  const Component = FLAGS[country];
  if (!Component) return null;
  return <Component title={country} className={`${className} shrink-0 rounded-[2px] shadow-[0_0_0_1px_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]`} />;
}
