import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import yahya from '../../assets/yahya.jpg';
import About from '../About/About';
import Projects from '../Project/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>I'm YahyaKhan</h1>
        <h1 className='animatetext'><i>Web developer</i></h1>
        <p>I'm a passionate developer with a knack for creating clean and efficient code.</p>
        <button className="hire-me-btn">Hire Me <FontAwesomeIcon icon={faGreaterThan} className='greaterthan'/></button>
      </div>

      {/* Center Section */}
      <div className="center-section">
        <img 
          src={yahya} 
          alt="Myself" 
          className="profile-img" 
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="experience">
          <div className="years">
            <span className="big-number">2+</span>
            <span className="description">Years of Experience</span>
          </div>
          <div className="projects">
            <span className="big-number">50+</span>
            <span className="description">Projects Completed</span>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Projects />
    <GetInTouch />
    <Footer />
    </>
  );
};

export default Home;
