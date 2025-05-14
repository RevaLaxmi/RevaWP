'use client';

import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
const SpeechRecognition = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

const VoiceChat = () => {
  const [messages, setMessages] = useState<string[]>(['🎤 Talk to me!']);
  const recognitionRef = useRef<any>(null);

  const getBotResponse = (input: string): string => {
    const lower = input.toLowerCase();

    if (lower.includes('name')) return "I'm Reva's AI companion 💡";
    if (lower.includes('favorite color')) return 'I like light mode 🌞';
    if (lower.includes('hello') || lower.includes('hi')) return 'Hey there 👋';
    if (lower.includes('love')) return "Aww, that's sweet 💕";
    return "Hmm, I’m not sure I understood that.";
  };

  useEffect(() => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => console.log('🎙️ Listening...');
    //@ts-ignore
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      console.log('🎧 Heard:', transcript);

      setMessages((prev) => [...prev, `🧍‍♀️ ${transcript}`]);
      const response = getBotResponse(transcript);
      setMessages((prev) => [...prev, `🤖 ${response}`]);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h2>Talk to the AI</h2>
      <div style={{ marginTop: '2rem' }}>
        {messages.map((msg, idx) => (
          <p key={idx} style={{ marginBottom: '1rem' }}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default VoiceChat;
