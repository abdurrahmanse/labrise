import React from "react";
import { footerData } from "@/data/navigationData";
import { FooterSectionHeading } from "./FooterSectionHeading";
import { FooterNavList } from "./FooterNavList";
import { FooterExternalLink } from "./FooterExternalLink";
import { FooterNavLink } from "./FooterNavLink";

export function FooterDatabasesSection() {
  return (
    <div>
      <FooterSectionHeading
        title={footerData.sections.databases}
        colorClass="text-purple-400"
      />
      <FooterNavList>
        {footerData.keyDatabases.map((db) => (
          <li key={db.href}>
            {db.external ? (
              <FooterExternalLink href={db.href} label={db.label} />
            ) : (
              <FooterNavLink href={db.href} label={db.label} />
            )}
          </li>
        ))}
      </FooterNavList>
    </div>
  );
}

export default FooterDatabasesSection;
