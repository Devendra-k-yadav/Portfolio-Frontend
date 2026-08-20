import Reveal from "../common/Reveal";

const ExperienceTimeline = () => (
  <Reveal className="card">
    <div className="timeline">

      <div className="timeline-item">
        <span className="timeline-dot" />
        <h3>Full Stack / MERN Developer</h3>
        <div className="timeline-meta">Axonaio technologies pvt ltd</div>
        <p>
          Built reusable frontend components, backend APIs, authentication
          flows, role-based access control and data-driven interfaces with a
          focus on maintainability and production-ready practices.
        </p>
      </div>
      <div className="timeline-item">
        <span className="timeline-dot" />
        <h3> Web Developer</h3>
        <div className="timeline-meta">SM web solutions Pvt. Ltd.</div>
        <p>
          Developed and maintained web applications using React.js, Redux,
          Node.js, Express.js and MongoDB. Worked across UI development, REST
          API integration, authentication, debugging and feature delivery.
        </p>
      </div>
      
    </div>
  </Reveal>
);

export default ExperienceTimeline;
