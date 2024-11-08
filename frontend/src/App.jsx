import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import { ThemeContextProvider } from "./context/ThemeContext";

import { AppContainer } from "./GlobalStyles/elements";

const App = () => {
  return (
    <ThemeContextProvider>
    <AppContainer>
      <Header />
      <main className="main-content">
        <section id="hero">
          <Hero />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </AppContainer>
    </ThemeContextProvider>
  );
};


export default App;
