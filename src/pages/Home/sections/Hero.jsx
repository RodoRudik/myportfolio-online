import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  // Replace this file with your preferred portrait if you change the image.
  const profileImage = `${import.meta.env.BASE_URL}images/profile/rodo.jpg`;

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">FULL-STACK DEVELOPER</p>

        <h1>
          Hi, I'm <span>Rodolfo Espinosa.</span>
        </h1>

        <h2>Junior Full-Stack Developer</h2>

        <p className="hero-description">
          I'm passionate about building web applications
          and developing practical solutions through code.
          Currently expanding my knowledge and experience
          in Full-Stack Web Development.
        </p>

        <Link to="/case-study" className="hero-button">
          Explore my work <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="hero-image-container">
        <img
          src={profileImage}
          alt="Portrait of Rodolfo Espinosa"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
