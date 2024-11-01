import styled from 'styled-components';
import {theme} from '../../styles/themes';

export const FooterContainer = styled.footer`
  height: 5rem;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.primaryText};

  width: 100vw;
  padding: ${theme.spacing.medium} 0;

  ${theme.alignment.flexCenter};
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.small};
`;

export const FooterSocialLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
`;
