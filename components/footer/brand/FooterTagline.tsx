import React from "react";
import { footerData } from "@/data/navigationData";

export function FooterTagline() {
  return (
    <p className="text-slate-400 leading-relaxed text-[12px] font-sans max-w-sm">
      {footerData.brand.tagline}
    </p>
  );
}

export default FooterTagline;
