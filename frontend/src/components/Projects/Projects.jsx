import React from "react";
import {
  SectionContainer,
  SectionHeader,
} from "../../GlobalStyles/elements.js";
import {
  ProjectsContainer,
  ProjectTitle,
  ProjectCard,
  ProjectImage,
  ProjectButton,
  ProjectInfo,
  Skills,
  SkillsContainer,
} from "./ProjectStyles.js";
import FitZone from "../../assets/projectScreenshots/FitZone2.png";
import CashFlowControl from "../../assets/projectScreenshots/CashFlowControl3.png";
import BullsAndCows from "../../assets/projectScreenshots/BullsAndCows2.png";

const Projects = () => {
  // Example projects data
  const project = [
    {
      title: "Fit-Zone Gym & E-Shop Platform",
      description:
        "Fit-Zone offers everything you need for a seamless gym experience. Explore class schedules, shop sports gear, and book sessions all in one place. Members can manage bookings and view order history, while admins oversee classes, products, and messages.",
      live: "https://fit-zone-tedp.onrender.com/",
      github: "https://github.com/v-lahutik/FitZone-Gym-and-E-shop",
      image: FitZone,
      skills: [
        "React",
        "Typescript",
        "Tailwind",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      title: "CashFlow Control",
      description:
        "This personal budget tracker helps users manage their finances with ease, from tracking income and expenses to setting budget goals. Users can add transactions, create custom categories, view transaction summaries, and get savings tips. Backend features like secure user authentication are in progress.",
      live: "https://cashflow-control-xxx4.onrender.com/",
      github: "https://github.com/v-lahutik/CashFlow-Control",
      image: CashFlowControl,
      skills: ["React", "Tailwind", "Express.js", "Node.js", "MongoDB"],
    },
    {
      title: "Bulls and Cows Game",
      description: `Ready to test your logic skills? Crack the secret 4-digit code with hints—bulls for correct digits in place and cows for correct digits out of place. Choose your challenge level and see if you can win before the guesses run out!`,
      live: "https://bulls-and-cows-game-os7f.onrender.com/",
      github: "https://github.com/v-lahutik/Bulls-and-Cows-Game",
      image: BullsAndCows,
      skills: ["React", "Material-UI", "CSS"],
    },
    {
      title: "Spotify Clone",
      description:
        "Spotify web interface clone developed in collaboration with a fellow student, leveraging the official Spotify API. Key features: user authentication, personalized playlists, and an interactive player component.",
      github: "https://github.com/v-lahutik/Spotify-Frontend",
      image: FitZone,
      skills: ["React", "Styled Components", "Spotify API"],
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader>My Projects</SectionHeader>
      <ProjectsContainer>
        {project.map((project, index) => (
          <ProjectCard key={index} reverse={index % 2 === 1}>
            {" "}
            {/* Pass reverse prop to alternate layout */}
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
              <SkillsContainer>
                {project.skills.map((skill, skillIndex) => (
                  <Skills key={skillIndex}>{skill}</Skills>
                ))}
              </SkillsContainer>
              <div>
                {project.live && (
                  <ProjectButton
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </ProjectButton>
                )}
                {project.live && <span> | </span>}
                {/* Only show the pipe if 'Live demo' button is present */}
                <ProjectButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </ProjectButton>
              </div>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;
