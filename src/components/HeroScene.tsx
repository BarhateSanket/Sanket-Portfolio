import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const POINT_COUNT = 120;

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(POINT_COUNT * 3);
    for (let i = 0; i < POINT_COUNT; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 18;
      array[i * 3 + 1] = (Math.random() - 0.5) * 10;
      array[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return array;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={POINT_COUNT} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#06b6d4" size={0.15} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => [
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 12 - 4
  ] as [number, number, number], []);
  const rotationSpeed = useMemo(() => 0.001 + Math.random() * 0.002, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * rotationSpeed;
      meshRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(0.3 + Math.random() * 0.4, 1), []);

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function FloatingGroup() {
  const icosas = useMemo(() => Array.from({ length: 6 }, (_, i) => <FloatingGeometry key={i} />), []);
  return <>{icosas}</>;
}

function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-night/90 via-slate-950/80 to-night/95" />
      <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#06b6d4" />
        <directionalLight position={[-3, -3, -3]} intensity={0.5} color="#a855f7" />
        <ParticleField />
        <FloatingGroup />
      </Canvas>
    </div>
  );
}

export default HeroScene;
