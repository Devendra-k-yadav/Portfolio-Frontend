import Reveal from "../common/Reveal";
import useTilt from "../../hooks/useTilt";

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt();

  return (
    <Reveal className={`card project delay-${index}`}>
      <article
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        {project.image && (
          <img
            className="project-image"
            src={project.image}
            alt={`${project.title} preview`}
          />
        )}
        <span className="project-number">{project.number}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
};

export default ProjectCard;
