import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'PostgreSQL'],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p className="section-eyebrow">MY TECHNICAL BACKGROUND</p>
        <h2>Technical Skills</h2>
        <p>
          Technologies and tools I use while building web applications
          and expanding my Full-Stack development knowledge.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;