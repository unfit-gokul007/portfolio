import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Background3D() {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
      <ambientLight intensity={1} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#38bdf8"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}