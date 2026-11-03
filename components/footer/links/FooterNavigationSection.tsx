import React from "react";
import { footerData } from "@/data/navigationData";
import { FooterSectionHeading } from "./FooterSectionHeading";
import { FooterNavList } from "./FooterNavList";
import { FooterNavLink } from "./FooterNavLink";

export function FooterNavigationSection() {
  return (
    <div>
      <FooterSectionHeading
        title={footerData.sections.roadmap}
        colorClass="text-indigo-400"
      />
      <FooterNavList>
        {footerData.roadmapNavigation.map((link) => (
          <li key={link.href}>
            <FooterNavLink href={link.href} label={link.label} />
          </li>
        ))}
      </FooterNavList>
    </div>
  );
}

export default FooterNavigationSection;
