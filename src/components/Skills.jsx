import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
