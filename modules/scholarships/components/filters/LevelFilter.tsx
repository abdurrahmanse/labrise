import { finderText as t } from "@/data/text/scholarships";
import { FilterTabs } from "@/shared/components/FilterTabs";
import { scholarshipSchema } from "../../schemas/scholarshipSchemas";
import type { ScholarshipLevel } from "../../types/scholarship";

export const ALL_LEVELS = "All";
export type LevelSelection = typeof ALL_LEVELS | ScholarshipLevel;

const OPTIONS = [ALL_LEVELS, ...scholarshipSchema.shape.level.options].map((level) => ({
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
