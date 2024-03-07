import {
  Environment,
  Float,
  Gltf,
  Sparkles,
  Stars,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Object3D } from "three";
import { Gloomburger } from "./Gloomburger";
import { degToRad } from "three/src/math/MathUtils.js";

export const Experience = () => {
  const astronaut = useRef<Object3D>(null);
  const gloomburger = useRef<Group>(null);

  useFrame(() => {
    if (astronaut.current && gloomburger.current) {
      gloomburger.current.lookAt(astronaut.current.position);
    }
  });

  return (
    <>
      <Sparkles
        count={50}
        scale={2}
        rotation={[0, 0, degToRad(45)]}
        size={2}
        speed={0.1}
      />
      <group ref={gloomburger}>
        <Float scale={0.75}>
          <Gloomburger />
        </Float>
      </group>
      <Float
        position={[0.4, -0, 3.6]}
        rotation={[Math.PI / 3.5, 0, 0]}
        rotationIntensity={2}
        floatIntensity={2}
        speed={1.5}
      >
        <Gltf
          ref={astronaut}
          scale={0.1}
          src="astronaut.glb"
          receiveShadow
          castShadow
        />
      </Float>
      <hemisphereLight intensity={0.75} />
      <ambientLight intensity={0.2} />
      <Environment preset="city" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};
