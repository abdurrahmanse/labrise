import React from "react";
import Link from "next/link";
import {
  Map,
  Globe2,
  Search,
  Users,
  FileCheck,
  Send,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { QuickNavItem } from "@/data/homeData";

const ICON_MAP = {
  Map,
  Globe2,
  Search,
  Users,
  FileCheck,
  Send,
  HelpCircle
};

export interface QuickNavCardProps {
  item: QuickNavItem;
  ctaText: string;
}

export function QuickNavCard({ item, ctaText }: QuickNavCardProps) {
  const Icon = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Map;

  return (
    <Link
      href={item.href}
      className="p-5 rounded-2xl bg-slate-900/50 border border-white/[0.07] hover:border-white/20 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group shadow-sm"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-white mb-3.5 group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5 text-teal-400" />
        </div>
        <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.description}</p>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 group-hover:text-teal-300 pt-2 border-t border-white/5">
        <span>{ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default QuickNavCard;
