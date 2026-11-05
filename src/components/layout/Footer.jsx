import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Rodolfo Espinosa.
          All rights reserved.
        </p>

        <p>Junior Full-Stack Developer</p>
      </div>
    </footer>
  );
}

export default Footer;