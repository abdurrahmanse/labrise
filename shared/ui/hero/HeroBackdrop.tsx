interface HeroBackdropProps {
  spotlight: string;
  orbLeft: string;
  orbRight: string;
}

/** Decorative layers behind the hero: horizon line, spotlight and two soft glows. Carries no content. */
export function HeroBackdrop({ spotlight, orbLeft, orbRight }: HeroBackdropProps) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none" style={{ background: spotlight }} />
      <div className={`absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] ${orbLeft} blur-[100px] pointer-events-none rounded-full`} />
      <div className={`absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] ${orbRight} blur-[110px] pointer-events-none rounded-full`} />
    </>
  );
}
