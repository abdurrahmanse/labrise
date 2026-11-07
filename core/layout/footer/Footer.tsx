import { footerGroupsData } from "@/content/site/navigationData";
import { commonText } from "@/content/text/common";
import { BackToTop } from "./BackToTop";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";

/** Site footer: brand and call to action, four link columns, and a bottom bar with the data note. */
export function Footer() {
  return (
    <footer role="contentinfo" className="relative z-10 mt-auto border-t-2 border-white/80 bg-canvas-base/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))] lg:px-8">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <FooterBrand />
        </div>
        {footerGroupsData.map((group) => (
          <FooterColumn key={group.title} group={group} />
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-mono text-xs text-slate-500">{commonText.brand.first}{commonText.brand.second} · {commonText.footer.tagline} · {commonText.footer.note}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
