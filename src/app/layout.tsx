'use client'; // Keep this line in the Landing component


import './globals.css';
import RootWrapper from '../components/RootWrapper';
import Landing from '../components/Landing';
import { ReactNode, useState } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  const [showLanding, setShowLanding] = useState(true);

  const handleLandingFinish = () => {
    setShowLanding(false); // Hide landing page after animation completes
  };

  return (
    <html lang="en">
      <body className="font-sans">
        {showLanding ? (
          <Landing onFinish={handleLandingFinish} /> // Landing page with typing effect
        ) : (
          <RootWrapper onFinish={handleLandingFinish}>{children}</RootWrapper> // Main content with Header (navbar)
        )}
      </body>
    </html>
  );
}
