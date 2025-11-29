import React from 'react';
import { Canvas } from '@react-three/fiber';
import NavbarEffect from '../three/NavbarEffect';
import './Navbar3D.css';

const Navbar3D = () => {
  return (
    <div className="navbar-3d">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NavbarEffect />
      </Canvas>
      <nav className="navbar-content">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar3D;