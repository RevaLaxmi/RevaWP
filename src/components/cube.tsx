"use client"; // Add this at the top of your file

import React, { useEffect } from "react";
import './cube.css';
import { gsap } from "gsap"; // Optional: for advanced animations

const Cube: React.FC = () => {
  useEffect(() => {
    // Using GSAP to animate the cube on page load
    gsap.fromTo(".cube", {
      rotationX: 0,
      rotationY: 0,
    }, {
      duration: 5, // Adjust duration for speed of rotation
      rotationX: 360,
      rotationY: 360,
      ease: "power2.inOut",
      repeat: -1, // To make it continuously rotate
    });
  }, []);

  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <h2>Aerial Classes</h2>
        </div>
        <div className="face back">
          <h2>Collaborate</h2>
        </div>
        <div className="face left">
          <h2>Client Sessions</h2>
        </div>
        <div className="face right">
          <h2>More Info</h2>
        </div>
        <div className="face top">
          <h2>Contact Me</h2>
        </div>
        <div className="face bottom">
          <h2>FAQ</h2>
        </div>
      </div>
    </div>
  );
};

export default Cube;
