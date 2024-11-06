import styled from "styled-components";
import { theme } from "../../GlobalStyles/themes";

export const FooterContainer = styled.footer`
  height: 5rem;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.primaryText};

  ${theme.alignment.flexCenter};
  flex-direction: column;
`;

export const FooterText = styled.p`
  color: ${theme.colors.tertiaryText};
  padding-top: 0 0 10;

`;

export const FooterSocials = styled.div`
  ${theme.alignment.flexCenter};
  gap: ${theme.spacing.medium};
`;

export const FooterSocialLink = styled.a`
  font-size: 2rem;
  color: ${theme.colors.tertiaryText};
  text-decoration: none;
`;
