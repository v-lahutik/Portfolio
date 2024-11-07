import React from "react";
import { SectionContainer, SectionHeader } from '../../GlobalStyles/elements.js';
import { SkillsContainer, StyledLogo, LogoWrapper, SkillName} from "./SkillsStyles.js";
import react from "../../assets/technologyLogos/react.png";
import javascript from "../../assets/technologyLogos/javascript.png";
import typescript from "../../assets/technologyLogos/typescript.png";
import html from "../../assets/technologyLogos/html.png";
import css from "../../assets/technologyLogos/css.png";
import node from "../../assets/technologyLogos/node.png";
import express from "../../assets/technologyLogos/express-js.png";
import mongodb from "../../assets/technologyLogos/mongoDB.png";
import sass from "../../assets/technologyLogos/sass.png";
import bootstrap from "../../assets/technologyLogos/bootstrap.png";
import tailwind from "../../assets/technologyLogos/tailwind.png";
import materialui from "../../assets/technologyLogos/material-ui.png";
import postman from "../../assets/technologyLogos/postman.png";
import git from "../../assets/technologyLogos/git.png";
import github from "../../assets/technologyLogos/github.png";

function Skills() {
  const skillsData = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "TypeScript", logo: typescript },
    { name: "React", logo: react },
    { name: "Node.js", logo: node },
    { name: "Express.js", logo: express },
    { name: "MongoDB", logo: mongodb },
    { name: "Sass", logo: sass },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Tailwind", logo: tailwind },
    { name: "Material-UI", logo: materialui }, 
    { name: "Git", logo: git },
    { name: "GitHub", logo: github },
    { name: "Postman", logo: postman },
  ];
  
  return (
    <SectionContainer>
      <SectionHeader>My Toolkit</SectionHeader>
      <SkillsContainer>
        
          {skillsData.map((skill, index) => (
            <LogoWrapper key={index}>
              <StyledLogo src={skill.logo} alt={`${skill.name} logo`} />
              <SkillName>{skill.name}</SkillName>
            </LogoWrapper>
          ))}
          

      </SkillsContainer>
    </SectionContainer>
  );
}

export default Skills;
