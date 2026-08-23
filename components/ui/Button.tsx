"use client";

import { ButtonHTMLAttributes, useState } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  ...props
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <button
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        height: 48,
        padding: "0 22px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,.08)",
        background: hover
          ? "rgba(255,255,255,.12)"
          : "rgba(255,255,255,.06)",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all .25s ease",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {children}
    </button>
  );
}