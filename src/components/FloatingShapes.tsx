import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const planetData = [
  { position: [10, 2, -5], name: 'Love Planet' },
  { position: [-8, 3, -12], name: 'Calm Cloud' },
  { position: [5, -2, 7], name: 'Forest Orb' },
  { position: [-3, 5, 10], name: 'Sunshine Core' },
];

const FloatingShapes = () => {
  const planetRefs = useRef<THREE.Mesh[]>([]);

  // Load texture from public folder
  const texture = useLoader(THREE.TextureLoader, '/moon.jpg');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    planetRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.position.y += Math.sin(t + i) * 0.005;
        ref.rotation.y += 0.005;
      }
    });
  });

  const handlePlanetClick = (planetName: string) => {
    alert(`🌍 Welcome to ${planetName}!`);
  };

  return (
    <>
      {planetData.map((planet, i) => (
        <mesh
          key={i}
          ref={(el) => (planetRefs.current[i] = el!)}
          position={planet.position}
          onClick={() => handlePlanetClick(planet.name)}
        >
          <sphereGeometry args={[0.75, 64, 64]} /> {/* smoother sphere */}
          <meshStandardMaterial
            map={texture}
            metalness={0.4}
            roughness={0.7}
          />
        </mesh>
      ))}
    </>
  );
};

export default FloatingShapes;
