import React from "react";
import { FooterCopyright } from "./FooterCopyright";
import { FooterAttribution } from "./FooterAttribution";
import { FooterBackToTop } from "./FooterBackToTop";
import { FooterStatusPing } from "./FooterStatusPing";

export function FooterBottomBarSection() {
  return (
    <div className="pt-8 border-t border-white/[0.06] flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
      {/* Copyright text */}
      <div className="max-w-xl">
        <FooterCopyright />
      </div>

      {/* Right controls: Attribution + Status + Back to Top */}
      <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
        <FooterAttribution />
        <FooterStatusPing />
        <FooterBackToTop />
      </div>
    </div>
  );
}

export default FooterBottomBarSection;
