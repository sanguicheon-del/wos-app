import type { ReactNode, ElementType } from "react";

import Container from "@/components/Shared/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
};

export default function Section({
  children,
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={`py-24 sm:py-28 lg:py-32 ${className}`.trim()}>
      <Container>{children}</Container>
    </Component>
  );
}
