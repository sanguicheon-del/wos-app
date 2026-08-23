import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  asChild?: boolean;
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  asChild = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const variants = {
    primary:
      "border border-white/10 bg-white text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-zinc-100",
    secondary:
      "border border-white/10 bg-white/5 text-zinc-100 backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/10",
  };

  if (asChild) {
    return <div className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>{children}</div>;
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
