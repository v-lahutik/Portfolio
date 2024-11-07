import styled from "styled-components";
import { theme } from "../../GlobalStyles/themes";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const TextContainer = styled.div`
  width: 40vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
  font-family: "Arial", sans-serif;
`;

export const ProfileImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  border: 4px solid black;
  object-fit: cover;
  margin-left: 5rem; 
  margin-top: 5rem; 
`;
