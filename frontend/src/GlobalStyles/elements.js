import styled from "styled-components";
import { styles } from "./themes";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.radialGradient};
`;

export const SectionContainer = styled.section`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: ${styles.spacing.xl};
  position: relative; /* For positioning the pseudo-element */
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Adds a gap between the text and the underline */
    left: 0;
    width: 100%; /* Make the underline span the width of the text */
    height: 8px; /* Adjust the thickness of the underline */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 10%,
      ${({ theme }) => theme.primaryText} 30%,
      ${({ theme }) => theme.primaryText} 70%,
      rgba(0, 0, 0, 0) 90%
    ); /* Creating a "handmade" effect with a gradient */
    border-radius: 3px; /* Optional: round the edges for a more realistic effect */
  }
`;




export const HeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const HeaderIcon = styled.img`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.teriaryText};
`;
