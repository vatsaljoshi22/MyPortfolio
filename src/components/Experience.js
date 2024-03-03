// components/Experience.js

import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="details-container">
        <h2 className="experience-sub-title">Frontend Development</h2>
        <div className="article-container">
          <article>
            <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
            <div>
              <h3>HTML</h3>
              <p>Experienced</p>
            </div>
          </article>
          {/* Add similar articles for other experiences */}
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
    </section>
  );
};

export default Experience;
