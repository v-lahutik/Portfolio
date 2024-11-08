import styled, {keyframes} from 'styled-components';


const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
`;


export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  position: relative;
  text-align: center;
  overflow: hidden; /* Prevent content from going out of bounds */
  
  /* Create the starry effect using a ::before pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Disable interactions with the starry sky */
    z-index: -1; /* Ensure it stays behind the content */
    background: black;
    overflow: hidden;
  }

  /* Style for the stars in the Hero section */
  .star {
    position: absolute;
    width: 8px;
    aspect-ratio: 1;
    background: ${({ theme }) => theme.stars};
    clip-path: polygon(
      50% 0,
      calc(50% * (1 + sin(.4turn))) calc(50% * (1 - cos(.4turn))),
      calc(50% * (1 - sin(.2turn))) calc(50% * (1 - cos(.2turn))),
      calc(50% * (1 + sin(.2turn))) calc(50% * (1 - cos(.2turn))),
      calc(50% * (1 - sin(.4turn))) calc(50% * (1 - cos(.4turn)))
    );
    opacity: 0;
    animation: ${sparkle} 5s linear infinite;
  }

  /* Style for the circle stars */
  .circle-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: ${({ theme }) => theme.stars};
    border-radius: 50%;
    opacity: 0;
    animation: ${sparkle} 5s linear infinite;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 15px;
    max-width: 50%; /* Adjust width for medium screens */
  }

  @media (max-width: 768px) {
    max-width: 80%; /* Allow more space on mobile */
    gap: 10px;
  }
`;

export const Tagline = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.tertiaryText};
  margin-top: 10px;
  line-height: 1.6;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
    max-width: 100%;
  }
`;

export const CVButton = styled.a`
  width: 200px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  padding: 20px 40px;
  font-weight: 900;
  font-size: 1em;
  border-radius: 5px;
  border: 0;
  color: white;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.primaryBg};
  text-decoration: none;
  display: inline-block;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    z-index: -1;
  }

  &:hover::after,
  &:focus::after {
    animation: sheen 0.75s forwards;
  }

  &:active {
    box-shadow: 0px 0px 0px white;
    -webkit-box-shadow: inset -2px 2px 2px #ccc;
    -moz-box-shadow: inset -2px 2px 2px #ccc;
    box-shadow: inset -2px 2px 2px #ccc;
    transform: translate(0, 2px);
    color:  ${({ theme }) => theme.secondaryText}
    background-color: ${({ theme }) => theme.primaryText};
  }

  @keyframes sheen {
    100% {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 160px; /* Adjust button width on small screens */
    padding: 15px 30px;
  }
`;

export const ArrowIcon = styled.a`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondaryText};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller arrow icon on mobile */
  }
`;
