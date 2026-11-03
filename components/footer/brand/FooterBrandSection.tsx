import React from "react";
import { FooterBrandName } from "./FooterBrandName";
import { FooterTagline } from "./FooterTagline";
import { FooterVerifiedBadge } from "./FooterVerifiedBadge";

export function FooterBrandSection() {
  return (
    <div className="space-y-4">
      <FooterBrandName />
      <FooterTagline />
      <FooterVerifiedBadge />
    </div>
  );
}

export default FooterBrandSection;
