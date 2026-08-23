export const colors = {
  background: {
    canvas: '#050505',
    elevated: '#0b0b0b',
    overlay: 'rgba(255, 255, 255, 0.05)',
    surface: 'rgba(255, 255, 255, 0.04)',
  },
  text: {
    primary: '#f5f5f7',
    secondary: '#8f8f96',
    tertiary: '#5b5b61',
    inverse: '#050505',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)',
    strong: 'rgba(255, 255, 255, 0.18)',
  },
  accent: {
    primary: '#ffffff',
    secondary: '#dcdce0',
  },
} as const;

export type Colors = typeof colors;
