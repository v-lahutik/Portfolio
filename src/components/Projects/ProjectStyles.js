import styled from 'styled-components';
import {theme} from '../../styles/themes';


export const ProjectsContainer = styled.div`
  padding: 40px;
  display: flex;

  align-items: center;
`;

// Title for the projects section
export const ProjectsTitle = styled.h2`
  font-size: 2.5em;
  color: #333; /* Dark color for the title */
  margin-bottom: 20px;
`;

// Container for individual project cards
export const ProjectCard = styled.div`
  position: relative;
  background-color: #ffffff; /* White background for cards */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 0; /* No padding to avoid extra space around the image */
  width: 400px; /* Increased width for larger cards */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

// Image of the project
export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

// Overlay for the project description
export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 20px;
  border-radius: 10px;

  ${ProjectCard}:hover & {
    opacity: 1; /* Show overlay on hover */
  }
`;

// Title for each project card
export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: #FFC475; /* Use a color that matches your theme */
  margin-bottom: 10px;
`;

// Button to view project details or links
export const ViewProjectButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #FFF45F; /* Button background color */
  color: #333; /* Button text color */
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #FFC475; /* Change color on hover */
  }
`;