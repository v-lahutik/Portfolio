import styled from "styled-components";
import { theme } from "../../styles/themes";


export const WelcomeContainer = styled.div`
position: relative;
width: 90vw;
max-width: 90vh;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 9px;
`;


export const Header1 = styled.h1`
  opacity: 0;
  font-size: clamp(2rem, 5vw, 6rem); /* Adjusts between 2rem and 6rem based on viewport */
  text-align: center;
  line-height: 1.2;
  margin: 0;
  white-space: nowrap; 
  
  
`;

export const Header2 = styled.h2`
  color: ${theme.colors.primaryText};
  opacity: 0;
  font-size: clamp(1.5rem, 4vw, 4rem); /* Adjusts between 1.5rem and 4rem */
  text-align: center;
  white-space: nowrap; 
  
 
`;


