import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { commonText } from "@/data/text/common";
import { footerLinksData } from "@/data/navigationData";
import { IconFor } from "@/shared/components/IconFor";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto relative z-10 border-t-2 border-white/80 bg-canvas-base/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg text-white uppercase tracking-wider">
          <GraduationCap className="h-5 w-5 text-indigo-400" aria-hidden />
          <span>
            {commonText.brand.first} <span className="text-indigo-400">{commonText.brand.second}</span>
          </span>
        </Link>

        <nav aria-label={commonText.header.footerNav} className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {footerLinksData.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-slate-400 hover:text-indigo-300">
                <IconFor text={l.label} className="h-4 w-4" />
                {l.label}
              </Link>
          ))}
        </nav>

        <p className="font-mono text-xs text-slate-500">{commonText.footer.tagline}</p>
      </div>
    </footer>
  );
}

export default Footer;
