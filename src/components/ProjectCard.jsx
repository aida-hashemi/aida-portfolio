import "./Projects.css";
function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <div className="tech-stack">
        {technologies?.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <p>{description}</p>

      <div className="buttons">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
