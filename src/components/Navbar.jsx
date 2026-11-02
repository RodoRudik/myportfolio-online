import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          RE<span>.</span>
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/case-study">
            Case Study
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;