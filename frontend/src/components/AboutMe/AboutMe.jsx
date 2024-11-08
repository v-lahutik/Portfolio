import React from "react";
import {
  AboutContainer,
  AboutText,
  TextContainer,
  ProfileImage,
  SocialsLink,
  ProfileImageWrapper,
  Sparkles,
  
} from "./AboutMeStyles";
import {
  HeaderIcon,
  HeaderWrapper,
  SectionContainer,
  SectionHeader,
} from "../../GlobalStyles/elements.js";
import Skills from "../Skills/Skills";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import about from '../../assets/headingIcons/about.png';
import aboutMint from '../../assets/headingIcons/about-mint.png';
import { useTheme } from "../../context/ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useTheme();
  return (
    <SectionContainer>
      <AboutContainer>
      <ProfileImageWrapper>
      <ProfileImage src="profile.jpg" alt="Profile" />
      <Sparkles>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </Sparkles>
    </ProfileImageWrapper>
        <TextContainer>
          <HeaderWrapper>

              <SectionHeader className='gloock-regular'>About Me</SectionHeader>
              <HeaderIcon src={isDarkTheme? aboutMint: about} alt="search icon" />
          </HeaderWrapper>
        
          
          <AboutText>
            Hello again! Thanks for taking the time to get to know me a little
            better! 🤗 I’m a passionate web developer, recently graduated from
            the Digital Career Institute, where I completed an intense Web
            Development program. Throughout my journey, I’ve gotten hands-on
            experience in both front-end and back-end development, mainly
            working with the MERN stack (MongoDB, Express.js, React, and
            Node.js).
          </AboutText>
          <AboutText>
            I love learning new things, so even though I’m comfortable with the
            MERN stack, I’m always exploring new tech and frameworks to stay
            current. I get excited by problem-solving and tackling challenges,
            and there’s nothing better than teaming up to bring creative,
            user-friendly web apps to life!
          </AboutText>
          <AboutText>
            When I’m not coding, you’ll find me playing board games with
            friends, baking, and staying active with yoga and fitness routines.
          </AboutText>
          <AboutText>
            Feel free to reach out if you're interested in working together or
            want to chat about web development!
          </AboutText><SocialsLink>
          <a href="https://github.com/v-lahutik" target="_blank">
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/viktorija-lahutik/"
            target="_blank"
          >
            <FaLinkedin className="contact-icon" />
          </a>
        </SocialsLink>
        </TextContainer>
        
      </AboutContainer>
      <Skills />
    </SectionContainer>
  );
};

export default AboutMe;
