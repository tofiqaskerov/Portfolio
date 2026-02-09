import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { techStack } from "@/data/portfolio";

function SkillNode({ position, name, color }: { position: [number, number, number]; name: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null!);

  const skillPositions = useMemo(() => {
    return techStack.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / techStack.length);
      const theta = Math.sqrt(techStack.length * Math.PI) * phi;
      const radius = 2;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  // Lines connecting nodes
  const linePositions = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < skillPositions.length; i++) {
      for (let j = i + 1; j < skillPositions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(skillPositions[i][0] - skillPositions[j][0], 2) +
          Math.pow(skillPositions[i][1] - skillPositions[j][1], 2) +
          Math.pow(skillPositions[i][2] - skillPositions[j][2], 2)
        );
        if (dist < 2) {
          positions.push(...skillPositions[i], ...skillPositions[j]);
        }
      }
    }
    return new Float32Array(positions);
  }, [skillPositions]);

  const colors = {
    backend: "#38bdf8",
    frontend: "#a78bfa",
    database: "#22d3ee",
    tools: "#f472b6",
  };

  return (
    <group ref={groupRef}>
      {techStack.map((skill, i) => (
        <SkillNode
          key={skill.name}
          position={skillPositions[i]}
          name={skill.name}
          color={colors[skill.category]}
        />
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.1} />
      </lineSegments>
    </group>
  );
}

const SkillSphereScene = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#38bdf8" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#a78bfa" />
        <SkillSphere />
      </Canvas>
    </div>
  );
};

export default SkillSphereScene;
