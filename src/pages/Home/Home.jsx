import Hero from './sections/Hero';
import Skills from './sections/Skills';
import FeaturedProject from './sections/FeaturedProject';
import About from './sections/About';
import Contact from './sections/Contact';

function Home() {
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
