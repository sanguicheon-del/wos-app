import type { ReactNode } from "react";

type PlaceholderCardProps = {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PlaceholderCard({
  label,
  title,
  description,
  children,
}: PlaceholderCardProps) {
  return (
    <article className="border border-[#e6e0d8] bg-[#fbfaf8] p-5">
      <p className="text-[9px] uppercase tracking-[0.2em] text-[#7a7065]">{label}</p>
      <h2 className="mt-3 text-xl font-normal tracking-[-0.02em] text-[#292621]">{title}</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#71685e]">{description}</p>
      {children}
    </article>
  );
}
