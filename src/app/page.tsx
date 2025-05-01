'use client';

import { useEffect, useState } from 'react';
import Landing from '../components/Landing';
import HomeContent from '../components/HomeContent';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowLanding(false);
    } else {
      // Let it show landing, then mark as visited
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleFinishLanding = () => {
    setShowLanding(false);
  };

  return (
    <>
      {showLanding ? (
        <Landing onFinish={handleFinishLanding} />
      ) : (
        <HomeContent />
      )}
    </>
  );
}
