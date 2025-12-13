import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.css';

function FadeInSection({ children, delay = 0 }) {
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
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection delay={0.1}><Skills /></FadeInSection>
        <FadeInSection delay={0.2}><Projects /></FadeInSection>
        <FadeInSection delay={0.3}><Experience /></FadeInSection>
        <FadeInSection delay={0.4}><Education /></FadeInSection>
        <FadeInSection delay={0.5}><Contact /></FadeInSection>
      </main>
     
    </div>
  );
}

export default App;