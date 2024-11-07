import styled, { keyframes } from "styled-components";
import { theme } from "../../GlobalStyles/themes";

// Container for all skills
export const SkillsContainer = styled.div`
  width: 50vw;
  height: auto;
  color: ${theme.colors.primaryText};
  padding: ${theme.spacing.medium};
  display: flex;
  gap: ${theme.spacing.small};
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%; 
    padding: 0;

  }
  
`;

// Styled component for the logo image
export const LogoWrapper = styled.div`
  width: 200px;
  height: 80px;
  border: 1px solid ${theme.colors.primaryText};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
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
