import { renderCommonIcon } from "./IconUtils";
import { HeroBackdrop } from "./hero/HeroBackdrop";
import { HeroBadge } from "./hero/HeroBadge";
import { HeroHighlights } from "./hero/HeroHighlights";
import { HeroTitle } from "./hero/HeroTitle";
import { THEME_STYLES } from "./hero/heroThemes";
import type { PageHeroProps } from "./hero/types";

export type { PageHeroHighlight, PageHeroProps, PageHeroTheme } from "./hero/types";

/** Page header: badge, title, subtitle, optional actions and highlights, over a decorative backdrop. */
export function PageHero({
  badge,
  badgeIconName,
  badgeIcon,
  theme = "indigo",
  title,
  highlightWord,
  subtitle,
  highlights = [],
  gradientText,
  children
}: PageHeroProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.indigo;
  const icon = badgeIcon || (badgeIconName ? renderCommonIcon(badgeIconName, "w-3.5 h-3.5 " + styles.badgeText) : null);

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b-2 border-white/80 bg-canvas-base/70 backdrop-blur-sm">
      <HeroBackdrop spotlight={styles.spotlight} orbLeft={styles.orbLeft} orbRight={styles.orbRight} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <HeroBadge label={badge} icon={icon} styles={styles} />
        <HeroTitle title={title} highlightWord={highlightWord} gradient={gradientText || styles.gradient} />
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-sans font-normal px-2">
          {subtitle}
        </p>
        {children && <div className="mb-6 sm:mb-8">{children}</div>}
        {highlights.length > 0 && <HeroHighlights items={highlights} iconClass={styles.defaultHighlightIcon} />}
      </div>
    </section>
  );
}

export default PageHero;
