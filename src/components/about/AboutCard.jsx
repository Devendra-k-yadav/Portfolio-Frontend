import Reveal from "../common/Reveal";

const AboutCard = () => (
  <div className="about-grid">
    <Reveal className="about-visual card">
      <img src="/dev.jpeg" alt="Developer workspace with multiple screens" />
    </Reveal>
    <Reveal className="card">
      <p>
        I&apos;m a passionate MERN Stack Developer with 2+ years of hands-on
        experience in building modern web applications. I love solving complex
        problems, learning new technologies and creating user-friendly products.
      </p>
      <div className="about-list">
        {[
          ["⌖", "Location", "India"],
          ["◷", "Experience", "2+ Years"],
          ["▣", "Education", "BCA (M.G. Kashi Vidyapith)"],
          ["◆", "Education", "MCA from IGNOU"],
          ["◆", "Education", "PGDCA from Udai Pratap Autonomous College"],
        ].map(([icon, label, value]) => (
          <div className="about-item" key={`${label}-${value}`}>
            <span className="about-item-icon">{icon}</span>
            <small>{label}</small>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </Reveal>
    <Reveal className="card delay-1">
      <p>
        I also work with modern development and delivery tools including Git,
        GitHub, Postman, Docker, CI/CD concepts and cloud deployment workflows.
        I use AI coding tools to improve productivity while keeping engineering
        decisions and code quality under control.
      </p>
      <div className="skills about-skills">
        {[
          "Clean Architecture",
          "REST APIs",
          "Authentication",
          "RBAC",
          "Responsive UI",
          "Performance",
        ].map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </Reveal>
  </div>
);

export default AboutCard;
