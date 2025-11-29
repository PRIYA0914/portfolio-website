import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingBox() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.3 * delta;
      ref.current.rotation.y += 0.45 * delta;
    }
  });

  return (
    <mesh ref={ref} scale={[0.8, 0.8, 0.8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0b5cff" metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

export default function ThreeDBox({ width = '44px', height = '40px' }) {
  return (
    <div style={{ width, height, pointerEvents: 'none' }}>
      <Canvas
        style={{ width: '100%', height: '100%', display: 'block' }}
        dpr={window.devicePixelRatio > 1 ? 1.5 : 1}
        camera={{ position: [2.5, 1.5, 2.5], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
        <RotatingBox />
      </Canvas>
    </div>
  );
}
