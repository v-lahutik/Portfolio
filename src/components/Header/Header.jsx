
import { Nav, NavList, NavItem, NavLink } from './HeaderStyles';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ backgroundColor: scrolling ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
      <NavList>
        <NavItem>
          <NavLink href="#hero">Home</NavLink> {/* Updated href to link to section ID */}
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink> {/* Link to Skills section */}
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink> {/* Link to Projects section */}
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink> {/* Link to Contact section */}
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;

