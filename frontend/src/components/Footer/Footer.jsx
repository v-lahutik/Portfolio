// src/components/Footer/Footer.jsx
import React from "react";
import "./FooterStyles.js"; 
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterContainer, FooterText, FooterSocials, FooterSocialLink } from "./FooterStyles.js";

const Footer = () => {
  return (
    <FooterContainer>
    
          <FooterText>"Designed and Coded with ❤️ by Viktorija Lahutik "</FooterText>
       
        <FooterSocials className="footer-socials">
          <FooterSocialLink
            href="https://github.com/v-lahutik"
            target="_blank"
           
          >
            <FaGithub className="contact-icon" />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://www.linkedin.com/in/viktorija-lahutik/"
            target="_blank"
           
          >
            <FaLinkedin className="contact-icon"  />
          </FooterSocialLink>
         
        </FooterSocials>
      
    </FooterContainer>
  );
};

export default Footer;
