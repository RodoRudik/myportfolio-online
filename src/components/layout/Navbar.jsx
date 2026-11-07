import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  function handleSectionNavigation(sectionId) {
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/', {
        state: { scrollTo: sectionId },
      });

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function handleLogoClick() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={handleLogoClick}
        >
          RE<span>.</span>
        </NavLink>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-navigation"
          className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSectionNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}

          <NavLink
            to="/case-study"
            onClick={() => setMenuOpen(false)}
          >
            Case Study
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;