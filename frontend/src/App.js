import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Logo from "./Logo";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contactus from "./Contactus";
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.css';

function Prompt({ children }) {
  return <div className="prompt" aria-live="polite">{children}</div>;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [navbarLoaded, setNavbarLoaded] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoaded(true), 1000);
    const t2 = setTimeout(() => setNavbarLoaded(true), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Canvas>
        <Logo />
      </Canvas>
    );
  } else {
    return (
      <>
        <Prompt>hi</Prompt>
        <Navbar navbarLoaded={navbarLoaded} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;