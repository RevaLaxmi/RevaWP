import React, { useRef, useEffect, useState } from 'react';
import './Game.css';

const Game = () => {
  const canvasRef = useRef(null);
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dino = { x: 50, y: 150, width: 40, height: 40, vy: 0, jumping: false };
    const gravity = 0.7;
    const ground = 200;
    let obstacles = [];
    let gameSpeed = 5;
    let animationId;

    // Obstacle timing
    let lastObstacleTime = 0;
    let obstacleDelay = 1200 + Math.random() * 800; // 1.2s - 2s

    const jump = () => {
      if (!dino.jumping) {
        dino.vy = -15; // Lower jump height = easier control
        dino.jumping = true;
      }
    };

    const createObstacle = () => {
      obstacles.push({
        x: canvas.width,
        y: ground - 25,
        width: 20,
        height: 25
      });
      obstacleDelay = 1200 + Math.random() * 800; // new delay for next spawn
    };

    const reset = () => {
      setScore(0);
      setGameOver(false);
      obstacles = [];
      dino.y = ground - dino.height;
      dino.vy = 0;
      dino.jumping = false;
      gameSpeed = 2;
      lastObstacleTime = Date.now();
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = '#f8f8f8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ground
      ctx.fillStyle = '#ddd';
      ctx.fillRect(0, ground, canvas.width, 5);

      // Dino physics
      dino.y += dino.vy;
      dino.vy += gravity;

      if (dino.y > ground - dino.height) {
        dino.y = ground - dino.height;
        dino.vy = 0;
        dino.jumping = false;
      }

      // Draw dino
      ctx.fillStyle = '#222';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Obstacle logic
      const now = Date.now();
      if (now - lastObstacleTime > obstacleDelay) {
        createObstacle();
        lastObstacleTime = now;
      }

      for (let i = 0; i < obstacles.length; i++) {
        const obs = obstacles[i];
        obs.x -= gameSpeed;

        // Collision detection
        if (
          dino.x < obs.x + obs.width &&
          dino.x + dino.width > obs.x &&
          dino.y < obs.y + obs.height &&
          dino.y + dino.height > obs.y
        ) {
          setGameOver(true);
          cancelAnimationFrame(animationId);
          return;
        }

        ctx.fillStyle = '#e53935';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      }

      // Remove off-screen obstacles
      obstacles = obstacles.filter(obs => obs.x + obs.width > 0);

      // Score update
      setScore(prev => prev + 1);

      // Loop
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') jump();
      if (e.code === 'Enter' && isGameOver) reset();
    });

    reset();

    return () => cancelAnimationFrame(animationId);
  }, [isGameOver]);

  return (
    <div className="game-wrapper">
      <canvas ref={canvasRef} width={800} height={250}></canvas>
      <div className="hud">
        <span>Score: {score}</span>
        {isGameOver && <div className="game-over">Game Over! Press Enter to Restart</div>}
      </div>
    </div>
  );
};

export default Game;
