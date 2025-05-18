// components/NeonGridWorld.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingShapes from './FloatingShapes';
import Particles from './Particles';

const NeonGridWorld = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', background: 'black' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls />
        {/* <gridHelper args={[100, 100, 'cyan', 'magenta']} /> */}
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default NeonGridWorld;
