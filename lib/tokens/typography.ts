export const typography = {
  family: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.75rem',
    '5xl': '3.5rem',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  leading: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.75,
  },
  tracking: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const;

export type Typography = typeof typography;
