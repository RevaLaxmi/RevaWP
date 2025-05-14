"use client";

import React, { useEffect, useRef } from "react";
import "./cube.css";
import { gsap } from "gsap";

const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotation = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const animationFrameId = useRef<number>();

  // Auto-rotation logic
  useEffect(() => {
    const rotateCube = () => {
      if (autoRotate.current && cubeRef.current) {
        rotation.current.y += 0.2; // slower rotation speed
        gsap.set(cubeRef.current, {
          rotateY: rotation.current.y,
          rotateX: rotation.current.x,
        });
      }
      animationFrameId.current = requestAnimationFrame(rotateCube);
    };

    animationFrameId.current = requestAnimationFrame(rotateCube);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Drag control logic
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      autoRotate.current = false;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !cubeRef.current) return;

      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;

      rotation.current.y += dx * 0.5;
      rotation.current.x -= dy * 0.5;

      gsap.set(cubeRef.current, {
        rotateY: rotation.current.y,
        rotateX: rotation.current.x,
      });

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      autoRotate.current = true;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="cube-container">
      <div className="cube" ref={cubeRef}>
        <div className="face front">Aerial Classes</div>
        <div className="face back">Project Collaborations</div>
        <div className="face left">Client Sessions</div>
        <div className="face right">Email: reva.chauhan1@gmail.com</div>
        <div className="face top">Phone: +91 97736 39004</div>
        <div className="face bottom">Instagram: @revalaxmi</div>
      </div>
    </div>
  );
};

export default Cube;
