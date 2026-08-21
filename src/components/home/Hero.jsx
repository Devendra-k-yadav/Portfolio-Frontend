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
            Building <span className="gradient">scalable web products</span> with clean code.
          </h1>
          <p>
            I&apos;m <strong>Devendra Yadav</strong>, a Full Stack MERN Developer with <strong>2+ years of experience</strong> building responsive React applications, secure Node.js APIs and production-ready web solutions.
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
