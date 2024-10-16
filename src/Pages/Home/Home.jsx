import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../About/About';
import Projects from '../Project/Projects';
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
        <h1 className='animatetext'>Web developer</h1>
        <p>I'm a passionate developer with a knack for creating clean and efficient code.</p>
        <button className="hire-me-btn">Hire Me </button>
      </div>
    </div>
    <Projects />
    <About />
    <GetInTouch />
    <Footer />
    </>
  );
};

export default Home;
