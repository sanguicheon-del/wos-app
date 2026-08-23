type LogoProps = {
  size?: number;
};

export default function Logo({ size = 230 }: LogoProps) {
  return (
    <svg
      width={size}
      height={(size * 180) / 250}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="
          M20 20
          L45 130
          L80 45
          L115 130
          L140 20
          L120 20
          L102 98
          L80 42
          L58 98
          L40 20
          Z
        "
        fill="white"
      />

      <circle
        cx="178"
        cy="18"
        r="14"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
}