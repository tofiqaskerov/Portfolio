import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

function FloatingSymbol({ position, symbol, color }: { position: [number, number, number]; symbol: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = initialPos.current[1] + Math.sin(t * 0.5 + initialPos.current[0]) * 0.3;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.z = Math.cos(t * 0.4) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

function GeometricShape({ position, type }: { position: [number, number, number]; type: "icosahedron" | "torus" | "octahedron" }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.4 + position[0]) * 0.4;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {type === "icosahedron" && <icosahedronGeometry args={[0.4, 0]} />}
        {type === "torus" && <torusGeometry args={[0.3, 0.12, 16, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[0.35, 0]} />}
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.4}
          emissive="#38bdf8"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20;
      pos[i + 1] = (Math.random() - 0.5) * 20;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#38bdf8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function MouseTracker() {
  const { normalized } = useMousePosition();
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, normalized.x * 0.3, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, normalized.y * 0.2, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Floating code symbols */}
      <FloatingSymbol position={[-3, 1.5, -2]} symbol="{}" color="#38bdf8" />
      <FloatingSymbol position={[3, -1, -1]} symbol="</>" color="#a78bfa" />
      <FloatingSymbol position={[-2, -1.5, -3]} symbol="//" color="#22d3ee" />
      <FloatingSymbol position={[2, 2, -2]} symbol="=>" color="#38bdf8" />
      <FloatingSymbol position={[0, -2, -4]} symbol="[]" color="#a78bfa" />

      {/* Geometric shapes */}
      <GeometricShape position={[-4, 0, -3]} type="icosahedron" />
      <GeometricShape position={[4, 1, -2]} type="torus" />
      <GeometricShape position={[1, -2.5, -3]} type="octahedron" />
      <GeometricShape position={[-1, 3, -4]} type="torus" />
    </group>
  );
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#38bdf8" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a78bfa" />
        <Particles />
        <MouseTracker />
      </Canvas>
    </div>
  );
};

export default HeroScene;
