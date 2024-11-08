import styled from "styled-components";
import { styles} from "../../GlobalStyles/themes";

export const FooterContainer = styled.footer`
  height: 5rem;
  background-color: ${({ theme }) => theme.primaryText};
  ${styles.alignment.flexCenter};
  flex-direction: column;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.secondaryBg};
  padding-top: 0 0 30;

`;

export const FooterSocials = styled.div`
  ${styles.alignment.flexCenter};
  gap: ${styles.spacing.medium};
`;

export const FooterSocialLink = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondaryBg};
  text-decoration: none;
 margin-top: 8px;
`;
