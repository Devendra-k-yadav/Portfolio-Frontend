import AboutCard from "../../components/about/AboutCard";
import ContactSection from "../../components/contact/ContactSection";
import Reveal from "../../components/common/Reveal";
import SectionHead from "../../components/common/SectionHead";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";
import Hero from "../../components/home/Hero";
import ProjectCard from "../../components/projects/ProjectCard";
import ServiceCard from "../../components/services/ServiceCard";
import SkillGroup from "../../components/skills/SkillGroup";
import portfolioConstants from "../../utils/constants";

const { projects, services, skillGroups } = portfolioConstants;

const achievements = [
  "Built 5+ Real-world Projects",
  "2+ Years Professional Experience",
  "Learning New Technologies",
];
const hobbies = [
  ["</>", "Coding"],
  ["▧", "Reading"],
  ["♫", "Music"],
  ["◉", "Gaming"],
  ["✈", "Travel"],
  ["✿", "Photography"],
];

const Home = () => {
  return (
    <main>
      <Hero />
      <section id="about">
        <div className="container">
          <SectionHead
            kicker="✦ About Me"
            title="Developer mindset, product-focused execution."
            description="I care about maintainable architecture, great UX, API reliability and shipping features that solve real business problems."
          />
          <AboutCard />
        </div>
      </section>
      <section id="skills">
        <div className="container">
          <SectionHead
            kicker="⌘ Technical Skills"
            title="The tools I work with."
          />
          <Reveal className="card skill-panel">
            {skillGroups.map(([title, skills]) => (
              <SkillGroup key={title} title={title} skills={skills} />
            ))}
          </Reveal>
        </div>
      </section>
      <section id="experience">
        <div className="container">
          <SectionHead
            kicker="▣ Work Experience"
            title="Where I've been building things."
          />
          <div className="experience-layout">
            <ExperienceTimeline />
            <Reveal className="stats-card card">
              <div>
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>Projects Completed</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Learning &amp; Growing</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <SectionHead
            kicker="🚀 Featured Projects"
            title="Selected work."
            description="A few projects that demonstrate my approach to full-stack development and system design."
          />
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="lower-grid-section">
        <div className="container lower-grid">
          <Reveal className="card list-card">
            <SectionHead kicker="🏆 Achievements" title="Milestones so far." />
            {achievements.map((achievement) => (
              <p key={achievement}>
                <span>✓</span>
                {achievement}
              </p>
            ))}
          </Reveal>
          <Reveal className="card quote-card">
            <SectionHead
              kicker="❝ What People Say"
              title="A little appreciation."
            />
            <blockquote>
              &ldquo;Devendra is a dedicated developer with strong
              problem-solving skills. He delivers high-quality code and is
              always eager to learn new technologies.&rdquo;
            </blockquote>
            <small>
              Team Lead
              <br />
              <strong>Axonaio technologies</strong>
            </small>
          </Reveal>
          <Reveal className="card hobbies-card">
            <SectionHead
              kicker="♥ Hobbies &amp; Interests"
              title="Beyond the code."
            />
            <div className="hobbies">
              {hobbies.map(([icon, name]) => (
                <div key={name}>
                  <b>{icon}</b>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <SectionHead
            kicker="✈ What I Do"
            title="From idea to working product."
          />
          <div className="services">
            {services.map((service, index) => (
              <ServiceCard key={service[1]} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default Home;
