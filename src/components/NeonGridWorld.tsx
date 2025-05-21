import React, { useEffect, useRef } from "react";

const NeonGridWorld: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    const gridSpacing = 40;
    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#00ffff";
      ctx.lineWidth = 1;

      for (let y = offset % gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = offset % gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      offset += 0.5;
      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        background: "black",
      }}
    />
  );
};

export default NeonGridWorld;
