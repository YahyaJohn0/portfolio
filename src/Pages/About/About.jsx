import React from 'react';

import './About.css';
import Logo from '../../assets/IMG-20240712-WA0067.jpg'
const About = () => {
  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="about-left">
        <h1>About Me</h1>
        <p>
        I'm Yahya Khan, a front-end developer with a Bachelor’s degree in Information Technology,
         passionate about creating engaging and user-friendly web experiences. Proficient in HTML, CSS,
          and JavaScript, I thrive on transforming ideas into dynamic, responsive applications.
           My recent project, a Netflix clone app, showcases my ability to blend creativity with technical skills.
            I’m eager to expand my expertise in back-end development and frameworks like React,
             while continually exploring design principles to enhance my portfolio.
              Let's connect and collaborate on exciting projects!
        </p>
      </div>
      <div className="about-right">
        <img 
          src={Logo} 
          alt="YahyaJohn" 
          className="about-img" 
        />
      </div>
    </div>
  );
};

export default About;
