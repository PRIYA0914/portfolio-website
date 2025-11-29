import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some styles for the Navbar

const Navbar = ({ navbarLoaded }) => {
  return (
    <nav className={`navbar ${navbarLoaded ? 'loaded' : ''}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;