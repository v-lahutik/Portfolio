import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import { AboutMe, HeroContainer} from "./HeroStyles";

function Hero() {
  return (
    <>
    <HeroContainer>
      <WelcomeMessage />
      <AboutMe>
        <p>
          Recently ﬁnished an intensive hands-on course to become a MERN stack
          developer. With a strong background in customer service and team
          leadership, I bring exceptional problem-solving skills and a
          collaborative spirit to every project.
        </p>
      </AboutMe>
      </HeroContainer>
    </>
  );
}

export default Hero;
