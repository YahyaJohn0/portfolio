import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import yahyalogo from '../../assets/Gold Luxury Initial Circle Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/About');
  };
  const goToProjectsPage = () => {
    navigate('/Projects');
  };
  const goToHomePage = () => {
    navigate('/');
  };
  const goToContactPage = () => {
    navigate('/Contact');
  };
  const goToServicesPage = () => {
    navigate('/Service');
  };
  const goToGetinPage = () => {
    navigate('/GetInTouch');
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={yahyalogo}  alt="" /></div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li onClick={goToHomePage}>Home</li>
        <li onClick={goToAboutPage}>About</li>
        <li onClick={goToServicesPage}>Services</li>
        <li onClick={goToProjectsPage}>Portfolio</li>
        <li onClick={goToContactPage}>Contact</li>
      </ul>
      <button className="nav-button" onClick={goToGetinPage}>Let's Talk</button>
      <div className="menu-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
