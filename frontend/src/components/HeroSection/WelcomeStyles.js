import styled from "styled-components";
import { theme } from "../../GlobalStyles/themes";


export const WelcomeContainer = styled.div`
position: relative;
width: 700px;
max-width: 90vh;
display: flex;
flex-direction: column;

// border: 1px solid black;

`;

export const Header1 = styled.h1`
  opacity: 0;
  font-size: clamp(2rem, 5vw, 6rem); /* Adjusts between 2rem and 6rem based on viewport */
  line-height: 1.2;
  margin: 0;
  white-space: nowrap; 

`;

export const Header2 = styled.h2`
  color: ${theme.colors.primaryText};
  opacity: 0;
  font-size: clamp(1.5rem, 4vw, 4rem); /* Adjusts between 1.5rem and 4rem */
  white-space: nowrap; 
  
`;


