export default function Noise() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.035,
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.24) 0.4px, transparent 0.8px)",
        backgroundSize: "5px 5px",
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      }}
    />
  );
}
