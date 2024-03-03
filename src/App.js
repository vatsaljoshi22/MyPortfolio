// App.js

import React from 'react';
import './App.css'; // Import your CSS files
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer>
        <p>Copyright &copy; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
