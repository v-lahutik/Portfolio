import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const HeroContainer = styled.section`
padding-top: 10vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space out the content */
  gap: 20px; /* Add some space between WelcomeMessage and the image */

  @media (max-width: 768px) {
    /* For screens smaller than 768px */
    flex-direction: column; /* Stack the elements vertically */
    align-items: center; /* Center items horizontally */
    gap: 10px; /* Adjust gap for better spacing on mobile */
  }
`;


export const ProfileImage = styled.img`
  width: 150px; /* Adjust the size as needed */
  height: 150px; /* Adjust the size as needed */
  border-radius: 50%; /* Make the image circular */
  object-fit: cover; /* Ensure the image covers the container without distortion */
  
  @media (max-width: 768px) {
    /* Adjust size for mobile view if needed */
    width: 120px;
    height: 120px;
  }
`;

export const AboutMe = styled.section`
  color: ${theme.colors.primaryText};
  padding: ${theme.spacing.medium};
  height: 10rem;
  width: 30rem;
`;

// Define the styled component
export const CVButton= styled.a`
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