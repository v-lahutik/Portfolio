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
font-size: 6rem;
text-align: center;
line-height: 1.5;
margin: 0;
`;

export const Header2 = styled.h2`
color: ${theme.colors.primaryText};
opacity: 0;
font-size: 4rem;
text-align: center;
`;


/* Style for each individual word */

