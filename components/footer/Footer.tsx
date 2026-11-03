import React from "react";
import Link from "next/link";
import { footerLinksData } from "@/data/navigationData";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto relative z-10 border-t-2 border-white/80 bg-canvas-base/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-bold text-lg text-white uppercase tracking-wider">
          Scholarship <span className="text-indigo-400">Roadmap</span>
        </Link>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {footerLinksData.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-400 hover:text-indigo-300">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-xs text-slate-500">
          Free and open
        </p>
      </div>
    </footer>
  );
}

export default Footer;
