import { finderText as t } from "@/content/text/scholarships";
import { FilterTabs } from "@/shared/components/FilterTabs";
import { SCHOLARSHIP_LEVELS } from "../../constants";
import type { ScholarshipLevel } from "../../types/scholarship";

export const ALL_LEVELS = "All";
export type LevelSelection = typeof ALL_LEVELS | ScholarshipLevel;

const OPTIONS = [ALL_LEVELS, ...SCHOLARSHIP_LEVELS].map((level) => ({
  value: level,
  label: level === ALL_LEVELS ? t.browse.all : level
}));

interface LevelFilterProps {
  value: LevelSelection;
  onChange: (level: LevelSelection) => void;
}

/** Tabs to narrow scholarships by degree level. */
export function LevelFilter({ value, onChange }: LevelFilterProps) {
  return <FilterTabs options={OPTIONS} value={value} onChange={(v) => onChange(v as LevelSelection)} label={t.browse.levelLabel} />;
}
