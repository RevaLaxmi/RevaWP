'use client';

import React, { useState, useEffect, useRef } from 'react';
import BreathingCircle from '@/components/BreathingCircle'; // Corrected import path for BreathingCircle
import styles from '@/components/Home.module.css'; // Corrected import path for Home.module.css

const ChatPage = () => {
  const [breathing, setBreathing] = useState<'inhale' | 'exhale' | 'rest'>('rest');
  const [isBreathing, setIsBreathing] = useState(false);
  
  const recognitionRef = useRef<any>(null);

  // Set up speech recognition
  const setupSpeechRecognition = () => {
    //@ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.interimResults = true;
    recognitionRef.current.onresult = handleSpeech;
    recognitionRef.current.start();
  };

  const handleSpeech = (event: any) => {
    const speech = event.results[0][0].transcript.toLowerCase();

    // Detect "in" or "out" from the speech
    if (speech.includes('in')) {
      setBreathing('inhale');
    } else if (speech.includes('out')) {
      setBreathing('exhale');
    }
  };

  useEffect(() => {
    setupSpeechRecognition();
  }, []);

  useEffect(() => {
    if (breathing === 'inhale') {
      setIsBreathing(true);
      setTimeout(() => setBreathing('exhale'), 4000); // 4 sec inhale
    } else if (breathing === 'exhale') {
      setTimeout(() => setBreathing('rest'), 4000); // 4 sec exhale
    }
  }, [breathing]);

  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.heading}>Breathe With Me</h1>
      <p>Inhale... Exhale... Speak to control.</p>
      <BreathingCircle breathing={breathing} />
      <div className={styles.instructions}>
        <p>Say "in" to inhale, "out" to exhale, or relax for a moment.</p>
      </div>
    </div>
  );
};

export default ChatPage;
