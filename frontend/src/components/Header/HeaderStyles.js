import styled from "styled-components";
import { theme } from "../../GlobalStyles/themes";

export const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 100;
  margin-top: 0.8rem;
`;

export const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: transparent;
  width: 25vw; 
  transition: background-color 0.3s ease; 
  ${theme.alignment.flexCenter};
  margin: 0 auto; 
  border-radius: 50px;

  /* Glass effect when scrolling */
  ${({ scrolling }) =>
    scrolling &&
    `
    background-color: rgba(255, 255, 255, 0.8); 
    backdrop-filter: blur(10px); /* Blurs the content behind the Nav */
    border-bottom: 1px solid rgba(255, 255, 255, 0.8); 
  `}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 1rem;

  &:hover {
    font-weight: 700
  }
`;

export const NavLink = styled.a`
  color: ${theme.colors.primaryText};
  text-decoration: none;
`;
