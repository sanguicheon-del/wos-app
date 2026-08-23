export const radius = {
  none: '0px',
  sm: '10px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  full: '9999px',
} as const;

export type Radius = typeof radius;
