// Navbar.js

import React from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <nav id="desktop-nav">
      <div className="logo">Vatsal joshi</div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
