import React, { useRef, useEffect, useState } from 'react';
import './Game.css';

const Game = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const dinoRef = useRef({ x: 50, y: 150, width: 60, height: 60, vy: 0, jumping: false });
  const gravity = 0.44;
  const ground = 220;
  const obstaclesRef = useRef([]);
  const lastObstacleTimeRef = useRef(0);
  const obstacleDelayRef = useRef(1200 + Math.random() * 800);
  const gameSpeedRef = useRef(5);

  // Preload images
  const dinoImg = new Image();
  dinoImg.src = '/dino1.png';

  const cactusImg = new Image();
  cactusImg.src = '/cactus.png';

  const reset = () => {
    setScore(0);
    setGameOver(false);
    obstaclesRef.current = [];
    dinoRef.current.y = ground - dinoRef.current.height;
    dinoRef.current.vy = 0;
    dinoRef.current.jumping = false;
    gameSpeedRef.current = 3;
    lastObstacleTimeRef.current = Date.now();
    animate();
  };

  const jump = () => {
    const dino = dinoRef.current;
    if (!dino.jumping) {
      dino.vy = -12;
      dino.jumping = true;
    }
  };

  const createObstacle = (canvas) => {
    const minWidth = 15, maxWidth = 40, minHeight = 20, maxHeight = 60;
    const width = minWidth + Math.random() * (maxWidth - minWidth);
    const height = minHeight + Math.random() * (maxHeight - minHeight);
    const y = ground - height;

    obstaclesRef.current.push({ x: canvas.width, y, width, height });
    obstacleDelayRef.current = 1200 + Math.random() * 800;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dino = dinoRef.current;
    const obstacles = obstaclesRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, ground, canvas.width, 2.5);

    // Dino physics
    dino.y += dino.vy;
    dino.vy += gravity;
    if (dino.y > ground - dino.height) {
      dino.y = ground - dino.height;
      dino.vy = 0;
      dino.jumping = false;
    }

    // Dino drawing
    if (dinoImg.complete) {
      ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    } else {
      ctx.fillStyle = '#222';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    }

    // Obstacles
    const now = Date.now();
    if (now - lastObstacleTimeRef.current > obstacleDelayRef.current) {
      createObstacle(canvas);
      lastObstacleTimeRef.current = now;
    }

    for (let i = 0; i < obstacles.length; i++) {
      const obs = obstacles[i];
      obs.x -= gameSpeedRef.current;

      // Collision detection
      if (
        dino.x < obs.x + obs.width &&
        dino.x + dino.width > obs.x &&
        dino.y < obs.y + obs.height &&
        dino.y + dino.height > obs.y
      ) {
        cancelAnimationFrame(animationRef.current);
        requestAnimationFrame(() => {
          setGameOver(true);
        });
        return;
      }
      

      // Draw obstacle
      if (cactusImg.complete) {
        ctx.drawImage(cactusImg, obs.x, obs.y, obs.width, obs.height);
      } else {
        ctx.fillStyle = '#e53935';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      }
    }

    // Filter out off-screen obstacles
    obstaclesRef.current = obstacles.filter(obs => obs.x + obs.width > 0);

    // Update score only if not game over
    if (!isGameOver) {
      setScore(prev => prev + 1);
    }

    // Optional: increase speed every 500 points
    if (score > 0 && score % 500 === 0) {
      gameSpeedRef.current += 0.2;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') jump();
      if (e.code === 'Enter' && isGameOver) reset();
    };

    document.addEventListener('keydown', handleKeyDown);
    reset();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isGameOver]);

  return (
    <>
      <div className="game-wrapper">
        <canvas ref={canvasRef} width={800} height={250}></canvas>
        <div className="hud">
          <span>Score: {score}</span>
          {isGameOver && (
            <div className="game-over">
              Game Over!
              <button onClick={reset} style={{ marginLeft: '1rem', padding: '0.4rem 1rem' }}>
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
  
      {/* 👇 Add this below the game wrapper */}
      <div className="contact-section">
        <div className="contact-links">
          <a
            href="https://wa.me/919773639004?text=Hi%20Reva%2C%20hope%20you%E2%80%99re%20doing%20well!%0AI'm%20contacting%20you%20regarding%20..."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a> •
          <a
            href="https://instagram.com/yourUsername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a> •
          <a href="mailto:Reva.chauhan1@gmail.com">Email</a>
        </div>

        <p className="contact-message">
        I'm always open to collaborating on exciting projects and connecting with curious, creative minds. If you're looking for support with AI and tech projects, I bring hands-on experience in building intelligent systems, full-stack development, UI/UX design, and automation using tools in machine learning and computer vision.
        </p>
        <p className="contact-message">
        Beyond tech, I offer aerial arts training as a certified instructor, including flying pole, traditional pole, and aerial silks—perfect for anyone from total beginners to experienced movers looking to grow their skills.
        </p>

      </div>

    </>
  );
  
};

export default Game;
