// src/app/contact/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Cube from "@/components/cube";
import SurpriseMode from "@/components/surprisemode";

const ContactPage: React.FC = () => {
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    // Simple voice recognition (Web Speech API)
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log("Heard:", transcript);
      if (transcript.includes("hey reva") && transcript.includes("surprise me")) {
        setSurprise(true);
      }
    };

    recognition.onerror = (e: any) => {
      console.error("Speech recognition error:", e);
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return (
    <div>
      <Cube />
      <SurpriseMode trigger={surprise} />
    </div>
  );
};

export default ContactPage;
