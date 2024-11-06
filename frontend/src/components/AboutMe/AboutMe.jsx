import React from 'react'
import {AboutText} from './AboutMeStyles';
import { SectionContainer, SectionHeader } from '../../GlobalStyles/elements.js';

const AboutMe = () => {
  return (
    <SectionContainer>
      <SectionHeader>About Me</SectionHeader>
      <AboutText>
        I'm a passionate web developer with a focus on building modern, user-friendly web applications. I recently graduated from the Digital Career Institute, where I completed an intensive Web Development program. Throughout my studies, I gained hands-on experience in both front-end and back-end development, primarily working with the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js).
      </AboutText>
      <AboutText>
        While I'm proficient in the MERN stack, I'm constantly expanding my skill set by learning new technologies and frameworks to stay up-to-date with the latest trends in web development. I thrive on tackling challenging problems and collaborating on creative solutions that lead to functional and engaging user experiences.
      </AboutText>
      <AboutText>
        In addition to coding, I’m a problem-solver at heart and love collaborating with others to bring ideas to life.
      </AboutText>
      <AboutText>
        Feel free to reach out if you're interested in working together or want to chat about web development!
      </AboutText>
     
    </SectionContainer>
  );
};

export default AboutMe;