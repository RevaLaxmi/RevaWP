'use client';

import Header from './Header';
import { ReactNode } from 'react';

export default function RootWrapper({ children, onFinish }: { children: ReactNode, onFinish: () => void }) {
  return (
    <>
      {/* Render the navbar only after animation finishes */}
      <Header />
      <main className="h-screen">
        {children}
      </main>
    </>
  );
}
