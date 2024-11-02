import React from "react";
import {
  SkillsContainer,
  StyledLogo,
  AnimationWrapper,
  LogoWrapper,
  SkillName,
} from "./SkillsStyles.js";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import node from "../../assets/node-js.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import sass from "../../assets/sass.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import materialui from "../../assets/material-ui.png";
import postman from "../../assets/postman.png";
import git from "../../assets/git.png";

function Skills() {

  const skillsData = [
    { name: "React", logo: react },
    { name: "JavaScript", logo: javascript },
    { name: "TypeScript", logo: typescript },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "Node.js", logo: node },
    { name: "Express", logo: express },
    { name: "MongoDB", logo: mongodb },
    { name: "Postman", logo: postman },
    { name: "Git", logo: git },
    { name: "Sass", logo: sass },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Material-UI", logo: materialui },
  ];
  return (
    <SkillsContainer>
      <AnimationWrapper>
        {skillsData.map((skill, index) => (
          <LogoWrapper key={index}>
            <StyledLogo src={skill.logo} alt={`${skill.name} logo`} />
            <SkillName>{skill.name}</SkillName>
          </LogoWrapper>
        ))}
        {/* Duplicate the logos for infinite scrolling effect */}
        {skillsData.map((skill, index) => (
          <LogoWrapper key={`dup-${index}`}>
            <StyledLogo src={skill.logo} alt={`${skill.name} logo`} />
            <SkillName>{skill.name}</SkillName>
          </LogoWrapper>
        ))}
      </AnimationWrapper>
    </SkillsContainer>
  );
}

export default Skills;
