// components/Particles.tsx
import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000 * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  return (
    <Points positions={particles}>
      <PointMaterial transparent color="#000000" size={0.2} sizeAttenuation depthWrite={false} />

    </Points>
  );
};

export default Particles;
