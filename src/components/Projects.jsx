import "./Projects.css";
import ProjectCard from "./ProjectCard";
import portfolio from "../assets/portfolio.png";
import todo from "../assets/todo.jpg";
import weather from "../assets/weather.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: portfolio,
      description: "A responsive portfolio website built with React.",
      technologies: ["React", "CSS", "Vite"],
      github: "https://github.com",
      demo: "https://aida-portfolio-wheat.vercel.app/",
    },
    {
      id: 2,
      title: "Weather App",
      image: weather,
      description: "Weather forecast application using an API.",
      technologies: ["React", "JavaScript", "API"],
      github: "https://github.com/aida-hashemi/aida-portfolio",
      demo: "https://google.com",
    },
    {
      id: 3,
      title: "Todo App",
      image: todo,
      description: "Task management application.",
      technologies: ["React", "CSS"],
      github: "https://github.com",
      demo: "https://google.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </section>
  );
}

export default Projects;
