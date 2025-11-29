import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const NavbarEffect = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the mesh for a dynamic effect
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default NavbarEffect;