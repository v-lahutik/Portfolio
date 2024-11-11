import React from "react";
import { useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";
import {
  HeroContainer,
  CVButton,
  ContentWrapper,
  Tagline,
  ArrowIcon,
} from "./HeroStyles";
import { IoIosArrowDown } from "react-icons/io";
import { SectionContainer } from "../../GlobalStyles/elements";

function Hero() {
  useEffect(() => {
    const starrySky = document.querySelector(".hero-container");
    const numberOfShapes = 100; // Adjust this number to control density

    for (let i = 0; i < numberOfShapes; i++) {
      // Randomly decide whether to create a circular star or a polygonal star
      const isPolygonalStar = Math.random() > 0.5; // 50% chance for each shape
      const shape = document.createElement("div");
      shape.classList.add(isPolygonalStar ? "star" : "circle-star");

      // Randomize position, size, and animation duration
      const randomSize = Math.random() * 2 + 1;
      const randomDuration = Math.random() * 3 + 2;

      shape.style.left = Math.random() * 100 + "vw";
      shape.style.top = Math.random() * 100 + "vh";

      // Apply size based on shape type
      if (isPolygonalStar) {
        shape.style.width = `${randomSize * 5}px`; // Size up the polygonal stars
      } else {
        shape.style.width = `${randomSize}px`;
        shape.style.height = `${randomSize}px`;
      }

      shape.style.animationDuration = `${randomDuration}s`;
      shape.style.animationDelay = `${Math.random() * 5}s`;

      // Add the shape to the starry sky container
      starrySky.appendChild(shape);
    }
  }, []);

  return (
    <HeroContainer className="hero-container">
      <ContentWrapper className="content">
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
  );
}

export default Hero;
