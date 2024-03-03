// components/About.js

import React from 'react';
import './About.css'; // Import CSS for About component

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        {/* Add any additional about containers here */}
                    </div>
                    <div className="details-container">
                        <p>
                            Hello, my name is Vatsal Joshi. I am a graduate in Computer Science Engineering from Parul University. I have completed a one-month internship as a .Net developer, as well as four months of training and a three-month internship at Webbrains Technology. During this time, I have worked on several projects and gained experience with skills such as JavaScript and React.js.

                            Apart from my passion for technology, I am also a food lover and enjoy making music.
                        </p>
                        <br />
                        <div className="text-container">
                            <img src="./assets/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>Bachelor of Technology in Computer Science</p>
                        </div>

                        <br />
                        <div className="text-container">
                            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>8 months - Frontend Development</p>
                            <p>1 month - .Net development</p>
                        </div>

                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
        </section>
    );
};

export default About;
