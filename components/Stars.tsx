const stars = Array.from({ length: 140 }, (_, i) => {
  const x = ((i * 53) % 1000) / 10;
  const y = ((i * 79) % 1000) / 10;
  const size = ((i * 11) % 7) * 0.3 + 0.35;
  const opacity = (((i * 29) % 100) / 100) * 0.55 + 0.16;

  return {
    id: i,
    x,
    y,
    size,
    opacity,
    glow: i % 9 === 0,
  };
});

export default function Stars() {
  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "#f5f5f5",
            opacity: star.opacity,
            boxShadow: star.glow
              ? `0 0 ${star.size * 3}px rgba(255,255,255,0.45)`
              : "none",
          }}
        />
      ))}
    </>
  );
}
