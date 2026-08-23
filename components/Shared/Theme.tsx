export const theme = {
  colors: {
    background: "#050505",
    textPrimary: "#F5F5F7",
    textSecondary: "#86868B",
    border: "rgba(255,255,255,0.1)",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
} as const;

export default function Theme({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
