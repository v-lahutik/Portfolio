import styled from "styled-components";
import { styles } from "../../GlobalStyles/themes";

export const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 100;
  margin-top: 0.8rem;
  ${styles.alignment.flexCenter};
`;

export const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: transparent;
  width: 25vw; 
  transition: background-color 0.3s ease; 
  ${styles.alignment.flexCenter};
  
  border-radius: 50px;

  /* Glass effect when scrolling */
  ${({ scrolling }) =>
    scrolling &&
    `
    background-color: rgba(255, 255, 255, 0.8); 
    backdrop-filter: blur(10px); /* Blurs the content behind the Nav */
    border-bottom: 1px solid rgba(255, 255, 255, 0.8); 
  `}
  /* Dynamically adjust width */
  @media (max-width: 1400px) {
    width: 50vw; 
    margin: 0 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 768px) {
    width: 80vw; 
    margin: 0 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    width: 100vw; 
    margin: 0 1rem;
    padding: 1rem 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
  
`;

export const NavItem = styled.li`
  margin-right: 1rem;
  padding: 0.5rem 0.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryBg};
    border-radius: 15px;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.secondaryText};
  text-decoration: none;
  font-weight: 200;
`;
