"use client";

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, PerspectiveCamera } from '@react-three/drei';
import { AdditiveBlending, Points as ThreePoints, PerspectiveCamera as ThreePerspectiveCamera } from 'three';
import gsap from 'gsap';

function WindParticles() {
  const ref = useRef<ThreePoints>(null);
  const count = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    const v = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      v[i] = Math.random() * 0.02 + 0.01;
    }
    return v;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i];
      if (pos[i * 3] > 10) pos[i * 3] = -10;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#C9A84C"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </Points>
  );
}

function BambooGrove() {
  const bambooCount = 15;
  const bamboos = useMemo(() => {
    return Array.from({ length: bambooCount }).map((_, i) => {
      const height = Math.random() * 10 + 5;
      return {
        id: i,
        height,
        position: [
          (Math.random() - 0.5) * 15,
          height / 2 - 5,
          (Math.random() - 0.5) * 10 - 5
        ] as [number, number, number],
        rotation: [0, 0, (Math.random() - 0.5) * 0.2] as [number, number, number]
      };
    });
  }, []);

  return (
    <group>
      {bamboos.map((b) => (
        <mesh key={b.id} position={b.position} rotation={b.rotation}>
          <cylinderGeometry args={[0.05, 0.08, b.height, 8]} />
          <meshBasicMaterial color="#050505" />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent() {
  const cameraRef = useRef<ThreePerspectiveCamera>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cameraRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;

      gsap.to(cameraRef.current.position, {
        z: 5 - progress * 10,
        y: -progress * 2,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(cameraRef.current.rotation, {
        x: -progress * 0.5,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} fov={75} />
      <fogExp2 attach="fog" args={["#0A0A0F", 0.05]} />
      <ambientLight intensity={0.5} />
      <WindParticles />
      <BambooGrove />
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
