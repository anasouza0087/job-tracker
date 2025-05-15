export const theme = {
  colors: {
    primary: "#4f46e5", // Indigo
    secondary: "#06b6d4", // Cyan
    background: "#f9fafb",
    text: "#111827",
    muted: "#6b7280",
    danger: "#ef4444",
  },
  spacing: [0, 4, 8, 16, 24, 32, 40],
  fontSizes: {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  fontFamily: `'Inter', sans-serif`,
  buttons: {
    hover: {
      opacity: 0.9,
    },
  },
};

export type ThemeType = typeof theme;
