import Reveal from "../common/Reveal";
import ProfileCard from "./ProfileCard";
import QuickStats from "./QuickStats";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <div className="eyebrow">
            <span className="dot" /> Available for opportunities
          </div>
          <h1>
            Hi, I&apos;m <span className="gradient">Devendra Yadav</span> 👋
          </h1>
          <p>
            MERN Stack Developer with 2+ years of experience in building
            scalable web applications using React.js, Node.js, Express.js and
            MongoDB. Love turning ideas into real-world products.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work ↗
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
            <a
              className="btn btn-resume"
              href="/Dev(MERN)Resume.pdf"
              download="Devendra-Yadav-Resume.pdf"
            >
              ↓ Download Resume
            </a>
          </div>
          <QuickStats />
        </Reveal>
        <ProfileCard />
      </div>
    </section>
  );
};

export default Hero;
