export const motion = {
  duration: {
    fast: 160,
    normal: 240,
    slow: 360,
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    expressive: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type Motion = typeof motion;
