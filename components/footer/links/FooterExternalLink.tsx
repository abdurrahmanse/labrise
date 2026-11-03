import React from "react";
import { ExternalLink } from "lucide-react";

export interface FooterExternalLinkProps {
  href: string;
  label: string;
}

export function FooterExternalLink({ href, label }: FooterExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-400 group text-xs"
    >
      <span>{label}</span>
      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
    </a>
  );
}

export default FooterExternalLink;
