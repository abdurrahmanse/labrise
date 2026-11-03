interface HeroTitleProps {
  title: string;
  /** Last word(s) drawn with the gradient. */
  highlightWord?: string;
  gradient: string;
}

export function HeroTitle({ title, highlightWord, gradient }: HeroTitleProps) {
  return (
    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] font-heading break-words px-1">
      {title}{" "}
      {highlightWord && <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{highlightWord}</span>}
    </h1>
  );
}
