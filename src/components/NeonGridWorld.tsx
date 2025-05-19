//NeonGridWorld.tsx


"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingShapes from "./FloatingShapes";
import Particles from "./Particles";
import Starfield from "./Starfield"; // Add this



const NeonGridWorld = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', background: 'white' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls />
        <Particles />
        <Starfield />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};




export default NeonGridWorld;
