import {
  HeaderContainer,
  Nav,
  NavList,
  NavItem,
  NavLink,
  BurgerIcon,
  MobileNav,
} from "./HeaderStyles";
import React, { useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { GrMenu } from "react-icons/gr";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <HeaderContainer>
      <ToggleSwitch />

      <Nav {...(scrolling ? { scrolling: "true" } : {})}>
        <MobileNav open={isOpen}>
          <NavItem>
            <NavLink href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#aboutMe" onClick={() => setIsOpen(false)}>
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </NavItem>
        </MobileNav>
      </Nav>

      {/* Burger icon for mobile view on the right */}
      <BurgerIcon onClick={toggleMenu}>
        <GrMenu />
      </BurgerIcon>
    </HeaderContainer>
  );
};

export default Header;
