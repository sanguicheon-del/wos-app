import Background from "./Background";
import Nebula from "./Nebula";
import Noise from "./Noise";
import Stars from "./Stars";

export default function Cosmos() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <Background />
      <Nebula />
      <Stars />
      <Noise />
    </div>
  );
}