import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the image and text on small screens */
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  width: 40vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
 
  @media (max-width: 1200px) {
    width: 80vw; 
    text-align: center; 
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.tertiaryText};
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;
export const SocialsLink = styled.div`
  text-decoration: none;
  margin-top: 8px;
  display: flex;
  gap: 1rem;
 a{
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryText};
 }
`;
export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;

  @media (max-width: 768px) {
    width: 20rem; /* Reduce size of the image on tablet */
    height: 20rem;
    margin-left: 0; /* Remove margin on small screens */
  }

  @media (max-width: 480px) {
    width: 15rem; /* Further reduce size on mobile */
    height: 15rem;
  }
`;

export const Sparkles = styled.div`
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  animation: rotate-sparkles 5s linear infinite;

  div {
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.primaryText};
    border-radius: 50%;
    opacity: 0.8;
  }

  div:nth-child(1) { top: 0; left: 50%; }
  div:nth-child(2) { top: 10%; left: 80%; }
  div:nth-child(3) { top: 50%; left: 100%; }
  div:nth-child(4) { top: 80%; left: 80%; }
  div:nth-child(5) { top: 100%; left: 50%; }
  div:nth-child(6) { top: 80%; left: 20%; }
  div:nth-child(7) { top: 50%; left: 0; }
  div:nth-child(8) { top: 10%; left: 20%; }

  @keyframes rotate-sparkles {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid black;
  z-index: 1; /* Ensure the image is above the sparkles */
`;

