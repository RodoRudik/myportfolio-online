import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Hero from './sections/Hero';
import Skills from './sections/Skills';
import FeaturedProject from './sections/FeaturedProject';
import About from './sections/About';
import Contact from './sections/Contact';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      navigate('/', {
        replace: true,
        state: null,
      });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProject />
      <About />
      <Contact />
    </>
  );
}

export default Home;