import { REGIONS, type RegionFilter } from "../utils/regions";

export function RegionChips({ value, onChange }: { value: RegionFilter; onChange: (region: RegionFilter) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {REGIONS.map((region) => (
        <button
          key={region}
          type="button"
          aria-pressed={value === region}
          onClick={() => onChange(region)}
          className={`px-3 py-1.5 text-sm font-bold cursor-pointer transition-colors ${value === region ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"}`}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
