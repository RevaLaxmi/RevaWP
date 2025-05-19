// Starfield.tsx
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

const Starfield = ({ count = 3000, depth = 100, speed = 0.5 }) => {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = -Math.random() * depth;
    }
    return pos;
  }, [count, depth]);

  useFrame(() => {
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positionsArray[i * 3 + 2] += speed * 0.1;
      if (positionsArray[i * 3 + 2] > 0) {
        positionsArray[i * 3] = (Math.random() - 0.5) * 100;
        positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positionsArray[i * 3 + 2] = -depth;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export default Starfield;
