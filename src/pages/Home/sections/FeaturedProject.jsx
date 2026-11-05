import { Link } from 'react-router-dom';
import './FeaturedProject.css';

function FeaturedProject() {
  return (
    <section className="featured-project" id="projects">
      <div className="section-heading">
        <p className="section-eyebrow">SELECTED WORK</p>
        <h2>Featured Project</h2>
        <p>
          A practical web application project focused on connecting
          barbers with potential clients.
        </p>
      </div>

      <article className="project-card">
        <div className="project-preview">
          <span>PROJECT PREVIEW</span>
        </div>

        <div className="project-information">
          <p className="project-status">FRONTEND PROTOTYPE</p>

          <h3>Barber Business Platform</h3>

          <p className="project-description">
            A web application concept that allows barbers to create
            business profiles, display their services and prices,
            and share their availability with potential clients.
          </p>

          <div className="project-technologies">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>HTML5</span>
          </div>

          <Link to="/case-study" className="project-link">
            View case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default FeaturedProject;