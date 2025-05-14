// src/components/SurpriseMode.tsx
"use client";

import { useState, useEffect } from "react";

export default function SurpriseMode({ trigger }: { trigger: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-3xl p-4">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border-2 border-pink-500">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Rickroll"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white bg-pink-500 px-3 py-1 rounded-full hover:bg-pink-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
