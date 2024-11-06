import styled, { createGlobalStyle } from 'styled-components';

// Global styles for the font
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
`;

export const theme = {
  colors: {
    primaryBg: "gray",
    secondaryBg: "#233831",
    primaryText: "#025A4E",
    secondaryText: "#8FDCC2",
    tertiaryText: "#DFE8CF",

    hoverBg: "#eaeaea",
    border: "#ddd",
    lightGray: "#f5f5f5",
    darkGray: "#333",
  },
  fonts: {
    heading: "'Spicy Rice', serif",
    main: "'Helvetica Neue', sans-serif",
  },
  typography: {
    heading1: "2.5rem",
    heading2: "2rem",
    heading3: "1.75rem",
    body: "1rem",
    smallText: "0.875rem",
    lineHeight: {
      heading: "1.2",
      body: "1.5",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },

  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
  borders: {
    thin: "1px solid",
    thick: "2px solid",
    rounded: "5px",
    circle: "50%",
  },
  hoverEffects:{
    hoverBg: `
      &:hover {
        background-color: #eaeaea;
      }
    `,
    hoverShadow: `
      &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `,
    scaleHover: `
      &:hover {
        transform: scale(1.05);
      }
    `,
  },
  alignment: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1200px",
  },
};
