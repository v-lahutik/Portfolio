import React from 'react'
import {AboutContainer, AboutText, TextContainer, ProfileImage} from './AboutMeStyles';
import { SectionContainer, SectionHeader } from '../../GlobalStyles/elements.js';
import Skills from '../Skills/Skills';


const AboutMe = () => {
  return (
    <SectionContainer>
      <AboutContainer>
      <ProfileImage src="/profile.jpg" alt="Profile Picture" />
      <TextContainer>
      <SectionHeader>About Me</SectionHeader>
      <AboutText>
      Hello again! Thanks for taking the time to get to know me a little better! 🤗 I’m a passionate web developer, recently graduated from the Digital Career Institute, where I completed an intense Web Development program. Throughout my journey, I’ve gotten hands-on experience in both front-end and back-end development, mainly working with the MERN stack (MongoDB, Express.js, React, and Node.js).

      </AboutText>
      <AboutText>
      I love learning new things, so even though I’m comfortable with the MERN stack, I’m always exploring new tech and frameworks to stay current. I get excited by problem-solving and tackling challenges, and there’s nothing better than teaming up to bring creative, user-friendly web apps to life!
      </AboutText>
      <AboutText>
      When I’m not coding, you’ll find me playing board games with friends, baking, and staying active with yoga and fitness routines.
      </AboutText>
      <AboutText>
        Feel free to reach out if you're interested in working together or want to chat about web development!
      </AboutText>
      </TextContainer>
     </AboutContainer>
     <Skills />
    </SectionContainer>
  );
};

export default AboutMe;