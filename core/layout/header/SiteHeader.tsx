"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { GlobalSearch } from "@/modules/search";
import { ThemeToggle } from "@/modules/theme";
import { cn } from "@/shared/utils/cn";
import { HeaderActions } from "./HeaderActions";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderMobileDrawer } from "./HeaderMobileDrawer";
import { HeaderNav } from "./HeaderNav";
import { HeaderSupportLink } from "./HeaderSupportLink";
import { useHeaderScrolled } from "./useHeaderScrolled";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useHeaderScrolled();

  // Reset mobile drawer during render if pathname changes per React guidance
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-200",
          scrolled ? "border-white/15 bg-canvas-base/85 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.35)]" : "border-white/10 bg-canvas-base/60"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3">
            <HeaderBrand />

            <div className="flex justify-center">
              <HeaderNav pathname={pathname} />
            </div>

            <div className="flex items-center gap-2">
              <GlobalSearch />
              <ThemeToggle />
              <HeaderSupportLink className="hidden lg:inline-flex" />
              <HeaderActions mobileOpen={mobileOpen} onToggle={() => setMobileOpen((prev) => !prev)} />
            </div>
          </div>
        </div>
      </header>

      <HeaderMobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}

export default SiteHeader;
