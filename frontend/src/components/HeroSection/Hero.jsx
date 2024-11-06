import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import {
  HeroContainer,
  CVButton,
  ContentWrapper,
  ProfileImage,
  Tagline
} from "./HeroStyles";


function Hero() {
  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <WelcomeMessage />
          <ProfileImage src="/profile.jpg" alt="Profile Picture" />
        </ContentWrapper>
        
        <Tagline>
  Transforming ideas into beautiful, functional websites is my passion. I focus on delivering high-quality, impactful web applications that meet both user needs and business goals.
</Tagline>
          <CVButton
            href="/Viktorija_Lahutik_CV.pdf"
            target="_blank"
            rel="noopener noreferrer" // Security measure
          >
            View My CV
          </CVButton>
        
      </HeroContainer>
    </>
  );
}

export default Hero;
