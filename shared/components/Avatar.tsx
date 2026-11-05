


const initialsOf = (name: string) => {
  const parts = name.replace(/[^\p{L}\s-]/gu, "").split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
};

interface AvatarProps {
  name: string;
  size?: number;
  square?: boolean;
}

/** Generated avatar: initials in the theme's foreground and background colours. */
export function Avatar({ name, size = 56, square = false }: AvatarProps) {
  
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, background: "var(--pure-fg)", color: "var(--pure-bg)", fontSize: size * 0.38 }}
      className={`flex shrink-0 items-center justify-center font-bold tracking-wide ${square ? "" : "rounded-full"}`}
    >
      {initialsOf(name)}
    </span>
  );
}
