'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './VoiceJumperGame.module.css';

const VoiceJumperGame = () => {
  const [jumpHeight, setJumpHeight] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [obstacleLeft, setObstacleLeft] = useState(500); // Initial obstacle position
  const [gameStarted, setGameStarted] = useState(false);

  const recognitionRef = useRef<any>(null);
  const obstacleRef = useRef<any>(null);
  const characterRef = useRef<any>(null);

  const setupSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.interimResults = true;
    recognitionRef.current.continuous = true;
    recognitionRef.current.onresult = handleSpeech;
    recognitionRef.current.start();
  };

  const handleSpeech = (event: any) => {
    if (!gameStarted) setGameStarted(true);

    const loudness = event.results[0][0].confidence * 100;
    const clampedLoudness = Math.min(loudness, 80);

    setJumpHeight(clampedLoudness);

    setTimeout(() => {
      setJumpHeight(0);
    }, 500);
  };

  // Move the obstacle left every 20ms
  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const interval = setInterval(() => {
      setObstacleLeft((prevLeft) => {
        if (prevLeft < -30) {
          setScore((prev) => prev + 1); // Passed obstacle
          return 500 + Math.random() * 200; // Reset position with random spacing
        }
        return prevLeft - 5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [gameOver, gameStarted]);

  // Collision Detection
  useEffect(() => {
    const checkCollision = setInterval(() => {
      const obstacleX = obstacleLeft;
      const characterY = jumpHeight;

      if (
        obstacleX < 80 && // within character's x range (50px char + 30px obstacle)
        obstacleX > 20 &&
        characterY < 50 // not high enough
      ) {
        setGameOver(true);
        recognitionRef.current?.stop();
      }
    }, 50);

    return () => clearInterval(checkCollision);
  }, [obstacleLeft, jumpHeight]);

  useEffect(() => {
    setupSpeechRecognition();
  }, []);

  const restartGame = () => {
    setJumpHeight(0);
    setObstacleLeft(500);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    setupSpeechRecognition();
  };

  return (
    <div className={styles.gameContainer}>
      {gameOver && (
        <div className={styles.gameOver}>
          Game Over
          <button className={styles.restartButton} onClick={restartGame}>
            Restart
          </button>
        </div>
      )}

      <div
        className={styles.character}
        style={{ bottom: `${jumpHeight}%` }}
        ref={characterRef}
      ></div>

      <div
        className={styles.obstacle}
        style={{ left: `${obstacleLeft}px` }}
        ref={obstacleRef}
      ></div>

      <div className={styles.score}>Score: {score}</div>
    </div>
  );
};

export default VoiceJumperGame;
