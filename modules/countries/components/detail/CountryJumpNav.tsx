import React from "react";
import {
  Compass,
  Coins,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  ListOrdered,
  AlertTriangle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { legacyText } from "@/data/text/legacy";

const NAV_ITEMS = [
  { href: "#overview", label: "Overview & Philosophy", icon: Compass, color: "text-teal-400" },
  { href: "#funding-routes", label: "Funding Routes", icon: Coins, color: "text-amber-400" },
  { href: "#gov-scholarships", label: "Government Scholarships", icon: Award, color: "text-emerald-400" },
  { href: "#phd-masters", label: "PhD & Master’s Models", icon: GraduationCap, color: "text-indigo-400" },
  { href: "#assistantships", label: "Assistantships", icon: Briefcase, color: "text-cyan-400" },
  { href: "#supervisor", label: "Supervisor Contact", icon: Users, color: "text-amber-400" },
  { href: "#language", label: "Language & Deadlines", icon: Clock, color: "text-teal-400" },
  { href: "#sequence", label: "Application Sequence", icon: ListOrdered, color: "text-indigo-400" },
  { href: "#warnings", label: "Warnings & Limitations", icon: AlertTriangle, color: "text-rose-400" },
  { href: "#portals", label: "Official Portals", icon: ExternalLink, color: "text-emerald-400" },
];

export function CountryJumpNav() {
  return (
    <div className="hidden lg:block w-72 xl:w-80 shrink-0">
      <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 sticky top-24 shadow-xl backdrop-blur-xl">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>{legacyText.countryJumpNav.t0}</span>
          </span>
          <span className="text-[10px] text-teal-400 font-normal">{legacyText.countryJumpNav.t1}</span>
        </h2>
        <nav className="space-y-1.5" aria-label={legacyText.countryJumpNav.t2}>
          {NAV_ITEMS.map((item) => {
            const ItemIcon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/15 transition-colors">
                    <ItemIcon className={`w-3 h-3 ${item.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-500 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-teal-400 transition-all shrink-0 ml-1" />
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default CountryJumpNav;
