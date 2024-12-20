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
  padding-top: ${styles.spacing.medium};
  position: relative; /* For positioning the pseudo-element */
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
