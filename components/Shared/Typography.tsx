import type { ReactNode, ElementType } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export default function Typography({ children, className = "", as: Component = "p" }: TypographyProps) {
  return <Component className={className}>{children}</Component>;
}
