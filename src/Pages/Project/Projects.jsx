import React from 'react';
import './Projects.css';
import cards_data from '../../assets/cards/Cards_data'
const Projects = () => {

  return (
    <div className="projects-container">
      <h1>Explore My Popular Projects</h1>
      <div className="projects-grid">
        {cards_data.map((data,index) => (
          <div key={index} className="project-item">
            <img src={data.image} alt='' className="project-img" />
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
