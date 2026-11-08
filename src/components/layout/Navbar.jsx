import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import LanguageSwitcher from '../../features/i18n/LanguageSwitcher';
import { useLanguage } from '../../features/i18n/LanguageContext';

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useLanguage();

  const navigationItems = [
    { label: t('navigation.skills'), id: 'skills' },
    { label: t('navigation.projects'), id: 'projects' },
    { label: t('navigation.about'), id: 'about' },
    { label: t('navigation.contact'), id: 'contact' },
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

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
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
            {t('navigation.home')}
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
            {t('navigation.caseStudy')}
          </NavLink>

          <LanguageSwitcher />
        </nav>

      </div>
    </header>
  );
}

export default Navbar;