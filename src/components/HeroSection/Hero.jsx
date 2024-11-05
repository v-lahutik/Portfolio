import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import {
  AboutMe,
  HeroContainer,
  CVButton,
  ContentWrapper,
  ProfileImage,
} from "./HeroStyles";


function Hero() {
  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <WelcomeMessage />
          <ProfileImage src="/profile.jpg" alt="Profile Picture" />
        </ContentWrapper>
        <AboutMe>
          <p>
            Recently ﬁnished an intensive hands-on course to become a MERN stack
            developer. With a strong background in customer service and team
            leadership, I bring exceptional problem-solving skills and a
            collaborative spirit to every project.
          </p>
          <CVButton
            href="/Viktorija_Lahutik_CV.pdf"
            target="_blank"
            rel="noopener noreferrer" // Security measure
          >
            View My CV
          </CVButton>
        </AboutMe>
      </HeroContainer>
    </>
  );
}

export default Hero;
