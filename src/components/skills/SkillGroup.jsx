import SkillBadge from "./SkillBadge";

const SkillGroup = ({ title, skills }) => (
  <div className="skill-group">
    <h3>{title}</h3>
    <div className="skills">
      {skills.map((skill) => (
        <SkillBadge key={skill}>{skill}</SkillBadge>
      ))}
    </div>
  </div>
);

export default SkillGroup;
