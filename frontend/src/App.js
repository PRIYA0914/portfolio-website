import React from 'react';


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.css';

function FadeInSection({ children, delay = 0, id }) {
  const ref = React.useRef();
  const [isVisible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.8s ${delay}s cubic-bezier(.4,0,.2,1), transform 0.8s ${delay}s cubic-bezier(.4,0,.2,1)`
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FadeInSection id="home"><Hero /></FadeInSection>
        <FadeInSection id="about" delay={0.1}><About /></FadeInSection>
        <FadeInSection id="skills" delay={0.2}><Skills /></FadeInSection>
        <FadeInSection id="projects" delay={0.3}><Projects /></FadeInSection>
        <FadeInSection id="experience" delay={0.4}><Experience /></FadeInSection>
        <FadeInSection id="education" delay={0.5}><Education /></FadeInSection>
        <FadeInSection id="contact" delay={0.6}><Contact /></FadeInSection>
      </main>
     
    </div>
  );
}

export default App;