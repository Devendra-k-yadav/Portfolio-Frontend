import Particles from "./Particles";
import GridBackground from "./GridBackground";
import MouseGlow from "./MouseGlow";
import Orbs from "./Orbs";

const Background = () => {
  return (
    <>
      <div className="ambient-background">
        <span className="ambient-shape shape-purple" />
        <span className="ambient-shape shape-teal" />
        <span className="ambient-shape shape-pink" />
      </div>
      <GridBackground />
      <Particles />
      <MouseGlow />
      <Orbs />
    </>
  );
};

export default Background;
