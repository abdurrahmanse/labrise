"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";
import { HeaderMobileDrawer } from "./HeaderMobileDrawer";
import { ThemeToggle } from "@/modules/theme";
import { GlobalSearch } from "@/modules/search";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Reset mobile drawer during render if pathname changes per React guidance
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-white/80 bg-canvas-base/70 backdrop-blur-xl backdrop-saturate-150 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* ── Brand Mark ── */}
            <HeaderBrand />

            {/* ── Desktop Navigation Links ── */}
            <HeaderNav pathname={pathname} />

            {/* ── Right-Side Actions (Search, CTA, Hamburger) ── */}
            <div className="flex items-center gap-2">
              <GlobalSearch />
              <ThemeToggle />
              <HeaderActions
                mobileOpen={mobileOpen}
                onToggle={() => setMobileOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Slide-Over Drawer ── */}
      <HeaderMobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

export default SiteHeader;
