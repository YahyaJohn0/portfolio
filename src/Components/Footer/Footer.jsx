import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-left">
        <h2>YourLogo</h2>
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
        <a href="https://facebook.com/share/3iggzfhgWkEuz/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com/in/yahyakhan" target="_blank" rel="noopener noreferrer">
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
