import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Display({ children }: Props) {
  return (
    <h1
      style={{
        fontSize: "var(--text-display)",
        color: "var(--text-primary)",
        fontWeight: 700,
        letterSpacing: "-0.06em",
      }}
    >
      {children}
    </h1>
  );
}

export function H1({ children }: Props) {
  return (
    <h2
      style={{
        fontSize: "var(--text-h1)",
        color: "var(--text-primary)",
        fontWeight: 700,
      }}
    >
      {children}
    </h2>
  );
}

export function Body({ children }: Props) {
  return (
    <p
      style={{
        fontSize: "var(--text-body)",
        color: "var(--text-secondary)",
        lineHeight: 1.8,
      }}
    >
      {children}
    </p>
  );
}