import styled, { keyframes } from 'styled-components';
import { theme } from '../../GlobalStyles/themes';

// Keyframes for moving the entire LogoWrapper
const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Move out of view */
  }
`;

// Container for all skills
export const SkillsContainer = styled.div`

  color: ${theme.colors.primaryText};
  padding: ${theme.spacing.medium};
  ${theme.alignment.flexCenter};
  gap: ${theme.spacing.large};
  overflow: hidden; 
  position: relative; 

`;

// Wrapper for each logo and skill name
export const AnimationWrapper = styled.div`
  width: 100%; 
  height: auto;
  display: flex;
  flex-direction: row; 
  animation: ${moveLeft} 30s linear infinite; 

  &:hover {
    animation-play-state: paused; /* Pause animation on hover */
  }
`;

// Styled component for the logo image
export const LogoWrapper = styled.div`
  width: 250px;
  height: 130px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 ${theme.spacing.small};
  margin: 0 ${theme.spacing.small};
  
`;

export const StyledLogo = styled.img`
  width: 80px;
  
  border-radius: 8px;
  padding: ${theme.spacing.small};
`;

// Styled component for the skill name
export const SkillName = styled.p`
  color: ${theme.colors.primaryText};
  margin: 0;
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
