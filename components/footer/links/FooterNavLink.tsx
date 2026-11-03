import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface FooterNavLinkProps {
  href: string;
  label: string;
}

export function FooterNavLink({ href, label }: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 hover:text-white text-slate-400 transition-colors text-xs"
    >
      <ChevronRight className="w-2.5 h-2.5 text-teal-400/50 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all shrink-0" />
      <span>{label}</span>
    </Link>
  );
}

export default FooterNavLink;
