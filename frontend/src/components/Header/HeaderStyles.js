import styled from "styled-components";
import { styles } from "../../GlobalStyles/themes";

export const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 100;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  ${styles.alignment.flexCenter};
`;

export const Nav = styled.nav`
  padding: 1rem;
  background-color: transparent;
  width: 30vw;
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
  @media (max-width: 1465px) {
    width: 50vw;
    margin: 0 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin: 0 1rem;
    padding: 1rem 0;
    
    /* Remove glass effect on mobile view */
    ${({ scrolling }) =>
      scrolling &&
      `
      background-color: transparent; /* Remove background-color */
      backdrop-filter: none; /* Disable blur effect */
      border-bottom: none; /* Remove border */
    `}
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
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.secondaryText};
  text-decoration: none;
  &:hover {
    color: black;
    border-radius: 15px;
  }
 
`;
// Mobile view styling below
export const BurgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};
  margin: 0 1rem;
  @media (max-width: 768px) {
    display: block; /* Show only on smaller screens */
  }
`;

export const MobileNav = styled(NavList)`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  margin-right: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  width: 40vw;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 99;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    box-shadow: none;
    width: auto;
    padding: 0;
   
  }
`;
