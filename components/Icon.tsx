import type { ReactElement } from "react";

/**
 * Conjunto de ícones do sistema.
 * Grade 24, traço 1.5, ponta reta — o sistema não tem canto arredondado.
 * Glifos de marca (WhatsApp, Instagram) são a exceção: forma oficial,
 * cheios ou com o raio original, herdando currentColor.
 */
export type IconName =
  | "check" | "arrow" | "plus" | "clock" | "alert" | "play" | "doc"
  | "scale" | "shield" | "calc" | "phone" | "mail" | "pin"
  | "sun" | "moon" | "whatsapp" | "instagram";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

const PATHS: Record<IconName, ReactElement> = {
  check: <path d="M4 12.6 9.4 18 20 6.4" {...stroke} strokeWidth={1.9} />,
  arrow: <path d="M3.5 12h16M13 5.5l6.5 6.5L13 18.5" {...stroke} />,
  plus: <path d="M12 4.5v15M4.5 12h15" {...stroke} />,
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 6.6V12l4 2.4" />
    </g>
  ),
  alert: (
    <g {...stroke}>
      <path d="M12 3.4 21.6 20H2.4z" />
      <path d="M12 9.6v4.6M12 17.1h.01" />
    </g>
  ),
  play: <path d="M8.2 4.8 19 12 8.2 19.2z" {...stroke} strokeLinecap="butt" />,
  doc: (
    <g {...stroke}>
      <path d="M5.6 2.8h8.2l4.6 4.6v13.8H5.6z" />
      <path d="M13.8 2.8v4.6h4.6M8.8 12.4h6.4M8.8 16h4.4" />
    </g>
  ),
  scale: (
    <g {...stroke}>
      <path d="M12 3.4v17.2M7 20.6h10M3.4 7.6h17.2M12 5.6 3.4 7.6M12 5.6l8.6 2" />
      <path d="M3.4 7.6.8 14.4a2.9 2.9 0 0 0 5.2 0z" />
      <path d="M20.6 7.6 18 14.4a2.9 2.9 0 0 0 5.2 0z" />
    </g>
  ),
  shield: <path d="M12 2.8 20 6v6.2c0 4.7-3.2 7.9-8 9.2-4.8-1.3-8-4.5-8-9.2V6z" {...stroke} />,
  calc: (
    <g {...stroke}>
      <path d="M4.6 2.8h14.8v18.4H4.6zM8 6.6h8v3.2H8z" />
      <path d="M8.4 13.4h.01M12 13.4h.01M15.6 13.4h.01M8.4 17.4h.01M12 17.4h.01M15.6 17.4h.01" />
    </g>
  ),
  phone: (
    <path
      d="M6.4 2.8h4l2 5-2.5 1.9a12.6 12.6 0 0 0 5.4 5.4L17.2 12l5 2v4a2.2 2.2 0 0 1-2.4 2.2A17.2 17.2 0 0 1 4.2 5.2 2.2 2.2 0 0 1 6.4 2.8z"
      {...stroke}
    />
  ),
  mail: (
    <g {...stroke}>
      <path d="M2.8 4.8h18.4v14.4H2.8z" />
      <path d="m2.8 5.6 9.2 7.2 9.2-7.2" />
    </g>
  ),
  pin: (
    <g {...stroke}>
      <path d="M12 21.4c4.4-5 6.6-8.6 6.6-11.4A6.6 6.6 0 0 0 5.4 10c0 2.8 2.2 6.4 6.6 11.4z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </g>
  ),
  sun: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 1.8v3M12 19.2v3M1.8 12h3M19.2 12h3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M19.2 4.8l-2.1 2.1M6.9 17.1l-2.1 2.1" />
    </g>
  ),
  moon: <path d="M20.4 14.6A8.8 8.8 0 0 1 9.4 3.6a9.2 9.2 0 1 0 11 11z" {...stroke} />,
  whatsapp: (
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2.9" y="2.9" width="18.2" height="18.2" rx="5.2" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.05" fill="currentColor" stroke="none" />
    </g>
  ),
};

export function Icon({ name, size = 18, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ flex: "none" }}
    >
      {PATHS[name]}
    </svg>
  );
}
