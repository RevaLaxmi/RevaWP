"use client";

import React, { useEffect, useRef, useState } from "react";
import "./cube.css";
import { gsap } from "gsap";
import NeonGridWorld from "./NeonGridWorld"; // ✅ Import your 3D world

const quotes = [
  {
    message: "✨ You're crushing it ✨",
    explanation: "Every bug you fix and line you write brings you closer to mastery. Keep pushing forward!",
  },
  {
    message: "Built with brain & heart 💡❤️",
    explanation: "Great code isn’t just logic—it’s crafted with passion, empathy, and brilliance.",
  },
  {
    message: "Debugging is love 🛠️",
    explanation: "Finding bugs means you care enough to make it better. Debugging is part of the love story of engineering.",
  },
  {
    message: "Keep building 💪",
    explanation: "Your projects are your footprints in the digital world. Keep laying those bricks!",
  },
  {
    message: "Take a breath, you're doing great 🌸",
    explanation: "Tech is intense—remember to pause, breathe, and appreciate how far you’ve come.",
  },
  {
    message: "Pixel perfect, heart full 💖",
    explanation: "Design and logic blend when you create with love. And your users feel it!",
  },
  {
    message: "You’re *the* main character 🎬",
    explanation: "In your coding journey, you're the hero—navigating bugs, features, and breakthroughs.",
  },
  {
    message: "Code. Dance. Repeat 💃💻",
    explanation: "Balance is key. Code hard, vibe harder. Creativity thrives when you’re playful too.",
  },
  {
    message: "Glitch? Nah, it's a feature 😉",
    explanation: "Innovation often comes disguised as a glitch. Lean into unexpected outcomes.",
  },
  {
    message: "Running on passion & pink 💗",
    explanation: "Your energy is your superpower. Let it sparkle through every commit and component.",
  },
];

const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotation = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const animationFrameId = useRef<number>();
  const [selectedQuote, setSelectedQuote] = useState<{ message: string; explanation: string } | null>(null);
  const [worldEntered, setWorldEntered] = useState(false); // ✅ Controls entry into 3D world

  useEffect(() => {
    const rotateCube = () => {
      if (autoRotate.current && cubeRef.current) {
        rotation.current.y += 0.2;
        gsap.set(cubeRef.current, {
          rotateY: rotation.current.y,
          rotateX: rotation.current.x,
        });
      }
      animationFrameId.current = requestAnimationFrame(rotateCube);
    };

    animationFrameId.current = requestAnimationFrame(rotateCube);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const handleCubeClick = () => {
    if (!cubeRef.current) return;

    autoRotate.current = false;
    setSelectedQuote(null);

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const x = Math.floor(Math.random() * 4) * 90;
    const y = Math.floor(Math.random() * 4) * 90;

    rotation.current.x = x;
    rotation.current.y = y;

    gsap.to(cubeRef.current, {
      rotateX: x,
      rotateY: y,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        setTimeout(() => {
          setSelectedQuote(randomQuote);
        }, 500);
      },
    });
  };

  const handleEnterWorld = () => {
    setWorldEntered(true);
  };

  const handleRetry = () => {
    setSelectedQuote(null);
    autoRotate.current = true;
  };

  if (worldEntered) {
    return <NeonGridWorld />; // ✅ Show the 3D world when triggered
  }

  return (
    <div className="cube-container">
      {!selectedQuote && (
        <div className="cube" ref={cubeRef} onClick={handleCubeClick}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      )}

      {selectedQuote && (
        <div className="quote-box">
          <h2 className="quote-message">{selectedQuote.message}</h2>
          <p className="quote-explanation">{selectedQuote.explanation}</p>
          <button className="retry-button" onClick={handleRetry}>↻ New Quote</button>
          <button className="enter-button" onClick={handleEnterWorld}>🌐 Enter World</button>
        </div>
      )}
    </div>
  );
};

export default Cube;
