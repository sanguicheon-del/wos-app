export default function Background() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#050505",
          overflow: "hidden",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "-6%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 56%)",
          filter: "blur(40px)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.04) 0%, transparent 32%), radial-gradient(ellipse at 80% 15%, rgba(255,255,255,0.035) 0%, transparent 28%), radial-gradient(ellipse at 12% 88%, rgba(255,255,255,0.03) 0%, transparent 24%), radial-gradient(ellipse at 86% 86%, rgba(255,255,255,0.03) 0%, transparent 24%)",
          filter: "blur(90px)",
          opacity: 0.8,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 22%, transparent 78%, rgba(255,255,255,0.01) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.12) 48%, rgba(0,0,0,0.95) 100%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
