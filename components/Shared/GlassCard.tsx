import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl ${className}`.trim()}>
      {children}
    </div>
  );
}
