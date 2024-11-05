import React from 'react'
import { ProjectsContainer, ProjectsTitle, ProjectCard, ProjectImage, ProjectOverlay, ProjectTitle } from './ProjectStyles.js';
import FitZone from '../../assets/projectScreenshots/FitZone.png';
import CashFlowControl from '../../assets/projectScreenshots/CashFlowControl.png';
import BullsAndCows from '../../assets/projectScreenshots/BullsAndCows.png';

const Projects = () => {
  // Example projects data
  const project = [
    {
      title: 'FitZone',
      description: 'This is a brief description of Project One.',
      link: 'https://example.com/project1', 
      image: FitZone, 
      
    },
    {
      title: 'CashFlow Control',
      description: 'This is a brief description of Project Two.',
      link: 'https://cashflow-control-xxx4.onrender.com/',
      image: CashFlowControl,
    },
    {
      title: 'Bulls and Cows Game',
      description: 'This is a brief description of Project Three.',
      link: 'https://bulls-and-cows-game-os7f.onrender.com/',
      image: BullsAndCows,
    },
  ];

  return (
  <>
  <ProjectsTitle>My Projects</ProjectsTitle>
    <ProjectsContainer>
      
      {project.map((project, index) => (
        <ProjectCard key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectOverlay>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
            </ProjectOverlay>
          </a>
        </ProjectCard>
      ))}
    </ProjectsContainer></>
  );
};

export default Projects;