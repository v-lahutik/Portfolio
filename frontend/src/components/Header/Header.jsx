
import { HeaderContainer, Nav, NavList, NavItem, NavLink } from './HeaderStyles';
import React, { useEffect, useState} from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


const Header = () => {
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer>
   <ToggleSwitch />
    <Nav scrolling={scrolling}>
      <NavList>
        <NavItem>
          <NavLink href="#hero">Home</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink href="#aboutMe">About Me</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink> 
        </NavItem>
      </NavList>
    </Nav>
    
    </HeaderContainer>
  );
};

export default Header;

