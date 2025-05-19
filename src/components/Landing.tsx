'use client'; // Keep this line in the Landing component

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Landing({ onFinish }: { onFinish: () => void }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "Hello, I'm Reva";

  useEffect(() => {
    // Check if the animation has been completed already
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      onFinish(); // Skip animation and go to the main content
      return;
    }

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else {
      // After typing animation ends, we fade out and call onFinish to notify parent
      const fadeTimeout = setTimeout(() => setFadeOut(true), 1000); // Wait for 1s, then fade
      const finishTimeout = setTimeout(() => {
        sessionStorage.setItem('hasVisited', 'true'); // Mark that animation is completed
        onFinish(); // Notify parent that animation is done
      }, 2000); // Complete after the fade-out

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(finishTimeout);
      };
    }
  }, [index]);

  return (
    <>
      <Head>
        <link href="@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');" rel="stylesheet" />
      </Head>

      <div
        className={`h-screen w-full flex items-center justify-center text-white transition-opacity duration-1000 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        } bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
      >
        <h1 className="text-8xl tracking-wider font-[Bangers]">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
    </>
  );
}
