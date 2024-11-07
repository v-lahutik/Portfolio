import styled from 'styled-components';
import { theme } from '../../GlobalStyles/themes';

export const HeroContainer = styled.section`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 10vh; 

/* Relative positioning to allow absolute positioning of the arrow */
position: relative;
`;

export const ContentWrapper = styled.div`
flex: 1;
max-width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;

  gap: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: center; /* Center content horizontally for medium screens */
    gap: 15px; /* Adjust gap if necessary */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-top: 10px;
  line-height: 1.6;
  max-width: 800px;
  
`;

// Define the styled component
export const CVButton= styled.a`
width: 200px;
position: relative;
overflow: hidden;
margin-top: 20px;
padding: 20px 40px;
font-weight: 900;
font-size: 1em;
border-radius: 5px;
border: 0;
color: ${theme.colors.secondaryText};
text-transform: uppercase;
background-color: ${theme.colors.secondaryBg};
text-decoration: none; /* Remove underline */
display: inline-block;
z-index: 1; /* Ensure the button is above other components */

/* Sheen effect base animation */
&::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%; /* Start from outside the left side */
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg); /* Skew the gradient for a sheen effect */
  z-index: -1; /* Ensure the sheen is behind the button text */
}

/* Sheen animation on hover and focus */
&:hover::after,
&:focus::after {
  animation: sheen 0.75s forwards;
}

/* Active state for the button */
&:active {
  box-shadow: 0px 0px 0px white;
  -webkit-box-shadow: inset -2px 2px 2px #ccc;
  -moz-box-shadow: inset -2px 2px 2px #ccc;
  box-shadow: inset -2px 2px 2px #ccc;
  transform: translate(0, 2px);
  color: #FFC491;
  background-color: #EDE358;
}

/* Focus state for the button */
&:focus {
  outline: 0;
}

/* Keyframes for the sheen animation */
@keyframes sheen {
  100% {
    left: 100%; /* Move the sheen to the right side */
  }
}
`;


export const ArrowIcon = styled.a`
  position: absolute;
  bottom: 3rem; /* Position it a bit above the bottom */
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: ${theme.colors.primaryText};
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;