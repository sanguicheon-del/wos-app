export const shadow = {
  sm: '0 6px 24px rgba(0, 0, 0, 0.18)',
  md: '0 12px 48px rgba(0, 0, 0, 0.28)',
  lg: '0 20px 80px rgba(0, 0, 0, 0.36)',
  glow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 10px 40px rgba(255, 255, 255, 0.12)',
} as const;

export type Shadow = typeof shadow;
