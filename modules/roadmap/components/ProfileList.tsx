import { profileChecklist } from "../data/profile";
import type { ProfileItem } from "../types";

const PRIORITY_STYLE: Record<ProfileItem["priority"], string> = {
  "Must have": "bg-indigo-600 text-white border-transparent",
  "Strong plus": "bg-white/10 text-white border-white/40",
  Bonus: "bg-transparent text-slate-400 border-white/20"
};

export function ProfileList() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {profileChecklist.map((item) => (
        <div key={item.title} className="flex items-start gap-4 border border-white/20 bg-white/[0.03] backdrop-blur-md p-4">
          <span className={`shrink-0 border px-2 py-0.5 font-mono text-[11px] uppercase ${PRIORITY_STYLE[item.priority]}`}>
            {item.priority}
          </span>
          <div>
            <div className="font-bold text-white">{item.title}</div>
            <div className="text-sm text-slate-400 font-sans font-normal">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
