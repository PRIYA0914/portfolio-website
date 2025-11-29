import React, { useState, useEffect } from "react";
import './styles/main.css';

// Use the components that exist in the repo
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import ThreeDBox from './components/ThreeDBox';

function Prompt({ children }) {
  return <div className="prompt" aria-live="polite">{children}</div>;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [navbarLoaded, setNavbarLoaded] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoaded(true), 800);
    const t2 = setTimeout(() => setNavbarLoaded(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    // small centered preloader using the existing ThreeDBox
    return (
      <div style={{height: '100vh', display: 'grid', placeItems: 'center'}}>
        <ThreeDBox width="180px" height="140px" />
      </div>
    );
  }

  return (
    <>
      <Prompt>hi</Prompt>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;