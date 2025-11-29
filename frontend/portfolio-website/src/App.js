import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Logo from "./three/Logo";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar3D"; // Updated to use Navbar3D
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
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