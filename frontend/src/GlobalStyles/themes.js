import styled, { createGlobalStyle } from 'styled-components';

// Global styles for the font
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
`;
export const lightTheme = {
  primaryBg: "#4B9984", // light green
  secondaryBg: "#F8F3EA", // Light beige 
  primaryText: "#025A4E", // Dark green 
  secondaryText: "#4B9984", // light green
  tertiaryText: "#gray", // gray
  //radialGradient: "radial-gradient(circle, #EDE7DE 20%, #CCEDB5 50%, #E0E5B7 80%)",
 radialGradient: "radial-gradient(circle, #EDE7DE 40%, #CCEDB5 60%, #E0E5B7 100%)",

  stars: "white", // White stars for the sparkle effect
};
export const darkTheme = {
  primaryBg: "#1C1C1C", // Dark charcoal/black for a classic dark theme background
  secondaryBg: "#333333", // Slightly lighter dark gray for secondary elements
  primaryText: "#A8D5BA", // Soft mint green for text to maintain consistency with the light theme
  secondaryText: "#4B9984", // Light green for secondary text
  tertiaryText: "#B0B0B0", // Gray for subtle text (like hints or disabled text)
  radialGradient: "radial-gradient(ellipse at top, #1C2C26 30%, #2F4138 60%, #3E554B 100%)"



,
 // Dark gradient for background depth
  stars: "#D9E4DD", // Light, muted greenish white for stars, creating a soft sparkle effect
};
export const styles = {
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
    xl: "32px",
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
