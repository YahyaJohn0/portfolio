import React from 'react';
import './GetInTouch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
  return (
    <div className="getintouch-container">
      {/* Left Side */}
      <div className="getintouch-left">
        <h3>Get in touch</h3>
        <h1>Let’s Talk For Your Next Project</h1>
        <p>
          Consulted the eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy.
          Esteem spirit temper too say adieus who direct esteem.
        </p>

        <div className="experience">
          <div><FontAwesomeIcon icon={faCheck} className='check'/> <p>2+ Years of Experience</p></div>
          <div><FontAwesomeIcon icon={faCheck} className='check'/><p>JavaScript (ES6+), React</p></div>
          <div><FontAwesomeIcon icon={faCheck} className='check'/><p>HTML, CSS, Node.js</p></div>
          <div><FontAwesomeIcon icon={faCheck} className='check'/><p>Full-stack Web Development</p></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="getintouch-right">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
