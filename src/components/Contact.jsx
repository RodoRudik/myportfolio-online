import './Contact.css';


function Contact() {
  // Replace these values with your real contact information.
  const email = 'rodolfoapiwork@gmail.com';
  const githubUrl = 'https://github.com/RodoRudik';
  const linkedinUrl = 'https://www.linkedin.com/in/your-profile/';
  const cvUrl = `${import.meta.env.BASE_URL}documents/Rodolfo-Espinosa-CV.pdf`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="section-eyebrow">GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p className="contact-description">
          I'm currently looking for my first professional opportunity
          in software development. If you're interested in my profile
          or would like to discuss a project, feel free to contact me.
        </p>

        <a
          href={`mailto:${email}`}
          className="contact-email"
        >
          {email}
        </a>

        <div className="contact-links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;