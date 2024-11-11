import styled from "styled-components";

export const WelcomeContainer = styled.div`
  position: relative;
  width: 700px;
  max-width: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Header1 = styled.h1`
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0;
  font-size: clamp(2rem, 5vw, 6rem);
  line-height: 1.2;
  margin: 0;
  white-space: nowrap;
`;

export const Header2 = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  opacity: 0;
  font-size: clamp(1.5rem, 4vw, 4rem);
  white-space: nowrap;
`;
