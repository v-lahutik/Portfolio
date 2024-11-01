import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  width: 100%; // Full width
  height: 10vh; // 10% of the viewport height
  
  position: fixed; // Fixes the nav at the top
  top: 0; // Sticks to the top
  left: 0; // Aligns with the left edge
  transition: background-color 0.3s ease; // Smooth transition for background-color change
  ${theme.alignment.flexCenter};
  z-index: 1000; // Ensures it stays above other elements
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 1rem;
  
`;

export const NavLink = styled.a`
color: ${theme.colors.primaryText};
  text-decoration: none;

  &.active {
    font-weight: bold; // Example for active link styling
  }
`;
