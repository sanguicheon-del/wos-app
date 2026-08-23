import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`.trim()}>
      {children}
    </div>
  );
}
