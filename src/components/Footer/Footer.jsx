// src/components/Footer/Footer.jsx
import React from "react";
import "./FooterStyles.js"; 
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterContainer, FooterText, FooterSocials, FooterSocialLink } from "./FooterStyles.js";

const Footer = () => {
  return (
    <FooterContainer>
    
          <FooterText>© 2024 Viktorija Lahutik. All rights reserved.</FooterText>
       
        <FooterSocials className="footer-socials">
          <FooterSocialLink
            href="https://github.com/v-lahutik"
            target="_blank"
           
          >
            <FaGithub className="contact-icon" />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
           
          >
            <FaLinkedin className="contact-icon"  />
          </FooterSocialLink>
         
        </FooterSocials>
      
    </FooterContainer>
  );
};

export default Footer;
