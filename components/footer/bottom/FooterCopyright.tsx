import React from "react";
import { footerData } from "@/data/navigationData";

export function FooterCopyright() {
  return (
    <p className="text-[11px] text-slate-500 font-mono leading-relaxed">
      {footerData.copyright}
    </p>
  );
}

export default FooterCopyright;
