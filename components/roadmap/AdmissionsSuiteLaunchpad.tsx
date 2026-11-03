"use client";

import React from "react";
import Link from "next/link";
import { Compass, Award, Mail, FileText } from "lucide-react";
import { admissionsLaunchpadData, AdmissionsLaunchpadItem } from "@/data/admissionsLaunchpadData";

function renderIcon(iconName: AdmissionsLaunchpadItem["iconName"]) {
  switch (iconName) {
    case "Compass":
      return <Compass className="w-5 h-5 text-teal-400 mb-2" />;
    case "Award":
      return <Award className="w-5 h-5 text-emerald-400 mb-2" />;
    case "Mail":
      return <Mail className="w-5 h-5 text-indigo-400 mb-2" />;
    case "FileText":
      return <FileText className="w-5 h-5 text-cyan-400 mb-2" />;
  }
}

export function AdmissionsSuiteLaunchpad() {
  const { badge, title, sublabel, items } = admissionsLaunchpadData;

  return (
    <section className="pt-12 border-t border-white/10">
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-canvas-card to-canvas-base border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
              {badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {title}
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {sublabel}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div>
                {renderIcon(item.iconName)}
                <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 flex items-center text-[11px] font-mono text-teal-400 font-semibold mt-3">
                <span>{item.ctaLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSuiteLaunchpad;
