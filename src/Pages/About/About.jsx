import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import Logo from '../../assets/yahya.jpg'
const About = () => {
  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          I'm YahyaJohn, a developer with a passion for creating beautiful and efficient web applications.
          My expertise spans across front-end and back-end technologies, allowing me to deliver full-stack solutions.
        </p>
        <div className="contact-info">
          <div className="email"><span><FontAwesomeIcon icon={faEnvelope}  className='envelope'/></span><span>yk5550950@gmail.com</span></div>
          <div className="phone"> <span ><FontAwesomeIcon icon={faPhone} className='faphone'/></span><span> +923255096511</span></div>
        </div>
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
