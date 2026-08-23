export default function Nebula() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 700,
          top: -220,
          left: -240,
          borderRadius: "50%",
          filter: "blur(190px)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 24%, transparent 72%)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 780,
          height: 620,
          bottom: -220,
          right: -190,
          borderRadius: "50%",
          filter: "blur(180px)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 24%, transparent 72%)",
          opacity: 0.55,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 520,
          height: 400,
          top: -80,
          right: -60,
          borderRadius: "50%",
          filter: "blur(170px)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          opacity: 0.45,
        }}
      />
    </>
  );
}
