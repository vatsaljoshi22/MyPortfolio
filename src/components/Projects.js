// components/Projects.js

import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/'}>
                Live Demo
              </button>
            </div>
          </div>
          {/* Add similar project containers for other projects */}
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
    </section>
  );
};

export default Projects;
