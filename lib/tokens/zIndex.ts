export const zIndex = {
  base: 0,
  elevated: 10,
  overlay: 20,
  modal: 30,
  toast: 40,
} as const;

export type ZIndex = typeof zIndex;
