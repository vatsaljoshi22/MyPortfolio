// components/Profile.js

import React from 'react';
import './Profile.css'; // Import the CSS file for Profile

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/Hero.png.png" alt="Vatsal Joshi profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1"></p>
        <h1 className="title">Hello , I'm 
        <br />Vatsal Joshi</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/vatsal.pdf')}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img src="./assets/linkedin.png" alt="My LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/vatsal-joshi-91b148239/'} />
          <img src="./assets/github.png" alt="My Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/vatsaljoshi22'} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
