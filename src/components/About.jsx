import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <p className="section-eyebrow">A LITTLE ABOUT ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Junior Full-Stack Developer with a background in
            web development and a strong interest in building
            practical, user-focused applications.
          </p>

          <p>
            I've completed structured training in Full-Stack Web
            Development, gaining knowledge of technologies such as
            JavaScript, React, Node.js, Express, and PostgreSQL.
            I've been applying these skills through personal projects
            that help me strengthen my development experience.
          </p>

          <p>
            I'm currently looking for my first professional
            opportunity in software development, where I can
            contribute, collaborate with a team, and continue
            growing as a developer.
          </p>
        </div>

        <div className="about-details">
          <div className="about-detail">
            <span className="detail-label">ROLE</span>
            <span>Junior Full-Stack Developer</span>
          </div>

          <div className="about-detail">
            <span className="detail-label">FOCUS</span>
            <span>Web Application Development</span>
          </div>

          <div className="about-detail">
            <span className="detail-label">CURRENT GOAL</span>
            <span>First Professional Opportunity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;