import styled from 'styled-components';
import { theme } from '../../GlobalStyles/themes';

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ProjectCard = styled.div`
  width: 70vw;
  position: relative;
  border-radius: 10px;
  margin: 20px;
border-bottom: 2px solid #FFC475;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: transform 0.2s;
  flex-wrap: wrap;
  

  /* Reverse layout if 'reverse' prop is true */
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    width: 90vw; /* Adjust for smaller screens */
    flex-direction: column; /* Stack the elements vertically */
  }
`;

export const ProjectImage = styled.div`
  width: 50%;
  height: auto; /* Remove fixed height */
  border-radius: 10px 0 0 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  @media (max-width: 768px) {
    width: 100%; /* Make the image take full width on smaller screens */
    height: auto; /* Allow the image to scale with the content */
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;

  padding: 0 20px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    p{
      font-size: 1.2em;
     
    }
    @media (max-width: 768px) {
      width: 100%; /* Make the project info take full width */
      padding: 0 20px ; /* Adjust padding */
      gap: 20px;
    }
`;

export const ProjectTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.5em;
  color: #FFC475;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 0; 
  }
`;

export const ProjectButton = styled.a`
  font-size: 1.2em;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px 0;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  `;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  
  border: 2px solid #FFC475;
  border-radius: 50px;
`;
