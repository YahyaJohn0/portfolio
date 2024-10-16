import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/yahyalogo.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-left">
        <img src={Logo} alt="" />
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>

     
      <div className="footer-center">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      
      <div className="footer-right">
        <a href="https://www.facebook.com/share/n6bjF6P9V3RgjbMj/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/yahya-khan-a4b557321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/YahyaJohn0" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
