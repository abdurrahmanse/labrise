import React from "react";
import { footerData } from "@/data/navigationData";
import { FooterSectionHeading } from "./FooterSectionHeading";
import { FooterNavList } from "./FooterNavList";
import { FooterNavLink } from "./FooterNavLink";

export function FooterToolsSection() {
  return (
    <div>
      <FooterSectionHeading
        title={footerData.sections.tools}
        colorClass="text-cyan-400"
      />
      <FooterNavList>
        {footerData.directoryAndTools.map((link) => (
          <li key={link.href}>
            <FooterNavLink href={link.href} label={link.label} />
          </li>
        ))}
      </FooterNavList>
    </div>
  );
}

export default FooterToolsSection;
