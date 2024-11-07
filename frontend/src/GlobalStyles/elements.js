import styled from 'styled-components';
import {theme} from './themes';

export const SectionContainer = styled.section`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  
`;
export const SectionHeader = styled.h2`
  color: ${theme.colors.primaryText};
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: ${theme.spacing.xl};
  
  
  `;
  