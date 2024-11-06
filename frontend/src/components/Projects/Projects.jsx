import React from 'react'
import { SectionContainer, SectionHeader } from '../../GlobalStyles/elements.js';
import { ProjectsContainer, ProjectTitle, ProjectCard, ProjectImage, ProjectOverlay} from './ProjectStyles.js';
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
    {
      title: 'Spotify Clone',
      description: 'This is a brief description of Project Four.',
      link: 'https://example.com/project4',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
 
  <SectionContainer>
  <SectionHeader>My Projects</SectionHeader>
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
    </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;