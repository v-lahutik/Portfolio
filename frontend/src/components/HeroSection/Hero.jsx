import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import {
  HeroContainer,
  CVButton,
  ContentWrapper,
  Tagline,
  ArrowIcon
} from "./HeroStyles";
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <WelcomeMessage />
        <Tagline>
          Transforming ideas into beautiful, functional websites is my passion.
          I focus on delivering high-quality, impactful web applications that
          meet both user needs and business goals.
        </Tagline>
        <CVButton
          href="/Viktorija_Lahutik_CV.pdf"
          target="_blank"
          rel="noopener noreferrer" // Security measure
        >
          View My CV
        </CVButton>
         </ContentWrapper>
        
     
        <ArrowIcon href="#aboutMe">
          <IoIosArrowDown />
          </ArrowIcon>
         
      </HeroContainer>
     
    </>
  );
}

export default Hero;
