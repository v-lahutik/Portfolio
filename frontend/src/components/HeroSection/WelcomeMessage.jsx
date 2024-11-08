import './WelcomeStyles.js';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { WelcomeContainer, Header1, Header2 } from './WelcomeStyles.js';

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

const WelcomeMessage = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null); 

  useGSAP(() => {
    // text-splitting function for h1
    const simpleSplitText = (element) => {
      const words = element.textContent.split(/\s+/).filter(Boolean);
      element.innerHTML = ''; // Clear the original text

      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word'; // Adding a class for styling/animation
        wordSpan.textContent = word; // Setting the word as the content of the span
        element.appendChild(wordSpan);

        // Add a space between words, except for the last one
        if (index < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
      });

    // Return a NodeList of the span elements for animation
      return element.querySelectorAll('.word');
    };

    // Perform the text splitting for h1
    const headlineElement = headlineRef.current;
    const words = simpleSplitText(headlineElement);

    // Ensure the headline is visible
    gsap.set(headlineRef.current, { opacity: 1 });

    // Animate the words in h1
    gsap.from(words, {
      y: -50, // Reduced vertical distance to keep words visible
      opacity: 0, // Start with opacity 0
      rotation: () => Math.random() * 80 - 40, // Random rotation between -40 and 40
      stagger: 0.07, // Stagger animation for a cascading effect
      duration: 1, // Animation duration
      ease: 'bounce.out', // bouncing effect
      onComplete: () => { // Callback function when h1 animation completes
        animateSubheadline();
      }
    });

    // Function to animate the h2 element letter by letter
    const animateSubheadline = () => {
      const subheadlineElement = subheadlineRef.current;
      const text = subheadlineElement.textContent;
      subheadlineElement.innerHTML = ''; // Clear the original text

      // Split the text into letters and wrap each letter in a span
      text.split('').forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter === ' ' ? '\u00A0' : letter; // Use a non-breaking space for actual spacing
        letterSpan.style.opacity = '0'; // Start with opacity 0
        letterSpan.style.display = 'inline-block'; 
        subheadlineElement.appendChild(letterSpan);
      });

      // Select all letter spans for animation
      const letters = subheadlineElement.querySelectorAll('span');

      // Animate each letter appearing one by one
      gsap.to(letters, {
        opacity: 1, // Fade in
        duration: 0.5, // Duration for each letter
        stagger: 0.1, // Stagger for typing effect
        ease: 'linear',
        onStart: () => {
          gsap.set(subheadlineElement, { opacity: 1 }); // Ensure it's visible during typing
        }
      });
    };

  }, [headlineRef, subheadlineRef]); // Dependencies array to run the animation only when the refs change

  return (
    <WelcomeContainer>
      <Header1 className='gloock-regular' ref={headlineRef}>
        Hey!  I’m Viktorija
      </Header1>
      <Header2 className='gloock-regular' ref={subheadlineRef} >
        A  Full-Stack  Developer
      </Header2>
    </WelcomeContainer>
  );
};

export default WelcomeMessage;
