// components/FloatingShapes.tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShapes = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t) * 0.5;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial emissive={'#00ffff'} color={'#111'} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

export default FloatingShapes;
